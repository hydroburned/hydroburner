

import React from 'react';
import { skillCategories, Skill } from '../data/skills';

const SkillCard: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div className="group bg-white/30 dark:bg-gray-900/40 backdrop-blur-lg p-6 rounded-2xl border border-white/40 dark:border-white/20 transition-all duration-300 hover:border-blue-500/50 hover:-translate-y-1">
    <div className="flex justify-between items-center">
      <h4 className="font-heading text-lg font-bold text-gray-900 dark:text-white">{skill.name}</h4>
      <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{skill.level}%</span>
    </div>
    <div className="relative mt-2 h-1.5 w-full bg-gray-300 dark:bg-gray-700/50 rounded-full overflow-hidden">
      <div
        className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-300 group-hover:shadow-[0_0_10px_theme(colors.blue.500)] shimmer-bar overflow-hidden"
        style={{ width: `${skill.level}%` }}
      />
    </div>
    <div className="mt-4">
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{skill.description}</p>
      <div className="flex flex-wrap gap-2">
        {skill.tools.map(tool => (
          <span key={tool} className="text-xs bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full">
            {tool}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12 md:mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight">My Expertise</h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            A combination of skills, tools, and methodologies I use to deliver high-quality products.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h3 className="font-heading text-2xl font-bold mb-6 text-gray-800 dark:text-gray-300">{category.name}</h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;