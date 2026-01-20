"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/Card";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import {
  User,
  Lock,
  Mail,
  LogIn,
  UserPlus,
  LogOut,
  Settings,
  BarChart3,
  Calendar,
  BookOpen,
  MessageCircle,
  CheckCircle2,
  GraduationCap,
} from "lucide-react";

interface Profile {
  email: string;
  firstName: string;
  lastName: string;
}

export default function AuthPage() {
  const router = useRouter();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [error, setError] = useState("");
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem("mm_profile") || "null");
      const session = JSON.parse(localStorage.getItem("mm_session") || "null");
      if (stored && session && session.email === stored.email) {
        setProfile(stored);
      }
    } catch {
      // Ignore
    }
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value.trim();
    const password = (form.elements.namedItem("password") as HTMLInputElement).value;

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (mode === "signup") {
      const firstName = (form.elements.namedItem("firstName") as HTMLInputElement).value.trim();
      const lastName = (form.elements.namedItem("lastName") as HTMLInputElement).value.trim();
      const confirm = (form.elements.namedItem("confirm") as HTMLInputElement).value;

      if (!firstName || !lastName) {
        setError("Please fill in all fields.");
        return;
      }

      if (password !== confirm) {
        setError("Passwords do not match.");
        return;
      }

      const newProfile: Profile = { email, firstName, lastName };
      localStorage.setItem("mm_profile", JSON.stringify(newProfile));
      localStorage.setItem("mm_session", JSON.stringify({ email }));
      setProfile(newProfile);
      router.push("/dashboard");
    } else {
      const storedProfile = JSON.parse(localStorage.getItem("mm_profile") || "null");
      if (storedProfile && storedProfile.email === email) {
        localStorage.setItem("mm_session", JSON.stringify({ email }));
        setProfile(storedProfile);
        router.push("/dashboard");
      } else {
        setError("Account not found. Please sign up first.");
      }
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem("mm_session");
    setProfile(null);
  };

  if (profile) {
    return (
      <div className="min-h-screen bg-slate-50">
        {/* Hero Header */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=400&fit=crop"
              alt="Account"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-800/90 to-slate-900/95" />
          </div>

          <div className="relative max-w-6xl mx-auto px-6 py-16">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white text-3xl font-bold">
                {profile.firstName.charAt(0).toUpperCase()}
              </div>
              <div className="text-white">
                <p className="text-violet-400 text-sm font-medium mb-1">Welcome back</p>
                <h1 className="text-4xl font-bold">{profile.firstName} {profile.lastName}</h1>
                <p className="text-slate-400 mt-1">{profile.email}</p>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-6 py-8 pb-32">
          <Card className="mb-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/dashboard" className="p-4 rounded-xl bg-violet-50 hover:bg-violet-100 text-center transition-all group">
                <BarChart3 className="w-8 h-8 text-violet-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-slate-700">Dashboard</span>
              </Link>
              <Link href="/schedule" className="p-4 rounded-xl bg-purple-50 hover:bg-purple-100 text-center transition-all group">
                <Calendar className="w-8 h-8 text-purple-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-slate-700">Schedule</span>
              </Link>
              <Link href="/resources" className="p-4 rounded-xl bg-blue-50 hover:bg-blue-100 text-center transition-all group">
                <BookOpen className="w-8 h-8 text-blue-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-slate-700">Resources</span>
              </Link>
              <Link href="/community" className="p-4 rounded-xl bg-green-50 hover:bg-green-100 text-center transition-all group">
                <MessageCircle className="w-8 h-8 text-green-500 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium text-slate-700">Community</span>
              </Link>
            </div>
          </Card>

          <Card>
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Account Settings</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50">
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-slate-400" />
                  <span className="text-slate-700">Profile Settings</span>
                </div>
                <Button variant="ghost" size="sm">Edit</Button>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-slate-50">
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-slate-400" />
                  <span className="text-slate-700">Change Password</span>
                </div>
                <Button variant="ghost" size="sm">Update</Button>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-slate-200">
              <Button variant="outline" onClick={handleSignOut} className="text-red-600 border-red-200 hover:bg-red-50">
                <LogOut className="w-4 h-4" />
                Sign Out
              </Button>
            </div>
          </Card>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex">
      {/* Left side - Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image
          src="https://images.unsplash.com/photo-1596496050755-c923e73e42e1?w=1200&h=1600&fit=crop"
          alt="Student studying"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/90 to-purple-500/90" />
        <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">
          <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-6">
            <GraduationCap className="w-8 h-8" />
          </div>
          <h2 className="text-4xl font-bold mb-4">Start Your Math Journey</h2>
          <p className="text-violet-100 text-lg mb-8 max-w-md">
            Join thousands of students improving their math skills through peer learning and collaboration.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-violet-200" />
              <span className="text-violet-100">Access to 500+ learning resources</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-violet-200" />
              <span className="text-violet-100">Connect with peer tutors 24/7</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-violet-200" />
              <span className="text-violet-100">Track your progress with analytics</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-violet-200" />
              <span className="text-violet-100">Join a supportive community</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-slate-50">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-white font-bold">
                M
              </div>
              <span className="text-xl font-bold text-slate-900">MathMaster</span>
            </Link>
            <h1 className="text-3xl font-bold text-slate-900">
              {mode === "signin" ? "Welcome back" : "Create your account"}
            </h1>
            <p className="text-slate-500 mt-2">
              {mode === "signin" ? "Sign in to continue learning" : "Start your math journey today"}
            </p>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-8 p-1 bg-slate-200 rounded-xl">
            <button
              onClick={() => { setMode("signin"); setError(""); }}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                mode === "signin"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <LogIn className="w-4 h-4 inline mr-2" />
              Sign In
            </button>
            <button
              onClick={() => { setMode("signup"); setError(""); }}
              className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-all ${
                mode === "signup"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-500 hover:text-slate-700"
              }`}
            >
              <UserPlus className="w-4 h-4 inline mr-2" />
              Sign Up
            </button>
          </div>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === "signup" && (
              <div className="grid grid-cols-2 gap-4">
                <Input name="firstName" label="First Name" placeholder="John" required />
                <Input name="lastName" label="Last Name" placeholder="Doe" required />
              </div>
            )}
            <Input name="email" label="Email" type="email" placeholder="you@example.com" required />
            <Input name="password" label="Password" type="password" placeholder="••••••••" required />
            {mode === "signup" && (
              <Input name="confirm" label="Confirm Password" type="password" placeholder="••••••••" required />
            )}

            {mode === "signin" && (
              <div className="flex justify-end">
                <a href="#" className="text-sm text-violet-500 hover:underline">Forgot password?</a>
              </div>
            )}

            <Button type="submit" className="w-full" size="lg">
              {mode === "signin" ? (
                <>
                  <LogIn className="w-4 h-4" />
                  Sign In
                </>
              ) : (
                <>
                  <UserPlus className="w-4 h-4" />
                  Create Account
                </>
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              {mode === "signin" ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={() => { setMode(mode === "signin" ? "signup" : "signin"); setError(""); }}
                className="text-violet-500 font-medium hover:underline"
              >
                {mode === "signin" ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-200 text-center">
            <p className="text-slate-400 text-xs">
              By continuing, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
