"use client";

import { useState, useEffect } from "react";
import { Sun, Moon, Palette, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const THEMES = [
  { name: "Light", value: "light", icon: Sun },
  { name: "Dark", value: "dark", icon: Moon },
];

const COLOR_THEMES = [
  { name: "Violet", value: "violet", color: "#7c3aed" },
  { name: "Blue", value: "blue", color: "#2563eb" },
  { name: "Green", value: "green", color: "#16a34a" },
  { name: "Red", value: "red", color: "#dc2626" },
  { name: "Orange", value: "orange", color: "#ea580c" },
];

export function ThemeSelector({ className = "" }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [colorTheme, setColorTheme] = useState("violet");

  const applyColorTheme = (colorName: string) => {
    // Remove all color theme classes
    document.documentElement.classList.remove(
      "theme-violet", "theme-blue", "theme-green", "theme-red", "theme-orange"
    );
    // Add the new color theme class
    document.documentElement.classList.add(`theme-${colorName}`);
  };

  const applyDarkMode = (isDark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.body.style.background = "#0f172a";
      document.body.style.color = "#f8fafc";
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.background = "#fafafa";
      document.body.style.color = "#0f172a";
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("mm_theme") || "light";
    const savedColor = localStorage.getItem("mm_color_theme") || "violet";
    setTheme(savedTheme);
    setColorTheme(savedColor);
    
    applyDarkMode(savedTheme === "dark");
    applyColorTheme(savedColor);
  }, []);

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme);
    localStorage.setItem("mm_theme", newTheme);
    applyDarkMode(newTheme === "dark");
  };

  const handleColorChange = (newColor: string) => {
    setColorTheme(newColor);
    localStorage.setItem("mm_color_theme", newColor);
    applyColorTheme(newColor);
  };

  return (
    <div className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all shadow-sm"
      >
        <Palette className="w-4 h-4 text-slate-600 dark:text-slate-300" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="absolute right-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 overflow-hidden z-50"
            >
              <div className="p-2">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 px-3 py-2">Theme</div>
                {THEMES.map((t) => {
                  const Icon = t.icon;
                  return (
                    <button
                      key={t.value}
                      onClick={() => handleThemeChange(t.value)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${
                        theme === t.value
                          ? "bg-primary/10 text-primary-themed"
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{t.name}</span>
                      </span>
                      {theme === t.value && <Check className="w-4 h-4" />}
                    </button>
                  );
                })}
                
                <div className="h-px bg-slate-200 dark:bg-slate-700 my-2" />
                
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 px-3 py-2">Color Theme</div>
                {COLOR_THEMES.map((c) => {
                  const isSelected = colorTheme === c.value;
                  return (
                    <button
                      key={c.value}
                      onClick={() => handleColorChange(c.value)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-all ${
                        isSelected
                          ? ""
                          : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700"
                      }`}
                      style={isSelected ? { 
                        backgroundColor: `${c.color}20`,
                        boxShadow: `inset 0 0 0 2px ${c.color}`
                      } : {}}
                    >
                      <span className="flex items-center gap-2">
                        <span 
                          className={`w-4 h-4 rounded-full ${isSelected ? 'ring-2 ring-white shadow-md' : ''}`}
                          style={{ backgroundColor: c.color }}
                        />
                        <span className="text-sm font-medium text-slate-700 dark:text-slate-300">{c.name}</span>
                      </span>
                      {isSelected && <Check className="w-4 h-4" style={{ color: c.color }} />}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
