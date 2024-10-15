'use client';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <motion.article
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: 'tween',
        duration: 0.2,
      }}
    >
      <div className='grid gap-3 border-b border-slate-200 pb-4 dark:border-muted-foreground/20'>
        <h1 className='text-4xl font-bold'>About</h1>
        <p className='text-lg text-muted-foreground'>
          Everything you (maybe) want to know about me
        </p>
      </div>
      {/* Content */}
      <div className='mt-8 grid gap-3'>
        <p className='leading-8'>
          Hello, my name is <b>Trần Quang Khánh</b>, a{' '}
          <b>Junior Software Engineer</b> who graduated from{' '}
          <b>HCMC University of Technology & Education</b>. As a developer, I do
          enjoy coding, creating web application interfaces and its
          functionality with <b>React.js</b> or <b>Next.js</b>
        </p>
      </div>
    </motion.article>
  );
}
