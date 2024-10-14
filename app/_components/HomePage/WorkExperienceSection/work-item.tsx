'use client';
import Image from 'next/image';
import ISBLogo from '@/assets/images/ISB-logo.png';
import { WorkItemModel } from '@/types';
import { useRouter } from 'next/navigation';

export interface WorkItemProps {
  experience: WorkItemModel;
}

export default function WorkItem({ experience }: WorkItemProps) {
  const router = useRouter();
  return (
    <div className='relative col-span-2 flex flex-row items-start gap-2 before:absolute before:bottom-0 before:left-9 before:top-[4rem] before:h-[calc(100%-70px)] before:w-[1px] before:bg-zinc-200 md:col-span-1 dark:before:bg-zinc-800'>
      <div className='group relative grid min-h-[80px] min-w-[80px] place-items-center items-start overflow-clip'>
        <Image
          src={experience.logo ?? ISBLogo}
          alt='Work item'
          width={60}
          onClick={() => {
            router.push(experience.href);
          }}
          height={60}
          className='h-[60px] w-[60px] cursor-pointer rounded-md border border-zinc-500 bg-slate-100 object-scale-down p-2 shadow-md dark:bg-white'
        />
      </div>
      <div className='flex flex-col'>
        {/* Title */}
        <span className='text-xl font-semibold'>{experience.title}</span>
        <span className='text-base'>{experience.role}</span>
        {/* Date */}
        <span className='mt-1 text-sm tracking-widest text-muted-foreground/50'>
          {experience.time}
        </span>
        {/* Detail */}
        <p className='my-4 mt-4 text-sm tracking-tight text-muted-foreground'>
          {experience.desc}
        </p>
      </div>
    </div>
  );
}
