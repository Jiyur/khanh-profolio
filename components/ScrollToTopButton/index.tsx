'use client';

import { useEffect, useState } from 'react';

import { Button } from '@/components';
import { cn } from '@/utils';
import { IconArrowUp } from '@tabler/icons-react';

const SCROLL_OFFSET: number = 150;

export const ScrollToTopButton = () => {
  const [show, setShow] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const handleWindowScroll = () => {
      if (window.scrollY > SCROLL_OFFSET) setShow(true);
      else setShow(false);
    };

    window.addEventListener('scroll', handleWindowScroll);
    return () => window.removeEventListener('scroll', handleWindowScroll);
  }, []);

  return (
    <Button
      variant='default'
      size='icon'
      aria-label='Scroll To Top'
      type='button'
      onClick={handleClick}
      className={cn(show ? 'flex' : 'hidden', 'fixed bottom-8 right-8 z-50')}
    >
      <IconArrowUp />
    </Button>
  );
};
