"use client";

import { useState, useEffect, useRef } from "react";
import { Palette, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const COLOR_THEMES = [
  { name: "Violet", value: "violet", color: "#7c3aed" },
  { name: "Blue", value: "blue", color: "#2563eb" },
  { name: "Green", value: "green", color: "#16a34a" },
  { name: "Red", value: "red", color: "#dc2626" },
  { name: "Orange", value: "orange", color: "#ea580c" },
];

export function ThemeSelector({ className = "" }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [colorTheme, setColorTheme] = useState("violet");
  const containerRef = useRef<HTMLDivElement>(null);

  const applyColorTheme = (colorName: string) => {
    // Remove all color theme classes
    document.documentElement.classList.remove(
      "theme-violet", "theme-blue", "theme-green", "theme-red", "theme-orange"
    );
    // Add the new color theme class
    document.documentElement.classList.add(`theme-${colorName}`);
  };

  useEffect(() => {
    const savedColor = localStorage.getItem("mm_color_theme") || "violet";
    setColorTheme(savedColor);
    applyColorTheme(savedColor);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const el = containerRef.current;
      if (!el) return;
      if (event.target instanceof Node && !el.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
    };
  }, [isOpen]);

  const handleColorChange = (newColor: string) => {
    setColorTheme(newColor);
    localStorage.setItem("mm_color_theme", newColor);
    applyColorTheme(newColor);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-slate-800/90 backdrop-blur-sm border border-slate-700 hover:bg-slate-700 transition-all shadow-sm"
      >
        <Palette className="w-4 h-4 text-slate-300" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              className="absolute right-0 mt-2 w-56 bg-slate-800 rounded-2xl shadow-xl border border-slate-700 overflow-hidden z-50"
            >
              <div className="p-2">
                <div className="text-xs font-semibold text-slate-400 px-3 py-2">Color Theme</div>
                {COLOR_THEMES.map((c) => {
                  const isSelected = colorTheme === c.value;
                  return (
                    <button
                      key={c.value}
                      onClick={() => handleColorChange(c.value)}
                      className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-all ${
                        isSelected
                          ? ""
                          : "text-slate-300 hover:bg-slate-700"
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
                        <span className="text-sm font-medium text-slate-300">{c.name}</span>
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
