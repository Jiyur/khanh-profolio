'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  ThemeToggle,
} from '@/components';
import { navbarLinks } from '@/config/navBarLinks';
import { cn } from '@/utils';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

const MainNav = () => {
  const segment = useSelectedLayoutSegment();

  return (
    <div className='flex flex-1 items-center justify-end gap-6 md:gap-10 lg:justify-between'>
      <NavigationMenu>
        <NavigationMenuList>
          {navbarLinks.map((link) => (
            <NavigationMenuItem key={link.title.trim()}>
              <Link href={link.href as string} legacyBehavior passHref>
                <NavigationMenuLink
                  target={link.href?.startsWith('http') ? '_blank' : '_self'}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    link.disabled && 'cursor-not-allowed opacity-80',
                    link.href?.startsWith(`/${segment}`) &&
                      'bg-accent font-semibold',
                  )}
                >
                  {link.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default MainNav;
