'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

interface TimelineNode {
  company: string;
  role: string;
  dates: string;
  color: string;
  highlights: string[];
}

const nodes: TimelineNode[] = [
  {
    company: 'Apple',
    role: 'Hardware Systems Engineer',
    dates: '2009 – 2010',
    color: '#a1a1aa',
    highlights: [
      'Designed RF subsystems for mobile SoCs',
      'Optimized antenna performance for sub-GHz bands',
      'Collaborated on early-stage silicon validation',
    ],
  },
  {
    company: 'Qualcomm',
    role: 'Senior Systems Engineer',
    dates: '2011 – 2016',
    color: '#3b82f6',
    highlights: [
      'Architected modem baseband firmware for LTE Cat-12',
      'Filed 8 patents on RF signal processing and power optimization',
      'Led cross-functional team of 12 across US and India',
    ],
  },
  {
    company: 'University of Waterloo',
    role: 'M.Eng / Research Associate',
    dates: '2012 – 2016',
    color: '#eab308',
    highlights: [
      'Published 4 papers on human-robot interaction and FPGA-based control',
      'Developed novel VHDL frameworks for real-time sensor fusion',
      'Recipient of NSERC industrial research grant',
    ],
  },
  {
    company: 'HBO',
    role: 'Principal Full-Stack Engineer',
    dates: '2016 – 2021',
    color: '#8b5cf6',
    highlights: [
      'Led re-architecture of HBO Max streaming platform serving 50M+ users',
      'Built Electron desktop apps and React/Vue SPAs for internal tooling',
      'Drove adoption of TypeScript and microservices across 6 engineering teams',
    ],
  },
  {
    company: 'Zoox',
    role: 'Staff Robotics & Systems Engineer',
    dates: '2021 – Present',
    color: '#14b8a6',
    highlights: [
      'Designed real-time sensor fusion pipelines for autonomous vehicle perception',
      'Built ROS2-based human-robot interaction framework for rider experience',
      'Contributed 2 patents on AV safety-critical embedded systems',
    ],
  },
];

const floatingKeywords = [
  'SystemC', 'VHDL', 'LTE', 'ROS2', 'PCIe', 'FPGA', 'TypeScript',
  'Eigen', 'SLAM', 'CAN Bus', 'TensorRT', 'gRPC', 'Docker', 'WebRTC',
];

export default function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={sectionRef} className="py-24 px-6 bg-light-navy relative overflow-hidden">
      {/* Floating parallax background keywords */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {floatingKeywords.map((kw, i) => (
          <Parallax
            key={kw}
            speed={((i % 5) - 2) * 3}
          >
            <span
              className="absolute font-mono text-xs text-lightest-navy whitespace-nowrap"
              style={{
                top: `${(i * 137.5) % 90 + 5}%`,
                left: `${(i * 83.7) % 88 + 6}%`,
                fontSize: `${0.65 + (i % 3) * 0.15}rem`,
                opacity: 0.4,
              }}
            >
              {kw}
            </span>
          </Parallax>
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-accent font-mono text-base">02.</span>
          <h2 className="text-3xl font-bold text-lightest-slate">Career Timeline</h2>
          <div className="flex-1 h-px bg-lightest-navy ml-4" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical spine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-lightest-navy -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-12">
            {nodes.map((node, i) => {
              const isLeft = i % 2 === 0;
              return (
                <TimelineEntry
                  key={node.company}
                  node={node}
                  index={i}
                  isLeft={isLeft}
                  isInView={isInView}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineEntry({
  node,
  index,
  isLeft,
  isInView,
}: {
  node: TimelineNode;
  index: number;
  isLeft: boolean;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      className={`relative flex flex-col md:flex-row items-start gap-6 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Card */}
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
        <div
          className="bg-navy rounded-xl p-6 border hover:shadow-lg transition-shadow duration-300"
          style={{ borderColor: `${node.color}40` }}
        >
          <div className="flex items-center gap-2 mb-1" style={{ justifyContent: isLeft ? 'flex-end' : 'flex-start' }}>
            <span className="text-xs font-mono text-slate">{node.dates}</span>
          </div>
          <h3 className="text-xl font-bold mb-1" style={{ color: node.color }}>
            {node.company}
          </h3>
          <p className="text-light-slate text-sm font-medium mb-4">{node.role}</p>
          <ul className={`space-y-2 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
            {node.highlights.map((h) => (
              <li key={h} className="text-slate text-sm flex items-start gap-2" style={{ justifyContent: isLeft ? 'flex-end' : 'flex-start' }}>
                {!isLeft && <span className="text-accent mt-1 flex-shrink-0">▹</span>}
                <span>{h}</span>
                {isLeft && <span className="text-accent mt-1 flex-shrink-0">◃</span>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Center dot — desktop only */}
      <div className="hidden md:flex w-2/12 justify-center items-start pt-6">
        <div
          className="w-4 h-4 rounded-full border-2 border-navy ring-4"
          style={{ backgroundColor: node.color, ringColor: node.color, boxShadow: `0 0 0 4px ${node.color}30` }}
        />
      </div>

      {/* Spacer for alternating side */}
      <div className="hidden md:block w-5/12" />
    </motion.div>
  );
}
