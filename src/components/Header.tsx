function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="h-18 w-full bg-white relative z-10 max-md:px-6 max-2xl:px-10  origin-center border-b border-[#00000010]">
      <div className="flex items-center justify-between h-full max-w-7xl mx-auto">
        <span className="text-2xl font-bold">aryan mehta</span>
        {/* <nav className="flex gap-10 max-md:hidden">
          <a href="#home" className="text-title-medium" onClick={navClose}>
            Home
          </a>
          <a href="#about" className="text-title-medium" onClick={navClose}>
            About
          </a>
          <a href="#projects" className="text-title-medium" onClick={navClose}>
            Projects
          </a>
          <a href="#" className="text-title-medium">
            Blog
          </a>
        </nav> */}
        {children}
      </div>
    </header>
  );
}

export default Header;
