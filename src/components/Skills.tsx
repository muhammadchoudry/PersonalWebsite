'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface SkillCategory {
  title: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['C++', 'TypeScript', 'JavaScript', 'Python', 'Java', 'MATLAB', 'Verilog', 'VHDL'],
  },
  {
    title: 'Frameworks',
    skills: ['React', 'Vue', 'Electron', 'Three.js', 'FastAPI', 'ROS', 'Node.js'],
  },
  {
    title: 'Hardware',
    skills: [
      'PCB Design',
      'FPGA',
      'SoC Architecture',
      'RF/Microwave',
      'Circuit Simulation',
      'SystemC',
    ],
  },
  {
    title: 'Domains',
    skills: [
      'Human-Robot Interaction',
      'Real-Time Systems',
      'Autonomous Vehicles',
      'Machine Learning',
      'Embedded Systems',
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' as const } },
  };

  return (
    <section id="skills" ref={ref} className="py-24 px-6 bg-navy">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="text-accent font-mono text-base">03.</span>
          <h2 className="text-3xl font-bold text-lightest-slate">Skills & Technologies</h2>
          <div className="flex-1 h-px bg-lightest-navy ml-4" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
          className="grid sm:grid-cols-2 gap-6"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.title}
              variants={cardVariants}
              className="bg-light-navy rounded-xl p-6 border border-lightest-navy hover:border-accent/30 transition-colors duration-300"
            >
              <h3 className="text-accent font-mono text-sm font-semibold mb-4 tracking-wider uppercase">
                {cat.title}
              </h3>
              <motion.div
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
                className="flex flex-wrap gap-2"
              >
                {cat.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={tagVariants}
                    className="px-3 py-1 text-xs font-mono text-lightest-slate bg-lightest-navy rounded-full border border-lightest-navy hover:border-accent/50 hover:text-accent transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
