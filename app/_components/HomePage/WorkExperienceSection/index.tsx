'use client';
import { workExperiences } from '@/config/workExperiences';
import WorkItem from './work-item';
import SectionHeading from '@/components/SectionHeading';
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

export default function WorkExperienceSection() {
  return (
    <section className='mt-10 flex w-full flex-col gap-8 py-6 sm:py-10'>
      <SectionHeading>Work Experience</SectionHeading>
      {/* Work item */}
      <div className='grid grid-cols-2 gap-10 md:gap-5'>
        {workExperiences.map((experience, index) => (
          <motion.div
            key={index}
            variants={fadeInAnimationVariants}
            initial={'initial'}
            whileInView={'animate'}
            className='col-span-2 md:col-span-1'
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <WorkItem key={experience.title} experience={experience} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
