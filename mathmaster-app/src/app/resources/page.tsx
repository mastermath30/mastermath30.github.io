"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/Card";
import { Button } from "@/components/Button";
import { SectionLabel } from "@/components/SectionLabel";
import {
  BookOpen,
  Book,
  CheckSquare,
  PlayCircle,
  ExternalLink,
  SquareRadical,
  Shapes,
  Calculator,
  GraduationCap,
  Puzzle,
  Play,
  Download,
  FileText,
  Sparkles,
  Video,
  FileDown,
} from "lucide-react";

const categories = [
  {
    icon: Book,
    title: "Lessons & Guides",
    description: "Step-by-step tutorials and study guides for every topic.",
    color: "violet",
    href: "#lessons",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=200&fit=crop",
  },
  {
    icon: CheckSquare,
    title: "Practice Problems",
    description: "Hundreds of problems with detailed solutions.",
    color: "green",
    href: "#practice",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop",
  },
  {
    icon: PlayCircle,
    title: "Video Lessons",
    description: "Watch expert explanations and walkthroughs.",
    color: "purple",
    href: "#videos",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
  },
];

const lessons = [
  {
    icon: Book,
    title: "OpenStax Mathematics",
    description: "Free textbooks for Algebra, Precalculus, Calculus, Statistics, and more.",
    tags: ["Algebra", "Calculus", "Statistics"],
    link: "https://openstax.org/subjects/math",
    color: "violet",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=100&h=100&fit=crop",
  },
  {
    icon: GraduationCap,
    title: "Paul's Online Math Notes",
    description: "Clear explanations with tons of worked examples for Calculus and Algebra.",
    tags: ["Calculus", "Algebra"],
    link: "https://tutorial.math.lamar.edu/",
    color: "blue",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=100&h=100&fit=crop",
  },
];

const practice = [
  {
    icon: CheckSquare,
    title: "Khan Academy Practice",
    description: "Skill-based practice for every level from arithmetic to calculus.",
    link: "https://www.khanacademy.org/math",
    color: "green",
    image: "https://images.unsplash.com/photo-1596496050827-8299e0220de1?w=100&h=100&fit=crop",
  },
  {
    icon: Puzzle,
    title: "Art of Problem Solving",
    description: "Challenge problems and deep explanations for competitions.",
    link: "https://artofproblemsolving.com/",
    color: "purple",
    image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=100&h=100&fit=crop",
  },
];

const quizzes = [
  {
    icon: SquareRadical,
    title: "Algebra Start Quiz",
    time: "10 questions • 12 min",
    description: "Quick checkpoint to place you at the right starting level.",
    color: "violet",
    difficulty: "Starter",
  },
  {
    icon: SquareRadical,
    title: "Algebra Basics",
    time: "15 questions • 20 min",
    description: "Test your understanding of equations, expressions, and inequalities.",
    color: "violet",
    difficulty: "Beginner",
  },
  {
    icon: Shapes,
    title: "Geometry Proofs",
    time: "10 questions • 15 min",
    description: "Practice writing and understanding geometric proofs.",
    color: "green",
    difficulty: "Intermediate",
  },
  {
    icon: Calculator,
    title: "Calculus: Derivatives",
    time: "20 questions • 30 min",
    description: "Master the fundamentals of differentiation and derivative rules.",
    color: "blue",
    difficulty: "Advanced",
  },
];

const videos = [
  {
    title: "Essence of Linear Algebra",
    description: "Beautiful visual explanations of linear algebra concepts.",
    channel: "3Blue1Brown",
    link: "https://www.3blue1brown.com/",
    thumbnail: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=225&fit=crop",
    duration: "16 videos",
  },
  {
    title: "Calculus Fundamentals",
    description: "Step-by-step calculus lessons from basics to advanced.",
    channel: "Khan Academy",
    link: "https://www.youtube.com/@khanacademy",
    thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=225&fit=crop",
    duration: "40+ hours",
  },
  {
    title: "Quick Math Tutorials",
    description: "Short, focused videos on specific math topics.",
    channel: "PatrickJMT",
    link: "https://www.youtube.com/@patrickjmt",
    thumbnail: "https://images.unsplash.com/photo-1596496050755-c923e73e42e1?w=400&h=225&fit=crop",
    duration: "500+ videos",
  },
];

const downloads = [
  { title: "Algebra Formula Sheet", description: "All essential formulas in one place", icon: "📐" },
  { title: "Trig Identities Cheat Sheet", description: "Quick reference for all trig identities", icon: "📊" },
  { title: "Calculus Reference Guide", description: "Derivatives and integrals reference", icon: "∫" },
  { title: "Practice Worksheet Pack", description: "50+ problems with solutions", icon: "📝" },
];

const partnerLogos = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Khan_Academy_logo.svg/2560px-Khan_Academy_logo.svg.png", alt: "Khan Academy", width: 140, height: 40 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Art_of_Problem_Solving_logo.png/1200px-Art_of_Problem_Solving_logo.png", alt: "Art of Problem Solving", width: 140, height: 40 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/OpenStax_logo.svg/2560px-OpenStax_logo.svg.png", alt: "OpenStax", width: 120, height: 40 },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Desmos_logo.svg/2560px-Desmos_logo.svg.png", alt: "Desmos", width: 120, height: 40 },
];

const diffLanguages = [
  {
    id: "javascript",
    label: "JavaScript",
    before: ["const total = (nums) => {", "  let sum = 0;", "  nums.forEach((n) => (sum += n));", "  return sum;", "};"],
    after: ["const total = (nums) => {", "  return nums.reduce((sum, n) => sum + n, 0);", "};"],
  },
  {
    id: "python",
    label: "Python",
    before: ["def total(nums):", "    result = 0", "    for n in nums:", "        result += n", "    return result"],
    after: ["def total(nums):", "    return sum(nums)"],
  },
  {
    id: "java",
    label: "Java",
    before: ["int total(int[] nums) {", "  int sum = 0;", "  for (int n : nums) {", "    sum += n;", "  }", "  return sum;", "}"],
    after: ["int total(int[] nums) {", "  return java.util.Arrays.stream(nums).sum();", "}"],
  },
  {
    id: "cpp",
    label: "C++",
    before: ["int total(const vector<int>& nums) {", "  int sum = 0;", "  for (int n : nums) {", "    sum += n;", "  }", "  return sum;", "}"],
    after: ["int total(const vector<int>& nums) {", "  return std::accumulate(nums.begin(), nums.end(), 0);", "}"],
  },
  {
    id: "typescript",
    label: "TypeScript",
    before: ["const total = (nums: number[]) => {", "  let sum = 0;", "  nums.forEach((n) => (sum += n));", "  return sum;", "};"],
    after: ["const total = (nums: number[]) => nums.reduce((sum, n) => sum + n, 0);"],
  },
  {
    id: "swift",
    label: "Swift",
    before: ["func total(_ nums: [Int]) -> Int {", "  var sum = 0", "  for n in nums {", "    sum += n", "  }", "  return sum", "}"],
    after: ["func total(_ nums: [Int]) -> Int {", "  return nums.reduce(0, +)", "}"],
  },
];

export default function ResourcesPage() {
  const [selectedLang, setSelectedLang] = useState(diffLanguages[0]?.id ?? "javascript");
  const currentLang = diffLanguages.find((lang) => lang.id === selectedLang) ?? diffLanguages[0];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <header className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1920&h=400&fit=crop"
            alt="Library"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-indigo-800/90 to-purple-900/95" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur rounded-full text-sm font-medium text-white mb-4">
              <Sparkles className="w-4 h-4" />
              Learning Hub
            </div>
            <h1 className="text-5xl font-bold text-white mb-4">Resources</h1>
            <p className="text-blue-200 text-xl">
              Access lessons, videos, quizzes, and downloadable materials to supercharge your learning.
            </p>
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L60 55C120 50 240 40 360 35C480 30 600 30 720 32.5C840 35 960 40 1080 42.5C1200 45 1320 45 1380 45L1440 45V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#f8fafc"/>
          </svg>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8 pb-32">
        {/* Quick Access Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 -mt-8">
          {categories.map((cat) => (
            <Link key={cat.title} href={cat.href}>
              <Card className="h-full cursor-pointer overflow-hidden group" padding="none">
                <div className="relative h-32">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <div className={`absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-white/90 flex items-center justify-center text-${cat.color}-500`}>
                    <cat.icon className="w-6 h-6" />
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{cat.title}</h3>
                  <p className="text-slate-500 text-sm">{cat.description}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Partner Logos */}
        <section className="mb-12">
          <div className="text-center mb-6">
            <SectionLabel icon={Sparkles} className="mb-3">
              Trusted Learning Partners
            </SectionLabel>
            <p className="text-slate-500 text-sm">
              We collaborate with top learning platforms to bring you the best resources.
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-10 opacity-70 grayscale">
            {partnerLogos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-8 w-auto object-contain"
              />
            ))}
          </div>
        </section>

        {/* Lessons Section */}
        <section id="lessons" className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                <Book className="w-5 h-5 text-violet-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Lessons & Study Guides</h2>
                <p className="text-slate-500 text-sm">Free, high-quality resources to help you learn</p>
              </div>
            </div>
            <Link href="#" className="text-violet-500 text-sm font-medium hover:underline">View all</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lessons.map((lesson) => (
              <a
                key={lesson.title}
                href={lesson.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="h-full hover:border-violet-200 group">
                  <div className="flex items-start gap-4">
                    <Image
                      src={lesson.image}
                      alt={lesson.title}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-3">
                        <h4 className="font-semibold text-slate-900 group-hover:text-violet-600 transition-colors">{lesson.title}</h4>
                        <ExternalLink className="w-4 h-4 text-slate-400 shrink-0" />
                      </div>
                      <p className="text-slate-500 text-sm mt-1">{lesson.description}</p>
                      <div className="flex gap-2 mt-3">
                        {lesson.tags.map((tag) => (
                          <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* Practice Section */}
        <section id="practice" className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
              <CheckSquare className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Practice Problems</h2>
              <p className="text-slate-500 text-sm">Test your knowledge and improve your skills</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {practice.map((item) => (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card className="h-full hover:border-green-200 group">
                  <div className="flex items-start gap-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-xl object-cover shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-3">
                        <h4 className="font-semibold text-slate-900 group-hover:text-green-600 transition-colors">{item.title}</h4>
                        <ExternalLink className="w-4 h-4 text-slate-400 shrink-0" />
                      </div>
                      <p className="text-slate-500 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>

          <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-violet-500" />
            Interactive Quizzes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {quizzes.map((quiz) => (
              <Card key={quiz.title} className="relative overflow-hidden">
                <div className={`absolute top-0 right-0 px-3 py-1 bg-${quiz.color}-100 text-${quiz.color}-700 text-xs font-medium rounded-bl-xl`}>
                  {quiz.difficulty}
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-12 h-12 rounded-xl bg-${quiz.color}-100 flex items-center justify-center text-${quiz.color}-500`}>
                    <quiz.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900">{quiz.title}</h4>
                    <p className="text-slate-500 text-xs">{quiz.time}</p>
                  </div>
                </div>
                <p className="text-slate-500 text-sm mb-4">{quiz.description}</p>
                <Button className="w-full">
                  <Play className="w-4 h-4" />
                  Start Quiz
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Code Comparison Lab */}
        <section id="code-lab" className="mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Code Comparison Lab</h2>
              <p className="text-slate-500 text-sm">
                Compare the same solution across multiple languages and understand how the logic flows.
              </p>
            </div>
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              className="px-3 py-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-violet-500"
            >
              {diffLanguages.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.label}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="diff-panel p-0 overflow-hidden">
              <div className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-300 bg-slate-900/60">
                Before
              </div>
              <div className="p-4 space-y-2 text-xs whitespace-pre">
                {currentLang.before.map((line) => (
                  <div key={line} className="diff-line-remove px-3 py-1 rounded-md">
                    - {line}
                  </div>
                ))}
              </div>
            </Card>
            <Card className="diff-panel p-0 overflow-hidden">
              <div className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-slate-300 bg-slate-900/60">
                After
              </div>
              <div className="p-4 space-y-2 text-xs whitespace-pre">
                {currentLang.after.map((line) => (
                  <div key={line} className="diff-line-add px-3 py-1 rounded-md">
                    + {line}
                  </div>
                ))}
              </div>
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Card className="h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center text-violet-600">
                  <Puzzle className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900">Logic First</h3>
              </div>
              <p className="text-slate-500 text-sm">
                The same algorithm reads differently across languages, but the structure stays consistent.
              </p>
            </Card>
            <Card className="h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
                  <FileText className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900">Readable Patterns</h3>
              </div>
              <p className="text-slate-500 text-sm">
                We break down steps so you can spot improvements, edge cases, and cleaner syntax.
              </p>
            </Card>
            <Card className="h-full">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-slate-900">Know the System</h3>
              </div>
              <p className="text-slate-500 text-sm">
                Learn how each feature connects, so troubleshooting and enhancements are faster.
              </p>
            </Card>
          </div>
        </section>

        {/* Videos Section */}
        <section id="videos" className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center">
                <Video className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900">Video Lessons</h2>
                <p className="text-slate-500 text-sm">Visual explanations to help concepts click</p>
              </div>
            </div>
            <Link href="#" className="text-violet-500 text-sm font-medium hover:underline">View all</Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video) => (
              <a
                key={video.title}
                href={video.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card padding="none" className="overflow-hidden group">
                  <div className="relative aspect-video">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="w-8 h-8 text-violet-500 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 px-2 py-1 bg-black/70 text-white text-xs rounded">
                      {video.duration}
                    </div>
                    <div className="absolute bottom-2 left-2 px-2 py-1 bg-white/90 text-slate-700 text-xs font-medium rounded">
                      {video.channel}
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold text-slate-900 mb-1 group-hover:text-violet-600 transition-colors">{video.title}</h4>
                    <p className="text-slate-500 text-sm">{video.description}</p>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </section>

        {/* Downloads Section */}
        <Card id="downloads" className="overflow-hidden" padding="none">
          <div className="p-6 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center">
                <FileDown className="w-5 h-5" />
              </div>
              <div>
                <CardTitle className="text-white">Downloadable Materials</CardTitle>
                <CardDescription className="text-slate-400">Reference sheets, formula guides, and worksheets</CardDescription>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {downloads.map((item) => (
                <div key={item.title} className="p-4 rounded-xl bg-slate-50 border border-slate-100 hover:border-violet-200 hover:bg-violet-50 transition-all cursor-pointer group">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h4 className="font-medium text-slate-900 text-sm mb-1">{item.title}</h4>
                  <p className="text-slate-500 text-xs mb-3">{item.description}</p>
                  <Button variant="outline" size="sm" className="w-full group-hover:border-violet-300 group-hover:text-violet-600">
                    <Download className="w-4 h-4" />
                    Download PDF
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </main>
    </div>
  );
}
