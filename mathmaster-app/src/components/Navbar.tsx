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
  User,
} from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";

const navItems = [
  { href: "/", icon: Home, label: "Home" },
  { href: "/about", icon: Info, label: "About" },
  { href: "/schedule", icon: Calendar, label: "Schedule" },
  { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  { href: "/resources", icon: BookOpen, label: "Resources" },
  { href: "/community", icon: Users, label: "Community" },
  { href: "/support", icon: LifeBuoy, label: "Support" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userInitial, setUserInitial] = useState("U");

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
    return () => window.removeEventListener("storage", checkAuth);
  }, []);

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1.5 px-4 py-3 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-full shadow-lg shadow-slate-200/50">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "relative flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 group",
                isActive
                  ? "bg-violet-100 text-violet-600"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-900 text-white text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {item.label}
              </span>
            </Link>
          );
        })}
        <Link
          href="/auth"
          className={clsx(
            "relative flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 group",
            pathname === "/auth"
              ? "bg-violet-100 text-violet-600"
              : "text-slate-500 hover:bg-slate-100 hover:text-slate-700"
          )}
        >
          {isSignedIn ? (
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white text-xs font-bold">
              {userInitial}
            </div>
          ) : (
            <LogIn className="w-5 h-5" />
          )}
          <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-slate-900 text-white text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {isSignedIn ? "Account" : "Sign In"}
          </span>
        </Link>
      </div>
    </nav>
  );
}
