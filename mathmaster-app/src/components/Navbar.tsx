"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Info,
  Calendar,
  LayoutDashboard,
  BookOpen,
  Users,
  LifeBuoy,
  LogIn,
  Menu,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/schedule", label: "Schedule" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/resources", label: "Resources" },
  { href: "/community", label: "Community" },
  { href: "/support", label: "Support" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userInitial, setUserInitial] = useState("U");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      try {
        const profile = JSON.parse(localStorage.getItem("mm_profile") || "null");
        const session = JSON.parse(localStorage.getItem("mm_session") || "null");
        if (profile && session && session.email === profile.email) {
          setIsSignedIn(true);
          setUserInitial((profile.firstName || "U").charAt(0).toUpperCase());
        }
      } catch {
        setIsSignedIn(false);
      }
    };
    checkAuth();
    window.addEventListener("storage", checkAuth);
    
    // Handle scroll for navbar background
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("storage", checkAuth);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={clsx(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled 
        ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-lg shadow-slate-200/20" 
        : "bg-white/80 backdrop-blur-xl border-b border-slate-200/50"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform">
              M
            </div>
            <span className="text-xl font-bold text-slate-900 hidden sm:block">
              Math<span className="gradient-text">Master</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "text-violet-600 bg-violet-50"
                      : "text-slate-600 hover:text-violet-600 hover:bg-violet-50/50"
                  )}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-violet-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side - Auth button */}
          <div className="flex items-center gap-3">
            <Link
              href="/auth"
              className={clsx(
                "relative flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                pathname === "/auth"
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-500/30"
                  : isSignedIn
                  ? "bg-violet-50 text-violet-600 hover:bg-violet-100"
                  : "bg-gradient-to-r from-violet-600 to-purple-500 text-white hover:shadow-lg hover:shadow-violet-500/30 hover:-translate-y-0.5"
              )}
            >
              {isSignedIn ? (
                <>
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
                    {userInitial}
                  </div>
                  <span className="hidden sm:inline">Account</span>
                </>
              ) : (
                <>
                  <LogIn className="w-4 h-4" />
                  <span className="hidden sm:inline">Sign In</span>
                </>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-4 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={clsx(
                      "px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                      isActive
                        ? "text-violet-600 bg-violet-50"
                        : "text-slate-600 hover:text-violet-600 hover:bg-violet-50/50"
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
