'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: '10+', label: 'Patents' },
  { value: '4', label: 'Publications' },
  { value: '15+', label: 'Years' },
  { value: '4', label: 'Companies' },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  };

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-6 bg-navy"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          {/* Section heading */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-16">
            <span className="text-accent font-mono text-base">01.</span>
            <h2 className="text-3xl font-bold text-lightest-slate">About Me</h2>
            <div className="flex-1 h-px bg-lightest-navy ml-4" />
          </motion.div>

          {/* Two-column layout */}
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            {/* Left: photo placeholder */}
            <motion.div variants={itemVariants} className="flex justify-center md:justify-start">
              <div className="w-48 h-48 rounded-xl bg-lightest-navy border-2 border-accent/30 flex items-center justify-center text-slate text-sm font-mono">
                Photo
              </div>
            </motion.div>

            {/* Right: bio */}
            <motion.div variants={itemVariants} className="space-y-4 text-light-slate leading-relaxed">
              <p>
                I&apos;m a systems engineer who thrives at the intersection of hardware and
                software. With over 15 years of experience, I&apos;ve shipped products that
                run on billions of devices and contributed to cutting-edge autonomous vehicle
                technology.
              </p>
              <p>
                My career has spanned some of the most innovative companies in tech —{' '}
                <span className="text-accent">Apple</span>,{' '}
                <span className="text-accent">Qualcomm</span>,{' '}
                <span className="text-accent">HBO</span>, and{' '}
                <span className="text-accent">Zoox</span> — where I&apos;ve led teams and
                built systems from silicon-level firmware to full-stack web platforms.
              </p>
              <p>
                I hold degrees from the{' '}
                <span className="text-accent">University of Waterloo</span> and am the
                inventor on 10+ patents spanning RF/microwave systems, SoC architecture,
                and human-robot interaction. My work has been published in 4 academic
                papers.
              </p>
              <p>
                When I&apos;m not engineering, I&apos;m exploring ideas at the boundary of
                robotics, machine learning, and real-time embedded systems.
              </p>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="bg-light-navy rounded-xl p-6 text-center border border-lightest-navy hover:border-accent/40 transition-colors duration-300"
              >
                <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
                <div className="text-slate text-sm font-mono">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
