type NavItem = {
  label: string;
};

const NavBar = () => {
  const navItems: NavItem[] = [
    { label: "Store" },
    { label: "Mac" },
    { label: "iPhone" },
    { label: "Watch" },
    { label: "Vision" },
    { label: "AirPods" },
  ];

  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="apple logo" />
        <ul>
          {navItems.map((l) => (
            <li key={l.label}>
              <a className="text-whites" href={l.label}>
               {l.label}

              </a>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
         <button>
            <img src="/search.svg" alt="search"/>
         </button>
         <button>
            <img src="/cart.svg" alt="cart"/>
         </button>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
