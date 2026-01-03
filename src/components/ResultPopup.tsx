"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ResultPopup({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  if (!open) return null;

  const selectedTeams = [
    "Code.storm","Infinity Champions","Infinite Horizons",
    "Stack Overflow Survivors","XYNAPSE","Kronos","NeoHackers",
    "Lifetime Error","DIGITAL DOMINATORS","AKSV-Rangers",
    "Syntax Samurai","Hackanova","404Found","Cyberpunk",
    "The Tech Titans","Buildbuddies","Interstellar","ProCoders",
    "Byteditors","TROJEN TAMERS","F5","Prévision","NEURAL NINJAS",
    "Nexus Forge","HackWin","MindMesh","Hackathon Heisters",
    "Tech4ce","LOLgorithms","Binary Bulls","Hacktivators",
    "VOID","RUNTIME TERROR","Alpha","Code Fusion","ENCRYPT",
    "X","Zynth","Script kiddie","Coding Cadets","Debug Thugs",
    "thebugs","ParkhiXNazar","Hackspark","Team Dilation",
    "PhantomX","The Technical Guild","Visioneers",
    "Ctrl+Alt+Defeat","Vulnstack",
  ];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-3 sm:px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", stiffness: 220, damping: 22 }}
          className="
            relative w-full
            max-w-lg sm:max-w-xl md:max-w-2xl
            h-[90vh] sm:h-[85vh]
            overflow-hidden
            border-2 border-primary
            bg-background
            p-4 sm:p-6 md:p-8
            shadow-[0_0_50px_rgba(255,9,9,0.5)]
          "
        >
          {/* Glow */}
          <div
            className="absolute inset-0 z-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at center, #ff0909 0%, transparent 70%)",
              filter: "blur(140px)",
            }}
          />

          {/* Grid */}
          <div className="absolute inset-0 z-0 opacity-10 bg-[linear-gradient(to_right,#ff090920_1px,transparent_1px),linear-gradient(to_bottom,#ff090920_1px,transparent_1px)] bg-[size:28px_28px]" />

          <div className="relative z-10 flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-mono text-primary uppercase text-sm sm:text-lg md:text-xl font-bold">
                Selected Teams
              </h2>
              <button
                onClick={onClose}
                className="p-2 rounded hover:bg-primary/20 transition"
              >
                <X size={22} />
              </button>
            </div>

            {/* ✅ SCROLL AREA */}
            <div className="flex-1 overflow-y-auto space-y-2 sm:space-y-3 pr-1">
              {selectedTeams.map((team, i) => (
                <div
                  key={i}
                  className="
                    border border-primary/50
                    px-3 sm:px-4 py-2 sm:py-3
                    text-xs sm:text-sm md:text-base
                    text-primary font-mono
                    rounded-md bg-black/10 backdrop-blur-sm
                  "
                >
                  {i + 1}. {team}
                </div>
              ))}
            </div>

            {/* Footer */}
            <button
              onClick={onClose}
              className="
                mt-4
                w-full
                border border-primary
                py-2.5 sm:py-3
                text-xs sm:text-sm md:text-base
                font-mono uppercase tracking-widest
                hover:bg-primary hover:text-white
                rounded-lg transition
              "
            >
              Close
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
