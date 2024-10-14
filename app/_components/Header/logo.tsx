'use client';

import { PAGE_URL } from '@/routes';
import { useRouter } from 'next/navigation';

export default function Logo() {
  const router = useRouter();

  return (
    <div
      className='flex cursor-pointer items-center font-mono leading-loose md:text-2xl'
      onClick={() => {
        router.push(PAGE_URL.HOME_PAGE);
      }}
    >
      Khanh.
    </div>
  );
}
