import { Button } from '@/components';
import MainNav from './main-nav';
import { useRouter } from 'next/navigation';
import Logo from './logo';

export default function Header() {
  return (
    <div className='bg-background/90 z-40 border-b border-slate-200 dark:border-muted-foreground/20 py-5 backdrop-blur-sm'>
      <header className='container sticky top-0 flex flex-row gap-4'>
        <Logo />
        <MainNav />
      </header>
    </div>
  );
}
