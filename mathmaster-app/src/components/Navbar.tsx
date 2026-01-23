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
  Sun,
  Moon,
  Palette,
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

const accentOptions = [
  { value: "violet", label: "Violet", className: "bg-violet-500" },
  { value: "blue", label: "Blue", className: "bg-blue-500" },
  { value: "emerald", label: "Emerald", className: "bg-emerald-500" },
  { value: "rose", label: "Rose", className: "bg-rose-500" },
  { value: "orange", label: "Orange", className: "bg-orange-500" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userInitial, setUserInitial] = useState("U");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [accent, setAccent] = useState("violet");
  const [showPalette, setShowPalette] = useState(false);

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

  useEffect(() => {
    const savedTheme = localStorage.getItem("mm_theme");
    const savedAccent = localStorage.getItem("mm_accent");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
    if (savedAccent) {
      setAccent(savedAccent);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("mm_theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.dataset.accent = accent;
    localStorage.setItem("mm_accent", accent);
  }, [accent]);

  return (
    <nav
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl border-b",
        scrolled ? "shadow-lg shadow-slate-200/20" : ""
      )}
      style={{
        backgroundColor: scrolled ? "color-mix(in srgb, var(--background) 94%, transparent)" : "color-mix(in srgb, var(--background) 86%, transparent)",
        borderColor: "color-mix(in srgb, var(--border) 70%, transparent)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-violet-500/30 group-hover:scale-110 transition-transform">
              <span className="relative z-10">MM</span>
              <span className="absolute inset-1 rounded-lg bg-white/10" />
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
            <div className="relative hidden sm:flex items-center gap-2">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="p-2 rounded-lg border border-slate-200/60 bg-white/70 hover:bg-white/90 text-slate-600 hover:text-slate-900 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setShowPalette((prev) => !prev)}
                className="p-2 rounded-lg border border-slate-200/60 bg-white/70 hover:bg-white/90 text-slate-600 hover:text-slate-900 transition-colors"
                aria-label="Choose accent color"
              >
                <Palette className="w-4 h-4" />
              </button>
              {showPalette && (
                <div className="absolute right-0 top-12 w-44 p-3 rounded-xl bg-white border border-slate-200 shadow-xl">
                  <p className="text-xs font-semibold text-slate-500 mb-2">Accent Color</p>
                  <div className="flex flex-wrap gap-2">
                    {accentOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          setAccent(option.value);
                          setShowPalette(false);
                        }}
                        className={clsx(
                          "w-7 h-7 rounded-full border-2 transition-transform",
                          option.className,
                          accent === option.value ? "border-slate-900 scale-110" : "border-white"
                        )}
                        aria-label={option.label}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
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
