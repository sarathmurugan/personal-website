import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    // { path: '/values', label: 'Values' },
    // { path: '/projects', label: 'Projects' },
    // { path: '/resources', label: 'Resources' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="border-b bg-[#FFFFF0] sticky top-0 backdrop-blur-sm z-50">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          
          {/* UPDATED: Logo is now FIRST (Left) and BIGGER */}
          <Link to="/" className="flex items-center gap-4 hover:opacity-80 transition-opacity group">
            
            {/* 1. The Logo (Now on the far left) */}
            <img 
              src="/logo.png" 
              alt="Logo" 
              // Changed from h-8 to h-14 (roughly 56px). 
              // You can try h-16 or h-20 if you want it even bigger.
              className="h-14 w-14 object-contain" 
            />

            {/* 2. Your Name (Now appears after the logo) */}
            <span className="text-xl font-medium text-black group-hover:text-[#CC5500] transition-colors">
              Sarath Murugan
            </span>
          </Link>

          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`text-base transition-colors hover:text-[#CC5500] ${
                    isActive(item.path) ? 'text-[#CC5500]' : 'text-black'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;