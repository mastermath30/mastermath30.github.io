import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { SectionLabel } from "@/components/SectionLabel";
import { Avatar } from "@/components/Avatar";
import {
  GraduationCap,
  Rocket,
  PlayCircle,
  Brain,
  TrendingUp,
  Users,
  MessageCircle,
  Star,
  UserPlus,
  BookOpen,
  Trophy,
  ArrowRight,
  ChevronDown,
  Quote,
  Sparkles,
  Zap,
  Target,
} from "lucide-react";

const stats = [
  { value: "12K+", label: "Students Helped" },
  { value: "320+", label: "Peer Tutors" },
  { value: "98%", label: "Success Rate" },
  { value: "24/7", label: "Support" },
];

const features = [
  {
    icon: Brain,
    title: "Interactive Learning",
    description: "Engage with step-by-step lessons and practice problems that adapt to your learning pace.",
    link: "/resources",
    linkText: "Explore Resources",
    image: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?w=400&h=300&fit=crop",
  },
  {
    icon: TrendingUp,
    title: "Track Progress",
    description: "Monitor your learning journey with detailed analytics and personalized goal tracking.",
    link: "/dashboard",
    linkText: "View Dashboard",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
  },
  {
    icon: Users,
    title: "Peer Tutoring",
    description: "Connect with experienced peer tutors for live sessions and personalized help.",
    link: "/schedule",
    linkText: "Book a Session",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
  },
  {
    icon: MessageCircle,
    title: "Community Forum",
    description: "Ask questions, share solutions, and learn together with our supportive community.",
    link: "/community",
    linkText: "Join Discussion",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop",
  },
];

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up for free and tell us about your learning goals. Our system will personalize your experience based on your current level and objectives.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop",
  },
  {
    icon: BookOpen,
    title: "Learn & Practice",
    description: "Access interactive lessons, video tutorials, and practice problems. Book sessions with peer tutors when you need extra help.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop",
  },
  {
    icon: Trophy,
    title: "Track & Succeed",
    description: "Monitor your progress on the dashboard, earn achievements, and watch your math skills grow over time.",
    image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=300&h=200&fit=crop",
  },
];

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Calculus Student",
    initials: "SJ",
    gradient: "violet" as const,
    rating: 5,
    text: "MathMaster completely changed my perspective on calculus. The interactive lessons made limits and derivatives so much more intuitive. I aced my final exam!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Michael Chen",
    role: "Engineering Major",
    initials: "MC",
    gradient: "blue" as const,
    rating: 4.5,
    text: "The linear algebra course was a game-changer for my engineering studies. The visualizations helped me understand matrix operations and vector spaces perfectly.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Emily Rodriguez",
    role: "High School Senior",
    initials: "ER",
    gradient: "purple" as const,
    rating: 5,
    text: "I used to struggle with math, but MathMaster's step-by-step approach made everything click. My SAT math score improved by 150 points!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1920&h=1080&fit=crop"
            alt="Mathematics background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-violet-50/90 to-purple-50/95" />
        </div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-300/10 rounded-full blur-3xl" />

        {/* Floating math symbols */}
        <div className="absolute top-20 left-[15%] text-7xl text-violet-400/30 font-serif animate-bounce" style={{ animationDuration: '3s' }}>∫</div>
        <div className="absolute top-32 right-[20%] text-6xl text-purple-400/30 font-serif animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>π</div>
        <div className="absolute bottom-40 left-[10%] text-5xl text-violet-400/30 font-serif animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '0.5s' }}>∑</div>
        <div className="absolute bottom-32 right-[15%] text-6xl text-purple-400/30 font-serif animate-bounce" style={{ animationDuration: '4.5s', animationDelay: '1.5s' }}>√</div>
        <div className="absolute top-1/2 left-[5%] text-5xl text-violet-400/20 font-serif animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>∞</div>
        <div className="absolute top-[40%] right-[8%] text-4xl text-purple-400/20 font-serif animate-bounce" style={{ animationDuration: '3.8s', animationDelay: '0.8s' }}>θ</div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur border border-violet-200 rounded-full text-sm font-medium text-violet-600 mb-6 shadow-lg">
                <Sparkles className="w-4 h-4" />
                Student Learning Hub
                <span className="px-2 py-0.5 bg-violet-600 text-white text-xs rounded-full">New</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
                Master Mathematics
                <br />
                <span className="gradient-text relative">
                  With Confidence
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path d="M2 10C50 4 150 4 298 10" stroke="url(#gradient)" strokeWidth="4" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="300" y2="0">
                        <stop stopColor="#7c3aed"/>
                        <stop offset="1" stopColor="#a78bfa"/>
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              <p className="text-xl text-slate-600 mb-8 max-w-xl leading-relaxed">
                An interactive learning platform created by students, for students.
                Unlock the beauty of numbers through peer tutoring and collaboration.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <Link href="/auth">
                  <Button size="lg" className="shadow-xl shadow-violet-500/25 group">
                    <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                    Start Learning Now
                  </Button>
                </Link>
                <Link href="#features">
                  <Button variant="outline" size="lg" className="bg-white/80 backdrop-blur">
                    <PlayCircle className="w-5 h-5" />
                    See How It Works
                  </Button>
                </Link>
              </div>

              {/* Stats inline */}
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold gradient-text font-mono">{stat.value}</div>
                    <div className="text-slate-500 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right content - Hero Image */}
            <div className="relative hidden lg:block">
              <div className="relative">
                {/* Main image */}
                <div className="relative w-full aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-purple-500 rounded-3xl rotate-6 opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-600 to-purple-500 rounded-3xl -rotate-3 opacity-10" />
                  <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-violet-100">
                    <Image
                      src="https://images.unsplash.com/photo-1596496050755-c923e73e42e1?w=600&h=600&fit=crop"
                      alt="Student studying mathematics"
                      width={600}
                      height={600}
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Floating cards */}
                <div className="absolute -top-4 -left-4 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Progress</p>
                      <p className="font-bold text-slate-900">+27% this week</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 border border-slate-100 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                      <Target className="w-5 h-5 text-violet-600" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Problems Solved</p>
                      <p className="font-bold text-slate-900">148 today</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-1/2 -right-8 bg-white rounded-2xl shadow-xl p-3 border border-slate-100 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop" alt="" width={32} height={32} className="w-8 h-8 rounded-full border-2 border-white" />
                      <Image src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop" alt="" width={32} height={32} className="w-8 h-8 rounded-full border-2 border-white" />
                      <Image src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop" alt="" width={32} height={32} className="w-8 h-8 rounded-full border-2 border-white" />
                    </div>
                    <span className="text-xs text-slate-500">+2.4k online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400">
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-slate-400 text-sm mb-8">Trusted by students from top institutions</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale">
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/2560px-MIT_logo.svg.png" alt="MIT" width={80} height={40} className="h-8 w-auto object-contain" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Stanford_University_seal_2003.svg/1200px-Stanford_University_seal_2003.svg.png" alt="Stanford" width={40} height={40} className="h-10 w-auto object-contain" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Harvard_University_logo.svg/2560px-Harvard_University_logo.svg.png" alt="Harvard" width={120} height={40} className="h-8 w-auto object-contain" />
            <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Berkeley_wordmark.svg/2560px-Berkeley_wordmark.svg.png" alt="Berkeley" width={100} height={40} className="h-6 w-auto object-contain" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel icon={Zap} className="mb-4">
              Why Choose MathMaster?
            </SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6 mb-4">
              Learn Smarter, Not Harder
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Our platform combines the best of peer learning with powerful tools to help you succeed in mathematics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={feature.title} className="group overflow-hidden" padding="none">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative h-48 md:h-auto">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20" />
                  </div>
                  <div className="md:w-3/5 p-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-100 to-purple-100 flex items-center justify-center text-violet-500 mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <Link
                      href={feature.link}
                      className="inline-flex items-center gap-2 text-violet-500 text-sm font-medium hover:gap-3 transition-all"
                    >
                      {feature.linkText}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1920&h=1080&fit=crop"
            alt="Background"
            fill
            className="object-cover opacity-5"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-violet-50/50 to-slate-50" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel icon={Rocket} className="mb-4">
              Your Learning Journey
            </SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6 mb-4">
              How MathMaster Works
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Three simple steps to transform your math skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-24 left-[60%] w-full h-0.5 bg-gradient-to-r from-violet-300 to-transparent" />
                )}
                <Card variant="gradient" className="relative overflow-hidden">
                  {/* Step number badge */}
                  <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-violet-600 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10">
                    {index + 1}
                  </div>
                  {/* Image */}
                  <div className="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden rounded-t-2xl">
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent" />
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center text-violet-500 mb-4 shadow-sm">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <SectionLabel icon={Quote} className="mb-4">
              Success Stories
            </SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-6 mb-4">
              What Students Say
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Join thousands of students who have transformed their math skills
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="relative overflow-hidden">
                {/* Quote mark */}
                <div className="absolute top-4 right-4 text-6xl text-violet-100 font-serif">&ldquo;</div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={56}
                      height={56}
                      className="w-14 h-14 rounded-xl object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 text-violet-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4"
                        fill={i < Math.floor(testimonial.rating) ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                </div>
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
          <div className="absolute inset-0 bg-gradient-to-r from-violet-600/95 to-purple-500/95" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Ready to Master Math?
          </h2>
          <p className="text-violet-100 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of students who are already improving their math skills with MathMaster.
          </p>
          <Link href="/auth">
            <Button size="lg" className="bg-white text-violet-600 hover:bg-violet-50 shadow-xl">
              <Rocket className="w-5 h-5" />
              Get Started Free
            </Button>
          </Link>
          <p className="text-violet-200 text-sm mt-4">No credit card required • Free forever</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600 to-purple-500 flex items-center justify-center text-white font-bold">
                  M
                </div>
                <span className="text-xl font-bold">MathMaster</span>
              </div>
              <p className="text-slate-400 text-sm">
                Empowering students to master mathematics through peer learning and collaboration.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">Platform</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/dashboard" className="text-slate-400 hover:text-violet-400 transition-colors">Dashboard</Link></li>
                <li><Link href="/schedule" className="text-slate-400 hover:text-violet-400 transition-colors">Schedule</Link></li>
                <li><Link href="/resources" className="text-slate-400 hover:text-violet-400 transition-colors">Resources</Link></li>
                <li><Link href="/community" className="text-slate-400 hover:text-violet-400 transition-colors">Community</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="text-slate-400 hover:text-violet-400 transition-colors">About Us</Link></li>
                <li><Link href="/support" className="text-slate-400 hover:text-violet-400 transition-colors">Support</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-violet-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-slate-400 hover:text-violet-400 transition-colors">Terms of Service</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-400 mb-4">Connect</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-violet-500 flex items-center justify-center text-slate-400 hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-violet-500 flex items-center justify-center text-slate-400 hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 hover:bg-violet-500 flex items-center justify-center text-slate-400 hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8">
            <p className="text-center text-slate-500 text-sm">
              © 2025 MathMaster. All rights reserved. Built for FBLA Website Design Competition.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
