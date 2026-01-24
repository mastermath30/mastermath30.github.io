import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { SectionLabel } from "@/components/SectionLabel";
import {
  Heart,
  Target,
  Rocket,
  MessageCircle,
  Users,
  Lightbulb,
  TrendingUp,
  Accessibility,
  HandHelping,
  Award,
  GraduationCap,
  Globe,
} from "lucide-react";

const stats = [
  { value: "10K+", label: "Active Learners", sublabel: "Improving weekly", icon: Users },
  { value: "500+", label: "Lessons & Resources", sublabel: "Guided explanations", icon: GraduationCap },
  { value: "24/7", label: "Community Help", sublabel: "Ask anytime", icon: Globe },
];

const steps = [
  { number: "01", title: "Join the Community", description: "Create your free account and set up your student profile. Tell us about your learning goals.", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop" },
  { number: "02", title: "Connect & Learn", description: "Access resources, join study groups, attend live sessions, and ask questions in the forum.", image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop" },
  { number: "03", title: "Track & Succeed", description: "Monitor your progress on the dashboard, earn achievements, and watch your skills grow.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop" },
];

const team = [
  { name: "Dr. Sarah Johnson", role: "Founder & Lead Educator", initials: "SJ", bio: "PhD in Mathematics with 10+ years of teaching experience at top universities.", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" },
  { name: "Michael Chen", role: "Head of Technology", initials: "MC", bio: "Software Engineer & Education Technology Specialist. Built platforms for millions of users.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
  { name: "Priya Patel", role: "Community Manager", initials: "PP", bio: "Expert in building and nurturing learning communities. Passionate about student success.", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop" },
];

const values = [
  { icon: Accessibility, title: "Accessibility", description: "Quality education should be available to everyone, regardless of background or location.", color: "violet" },
  { icon: HandHelping, title: "Community", description: "Learning is better together. We foster collaboration and peer support.", color: "green" },
  { icon: Lightbulb, title: "Clarity", description: "Complex concepts deserve clear explanations. No jargon, just understanding.", color: "blue" },
  { icon: TrendingUp, title: "Growth", description: "Every student can improve. We celebrate progress, not perfection.", color: "purple" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <header className="relative min-h-[70vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1920&h=1080&fit=crop"
            alt="Students collaborating"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-violet-500/20 backdrop-blur border border-violet-500/30 rounded-full text-sm font-medium text-violet-300 mb-6">
              <Heart className="w-4 h-4" />
              Our Story
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              About <span className="gradient-text">MathMaster</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              We make math feel learnable again — with clear practice, strong explanations, and a community that helps you when you&apos;re stuck.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/auth">
                <Button size="lg">
                  <Rocket className="w-5 h-5" />
                  Get Started
                </Button>
              </Link>
              <Link href="/community">
                <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                  <MessageCircle className="w-5 h-5" />
                  Visit the Forum
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center p-8 rounded-2xl bg-slate-900 border border-slate-700">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-4" style={{ color: "var(--theme-primary)" }}>
                  <stat.icon className="w-7 h-7" />
                </div>
                <div className="text-4xl font-bold gradient-text font-mono mb-2">{stat.value}</div>
                <p className="text-white font-medium">{stat.label}</p>
                <p className="text-slate-400 text-sm">{stat.sublabel}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative aspect-square max-w-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-purple-500 rounded-3xl rotate-3 opacity-20" />
                <Image
                  src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=600&h=600&fit=crop"
                  alt="Students learning together"
                  fill
                  className="object-cover rounded-3xl"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-slate-900 rounded-2xl shadow-xl p-4 border border-slate-700">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center" style={{ color: "var(--theme-primary)" }}>
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-white">98% Success Rate</p>
                    <p className="text-sm text-slate-400">Students improving grades</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <SectionLabel icon={Target} className="mb-6">
                Our Mission
              </SectionLabel>
              <h2 className="text-4xl font-bold text-white mb-6">
                Making Math Accessible to Everyone
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                MathMaster was founded on the belief that everyone deserves access to quality math education. 
                We&apos;re building a community where students can learn from each other, share knowledge, and grow 
                together in their mathematical journey.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                Whether you&apos;re struggling with basic algebra or diving into calculus, we&apos;re here to help you succeed.
                Our platform combines the power of peer learning with expert resources to create an environment where
                every student can thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel icon={Rocket} className="mb-6">
              Getting Started
            </SectionLabel>
            <h2 className="text-4xl font-bold text-white mt-6">
              How It Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-32 left-[60%] w-full h-0.5 bg-gradient-to-r from-violet-300 to-transparent z-0" />
                )}
                <Card className="relative overflow-hidden" padding="none">
                  <div className="relative h-48">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                    <div className="absolute top-4 left-4 text-5xl font-bold text-white/30 font-mono">
                      {step.number}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-300">{step.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel icon={Users} className="mb-6">
              Meet the Team
            </SectionLabel>
            <h2 className="text-4xl font-bold text-white mt-6">
              The People Behind MathMaster
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center overflow-hidden" padding="none">
                <div className="relative h-64 bg-slate-950">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/45" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                  <p className="text-primary-themed text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-slate-400 text-sm">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel icon={Heart} className="mb-6">
              What We Believe
            </SectionLabel>
            <h2 className="text-4xl font-bold text-white mt-6">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center mx-auto mb-4" style={{ color: "var(--theme-primary)" }}>
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-slate-400 text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1557683316-973673bdar25d?w=1920&h=600&fit=crop"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/70" />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(90deg, color-mix(in srgb, var(--theme-primary) 35%, transparent), transparent)" }}
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-xl text-slate-200 mb-8">
            Become part of a growing community of learners and educators who are passionate about mathematics.
          </p>
          <Link href="/auth">
            <Button size="lg" className="shadow-xl">
              <Rocket className="w-5 h-5" />
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>

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
