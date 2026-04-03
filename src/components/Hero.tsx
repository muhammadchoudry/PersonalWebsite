'use client';

import { motion } from 'framer-motion';
import { Mail, ChevronDown } from 'lucide-react';

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(ellipse 80% 60% at 20% 40%, #112240 0%, transparent 60%),
            radial-gradient(ellipse 60% 50% at 80% 70%, #0d1f3c 0%, transparent 55%),
            #0a192f
          `,
          animation: 'pulse 8s ease-in-out infinite',
        }}
      />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(8px); }
        }
        .bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
      `}</style>

      <motion.div
        className="text-center px-6 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.p
          variants={itemVariants}
          className="text-accent font-mono text-base mb-6 tracking-widest"
        >
          Hi, my name is
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-7xl font-bold text-lightest-slate mb-4 leading-tight"
        >
          Muhammad Choudry
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-5xl font-bold text-slate mb-6 leading-tight"
        >
          Robotics R&amp;D Engineer
          <span className="text-light-slate"> | </span>
          Full-Stack Systems Architect
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-light-slate text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          From silicon to software — building systems that work in the real world.
        </motion.p>

        {/* Social icons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6 mb-14"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-accent transition-colors duration-200"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate hover:text-accent transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="mailto:hello@muhammadchoudry.com"
            className="text-slate hover:text-accent transition-colors duration-200"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex justify-center gap-4">
          <a
            href="#about"
            className="px-8 py-3 border border-accent text-accent font-mono text-sm rounded hover:bg-accent/10 transition-colors duration-200"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-accent text-navy font-mono text-sm font-semibold rounded hover:bg-accent/90 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll down chevron */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-slow">
        <a href="#about" className="text-slate hover:text-accent transition-colors" aria-label="Scroll down">
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
}
