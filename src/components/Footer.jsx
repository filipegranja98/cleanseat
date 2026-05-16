import React from 'react';

function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row justify-between gap-10 mb-10">
        <div className="max-w-[400px]">
          <h3 className="text-white text-3xl font-display font-bold mb-4">CleanSeat</h3>
          <p className="text-slate-300 leading-relaxed">Especialistas em higienização de estofados. Trazendo vida nova para os seus móveis com qualidade e segurança.</p>
        </div>
        <div>
          <h4 className="text-white text-xl font-bold mb-4">Contato</h4>
          <p className="text-slate-300 mb-2">WhatsApp: (81) 9311-3251</p>
          <p className="text-slate-300 mb-2">
            Instagram: <a href="https://www.instagram.com/clenseat/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@clenseat</a>
          </p>
          <p className="text-slate-300">Atendimento a domicílio</p>
        </div>
      </div>
      <div className="text-center py-5 border-t border-white/10 text-slate-400 text-sm">
        <p>&copy; {new Date().getFullYear()} CleanSeat. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
