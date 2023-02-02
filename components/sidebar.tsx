'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = {
  '/': {
    name: 'home',
    x: 0,
    y: 0,
    w: '64px',
  },
  '/about': {
    name: 'about',
    x: 64,
    y: 35,
    w: '65px',
  },
  '/books': {
    name: 'books',
    x: 127,
    y: 69,
    w: '56px',
  },
  '/arts': {
    name: 'arts',
    x: 182,
    y: 104,
    w: '56px',
  },
  '/blogs': {
    name: 'blogs',
    x: 245,
    y: 139,
    w: '56px',
  },
  // '/guestbook': {
  //   name: 'guestbook',
  //   x: 182,
  //   y: 104,
  //   w: '100px',
  // },
};

function Logo() {
  return (
    <Link aria-label="Manasa" href="/">
      <motion.svg
        className="text-black dark:text-white"
        width="87"
        height="48"
        viewBox="0 0 87 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{
            opacity: 0,
            pathLength: 0,
          }}
          animate={{
            opacity: 1,
            pathLength: 1,
          }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d="M36 0H57.865C58.7128 0 59.176 0.988857 58.6332 1.64018L45.5335 17.3598C45.2244 17.7307 45.2244 18.2693 45.5335 18.6402L58.6332 34.3598C59.176 35.0111 58.7128 36 57.865 36H36V0Z"
          clipRule="evenodd"
          fill="#56CCF2"
        />
        <motion.path
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 50,
          }}
          d="M0 2.41422C0 1.52331 1.07714 1.07714 1.70711 1.70711L17.2929 17.2929C17.6834 17.6834 18.3166 17.6834 18.7071 17.2929L36 0V36H1C0.447716 36 0 35.5523 0 35V2.41422Z"
          clipRule="evenodd"
          fill="#18A0FB"
        />
      </motion.svg>
    </Link>
  );
}

export default function Navbar() {
  let pathname = usePathname();
  if (pathname.includes('/blog/')) {
    pathname = '/blog';
  }

  return (
    <aside className="md:w-[150px] md:flex-shrink-0 -mx-4 md:mx-0 md:px-0 font-serif">
      <div className="lg:sticky lg:top-20">
        <div className="ml-2 md:ml-[12px] mb-2 px-4 md:px-0 md:mb-8 space-y-10 flex flex-col md:flex-row items-start ">
          <Logo />
        </div>
        <nav
          className="flex flex-row md:flex-col items-start relative overflow-scroll px-4 md:px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row md:flex-col space-x-0 pr-10 mb-2 mt-2 md:mt-0">
            {navItems[pathname] ? (
              <>
                {/* Desktop version, hidden on mobile, animates y axis */}
                <div className="hidden md:block">
                  <motion.div
                    className="absolute bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]"
                    layoutId="test2"
                    initial={{ opacity: 0, y: navItems[pathname].y }}
                    animate={{
                      opacity: 1,
                      y: navItems[pathname].y,
                      width: navItems[pathname].w,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                </div>
                {/* Mobile version, hidden on desktop, animates x axis */}
                <div className="block md:hidden">
                  <motion.div
                    className="absolute bg-neutral-100 dark:bg-neutral-800 h-[34px] rounded-md z-[-1]"
                    layoutId="test"
                    initial={{ opacity: 0, x: navItems[pathname].x }}
                    animate={{
                      opacity: 1,
                      x: navItems[pathname].x,
                      width: navItems[pathname].w,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                </div>
              </>
            ) : null}

            {Object.entries(navItems).map(([path, { name }]) => {
              const isActive = path === pathname;

              return (
                <Link
                  key={path}
                  href={path}
                  className={clsx(
                    'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 py-[5px] px-[10px]',
                    {
                      'text-neutral-500': !isActive,
                      'font-bold': isActive,
                    }
                  )}
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
