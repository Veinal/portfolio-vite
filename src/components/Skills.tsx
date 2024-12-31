import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Globe, Palette } from 'lucide-react';

const skills = [
  {
    category: 'Frontend',
    icon: <Code2 className="w-8 h-8 text-emerald-400" />,
    items: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js']
  },
  {
    category: 'Backend',
    icon: <Database className="w-8 h-8 text-emerald-400" />,
    items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB']
  },
  {
    category: 'DevOps',
    icon: <Globe className="w-8 h-8 text-emerald-400" />,
    items: ['Docker', 'AWS', 'CI/CD', 'Git']
  },
  {
    category: 'Design',
    icon: <Palette className="w-8 h-8 text-emerald-400" />,
    items: ['Figma', 'UI/UX', 'Responsive Design', 'Animations']
  }
];

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-gray-800" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          ref={ref}
          className="text-3xl font-bold text-white mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-700 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold text-white ml-3">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-300">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};