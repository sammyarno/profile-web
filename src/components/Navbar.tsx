'use client';

import { useState } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import cx from '@/plugins/cx';

import sidemenus from '@/constants/Sidemenu';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setShowMenu(show => !show);

  const menuClass = (url?: string) => cx('text-center', pathname === url && 'bg-primary/40');

  const mobileMenuClass = cx(
    'absolute top-[66px] left-0 w-full bg-secondary block z-10 md:hidden',
    showMenu ? 'show' : 'hidden'
  );

  return (
    <>
      <nav className="mx-auto flex w-full max-w-7xl items-center px-4 py-6">
        <div className="w-3/12 max-w-sm flex-none">
          <Link href="/" className="flex items-center">
            <h1 className="font-fira text-xl">
              &lt;
              <span className="text-primary">Samuel</span>
              /&gt;
            </h1>
          </Link>
        </div>
        <div className="w-9/12 flex-1">
          <div className="hidden justify-end gap-6 md:flex">
            {sidemenus.map(menu => (
              <div className={menuClass(menu.url)} key={menu.title}>
                <Link href={menu.url}>
                  <p className="font-fira hover:text-primary capitalize">
                    &lt;
                    {menu.title}
                    /&gt;
                  </p>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-end md:hidden">
            <div className="px-3">
              <div className="text-end" onClick={toggleMenu} role="presentation">
                {showMenu ? (
                  <svg viewBox="0 0 352 512" className="inline-block h-[1em] w-[0.78em] fill-current align-[-0.125em]">
                    <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 448 512" className="inline-block h-[1em] w-[1em] fill-current align-[-0.125em]">
                    <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
                  </svg>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={mobileMenuClass}>
        {sidemenus.map(menu => (
          <Link href={menu.url} onClick={toggleMenu} key={menu.title}>
            <div className="menu border-b py-3">
              <p className="text-center capitalize">
                <b>{menu.title}</b>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
