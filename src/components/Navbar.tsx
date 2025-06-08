import { useMemo, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

import cx from 'plugins/cx';

import sidemenus from 'constants/Sidemenu';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setShowMenu(show => !show);

  const menuClass = useMemo(
    () => (url?: string) => cx('text-center', location.pathname === url && 'bg-primary/40'),
    [location.pathname]
  );

  const mobileMenuClass = useMemo(
    () => cx('absolute top-[66px] left-0 w-full bg-secondary block z-10 md:hidden', showMenu ? 'show' : 'hidden'),
    [showMenu]
  );

  return (
    <>
      <nav className="mx-auto flex w-full max-w-7xl items-center px-4 py-6">
        <div className="w-3/12 max-w-sm flex-none">
          <Link to="/" className="flex items-center">
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
                <Link to={menu.url}>
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
                {showMenu ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className={mobileMenuClass}>
        {sidemenus.map(menu => (
          <Link to={menu.url} onClick={toggleMenu} key={menu.title}>
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
