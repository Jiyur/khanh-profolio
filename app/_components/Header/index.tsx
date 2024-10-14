import MainNav from './main-nav';
import Logo from './logo';

export default function Header() {
  return (
    <div className='bg-background/90 sticky top-0 z-40 border-b border-slate-200 py-5 backdrop-blur-sm dark:border-muted-foreground/20'>
      <header className='container flex flex-row gap-4'>
        <Logo />
        <MainNav />
      </header>
    </div>
  );
}
