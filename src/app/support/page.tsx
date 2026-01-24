"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/Card";
import { Button } from "@/components/Button";
import { Input, Textarea } from "@/components/Input";
import { SectionLabel } from "@/components/SectionLabel";
import {
  Search,
  Rocket,
  Settings,
  Laptop,
  GraduationCap,
  Users,
  Headphones,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const helpCategories = [
  {
    icon: Rocket,
    title: "Getting Started",
    description: "New to MathMaster? Learn the basics and set up your account.",
    color: "violet",
    links: ["Creating your account", "Setting up your profile", "Navigating the platform"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&h=100&fit=crop",
  },
  {
    icon: Settings,
    title: "Account & Settings",
    description: "Manage your account, preferences, and privacy settings.",
    color: "purple",
    links: ["Update your profile", "Change password", "Notification settings"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&h=100&fit=crop",
  },
  {
    icon: Laptop,
    title: "Technical Support",
    description: "Troubleshoot issues and get help with technical problems.",
    color: "blue",
    links: ["Browser compatibility", "Report a bug", "System requirements"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&h=100&fit=crop",
  },
  {
    icon: GraduationCap,
    title: "Learning Resources",
    description: "Find tutorials and guides to enhance your learning.",
    color: "green",
    links: ["Video tutorials", "Practice problems", "Study guides"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=100&h=100&fit=crop",
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with other learners and share knowledge.",
    color: "yellow",
    links: ["Community guidelines", "Discussion forums", "Study groups"],
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=100&h=100&fit=crop",
  },
];

const faqs = [
  {
    question: "How do I reset my password?",
    answer: 'To reset your password, click on the "Forgot Password" link on the login page. Enter your email address, and we\'ll send you instructions to create a new password.',
  },
  {
    question: "How do I book a tutoring session?",
    answer: 'Go to the Schedule page and click "Book Session". You can browse available tutors, view their profiles, and select a time that works for you.',
  },
  {
    question: "Is MathMaster free to use?",
    answer: "Yes! MathMaster offers free access to resources, community forums, and study materials. Some premium features like one-on-one tutoring may have associated costs.",
  },
  {
    question: "How can I become a tutor?",
    answer: "If you're interested in becoming a peer tutor, contact our support team with your qualifications. We'll review your application and get back to you within 48 hours.",
  },
];

const contactMethods = [
  { icon: Mail, title: "Email Us", description: "support@mathmaster.com", action: "Send Email" },
  { icon: MessageCircle, title: "Live Chat", description: "Available 24/7", action: "Start Chat" },
  { icon: Phone, title: "Call Us", description: "+1 (555) 123-4567", action: "Call Now" },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Header */}
      <header className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&h=500&fit=crop"
            alt="Support team"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, color-mix(in srgb, var(--theme-primary) 35%, transparent), transparent)" }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur rounded-full text-sm font-medium text-white mb-6">
            <Headphones className="w-4 h-4" />
            We&apos;re here to help
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Support Center</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto mb-8">
            Find answers to common questions or get in touch with our friendly team
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search help articles..."
                className="w-full pl-12 pr-4 py-4 bg-slate-900 border border-slate-700 rounded-2xl text-slate-100 placeholder:text-slate-500 shadow-xl focus:outline-none focus:ring-4 focus:ring-violet-500/20"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 -mt-8 mb-12">
          {contactMethods.map((method) => (
            <Card key={method.title} className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-4" style={{ color: "var(--theme-primary)" }}>
                <method.icon className="w-7 h-7" />
              </div>
              <h3 className="font-semibold text-white mb-1">{method.title}</h3>
              <p className="text-slate-400 text-sm mb-4">{method.description}</p>
              <Button variant="outline" size="sm" className="mx-auto">
                {method.action}
              </Button>
            </Card>
          ))}
        </div>

        {/* Help Categories */}
        <h2 className="text-2xl font-bold text-white mb-6">Browse by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {helpCategories.map((cat) => (
            <Card key={cat.title} className="group">
              <div className="flex items-start gap-4 mb-4">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  width={56}
                  height={56}
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <div>
                  <h3 className="font-semibold text-white group-hover:text-primary-themed transition-colors">{cat.title}</h3>
                  <p className="text-slate-400 text-sm">{cat.description}</p>
                </div>
              </div>
              <div className="space-y-2">
                {cat.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="flex items-center gap-2 text-slate-300 text-sm hover:text-primary-themed hover:gap-3 transition-all"
                  >
                    <span>{link}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </Card>
          ))}

          {/* CTA Card */}
          <Card
            className="border-0 text-white"
            style={{ background: "linear-gradient(135deg, var(--theme-primary), var(--theme-primary-light))" }}
          >
            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
              <Headphones className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Can&apos;t find what you need?</h3>
            <p className="text-white/80 text-sm mb-4">
              Our support team is ready to help you with any questions.
            </p>
            <a href="#contact">
              <Button variant="outline" className="border-white/40 text-white hover:bg-white/10 w-full">
                Contact Support
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-black/40 transition-shadow"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="font-semibold text-white">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-slate-300 border-t border-slate-800 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <Card id="contact" className="max-w-3xl mx-auto overflow-hidden" padding="none">
          <div
            className="p-8 text-center text-white"
            style={{ background: "linear-gradient(90deg, var(--theme-primary), var(--theme-primary-light))" }}
          >
            <h2 className="text-2xl font-bold mb-2">Still need help?</h2>
            <p className="text-white/80">Send us a message and we&apos;ll get back to you within 24 hours.</p>
          </div>

          <div className="p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-20 h-20 rounded-full bg-green-500/15 flex items-center justify-center text-green-300 mx-auto mb-4 border border-green-500/20">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input label="Full Name" placeholder="Your name" required />
                  <Input label="Email" type="email" placeholder="you@example.com" required />
                </div>
                <Input label="Subject" placeholder="How can we help?" required />
                <Textarea label="Message" rows={5} placeholder="Describe your issue or question..." required />
                <div className="flex items-center justify-between pt-2">
                  <p className="text-slate-400 text-sm">We&apos;ll respond within 24 hours</p>
                  <Button type="submit" size="lg">
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </form>
            )}
          </div>
        </Card>
      </main>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400 text-sm">
            © 2025 MathMaster. All rights reserved. Built for FBLA Website Design Competition.
          </p>
        </div>
      </footer>
    </div>
  );
}
