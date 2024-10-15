'use client';

import { Button } from '@/components';
import { PAGE_URL } from '@/routes';
import { useRouter } from 'next/navigation';

export default function Page404() {
  const router = useRouter();
  return (
    <div className='bg-header -mt-10 h-svh'>
      <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
        <h1 className='bg-gradient-to-b from-black to-transparent bg-clip-text text-[10rem] font-extrabold leading-none text-transparent dark:from-muted-foreground'>
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
