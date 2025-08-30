'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ABOUT_GIF_URL, AVATAR_URL, RESUME_URL } from '@/constants';
import { Button } from '@/components';
import { ArrowRight, DownloadIcon } from 'lucide-react';
import Link from 'next/link';

export default function IntroductionSection() {
  return (
    <section className='-mt-10 flex min-h-[calc(100vh-80px)] scroll-mt-[100rem] flex-col justify-center space-y-4 text-center sm:mb-0'>
      <div className='flex items-center justify-center'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'tween',
              duration: 0.2,
            }}
          >
            <Image
              src={ABOUT_GIF_URL}
              alt='author avatar'
              width={320}
              height={320}
              quality={100}
              priority
              className='light:border-secondary h-56 w-56 rounded-full border-[0.35rem] from-purple-400 to-pink-500 object-cover shadow-xl sm:h-80 sm:w-80 dark:bg-gradient-to-tr'
            />
          </motion.div>
        </div>
      </div>
      <motion.div
        className='mb-10 mt-4 flex flex-col gap-y-4 px-4'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className='text-2xl font-bold leading-[1.5] sm:text-4xl lg:text-6xl'>
          {`Hello, I'm Khánh`}
        </span>
        <span className='text-xl font-medium text-muted-foreground'>
          {`Junior Software Engineer`}
        </span>
        <span className='text-base text-muted-foreground'>
          {`I enjoy build sites. My focus is React (Next.JS)`}
        </span>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        className='flex flex-row justify-center gap-2'
      >
        <Button className='space-x-2'>
          <span>Contact me</span>
          <ArrowRight size={18} className='duration-100' />
        </Button>
        <Link href={RESUME_URL} target='_blank' legacyBehavior>
          <Button className='space-x-2' variant={'success'}>
            <span>View & Download my Resume</span>
            <DownloadIcon size={18} />
          </Button>
        </Link>
      </motion.div>
    </section>
  );
}
