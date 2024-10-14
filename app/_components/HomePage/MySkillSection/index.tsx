'use client';

import SectionHeading from '@/components/SectionHeading';
import { skillsData } from '@/constants/skills-data';
import { motion, Variants } from 'framer-motion';

const fadeInAnimationVariants: Variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function MySkillSection() {
  return (
    <div className='grid gap-8'>
      <SectionHeading>My skills</SectionHeading>
      <ul className='flex flex-wrap justify-center gap-2 text-lg'>
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className='cursor-pointer rounded-xl border px-5 py-3 dark:bg-white/10'
            variants={fadeInAnimationVariants}
            initial={'initial'}
            whileInView={'animate'}
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
