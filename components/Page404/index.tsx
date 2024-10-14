'use client';

import { Button } from '@/components';
import { PAGE_URL } from '@/routes';
import { useRouter } from 'next/navigation';

export default function Page404() {
  const router = useRouter();
  return (
    <div className='h-svh bg-header -mt-10'>
      <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
        <h1 className='bg-gradient-to-b from-black dark:from-muted-foreground to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent'>
          404
        </h1>
        <span className='text-[1.2em] font-medium'>
          Oops! Trang không tồn tại hoặc bạn gõ sai địa chỉ!
        </span>
        <p className='text-center text-muted-foreground'>
          Xin lỗi, trang bạn đang tìm kiếm <br /> không tồn tại hoặc đã được đã
          di chuyển.
        </p>
        <div className='mt-6 flex gap-4'>
          <Button
            onClick={() => {
              router.back();
            }}
          >
            Trở lại
          </Button>
          <Button
            onClick={() => {
              router.push(PAGE_URL.HOME_PAGE);
            }}
          >
            Trang chủ
          </Button>
        </div>
      </div>
    </div>
  );
}
