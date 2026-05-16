import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 py-4">
      <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center">
        <div className="flex-shrink-0 transition-transform hover:scale-105">
          <a href="https://www.instagram.com/clenseat/" target="_blank" rel="noopener noreferrer">
            <img src="/src/assets/logo.png" alt="CleanSeat Logo" className="h-20 md:h-28 w-auto object-contain cursor-pointer" onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/150x50/0077B6/FFFFFF?text=CleanSeat"; }} />
          </a>
        </div>
        <nav className="hidden md:block">
          <ul className="flex gap-8 items-center">
            <li><a href="#inicio" className="font-medium text-slate-800 hover:text-primary transition-colors">Início</a></li>
            <li><a href="#portfolio" className="font-medium text-slate-800 hover:text-primary transition-colors">Portfólio</a></li>
            <li><a href="#agendamento" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all bg-primary text-white shadow-md shadow-primary/20 hover:bg-secondary hover:-translate-y-0.5 hover:shadow-lg hover:shadow-secondary/30">Agendar Limpeza</a></li>
          </ul>
        </nav>
        {/* Mobile CTA only */}
        <div className="md:hidden">
          <a href="#agendamento" className="inline-flex items-center justify-center px-4 py-2 rounded-xl font-semibold transition-all bg-primary text-white shadow-md shadow-primary/20 hover:bg-secondary">Agendar</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
