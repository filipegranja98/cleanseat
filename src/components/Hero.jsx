import React from 'react';

function Hero() {
  return (
    <section id="inicio" className="py-20 bg-gradient-to-br from-slate-50 to-[#E0F2FE] overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col md:flex-row items-center gap-12 fade-in">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-5 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Respire Aliviado com Estofados Novos de Novo!
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-xl mx-auto md:mx-0">
            Especialistas em higienização profunda. Removemos manchas, ácaros e maus odores do seu sofá, cadeiras e colchões com tecnologia profissional e secagem rápida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#agendamento" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all bg-[#25D366] text-white shadow-md shadow-[#25D366]/20 hover:bg-[#128C7E] hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#25D366]/30">
              <span className="mr-2 text-xl">📱</span> Agendar via WhatsApp
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white hover:-translate-y-0.5">
              Ver Resultados
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center relative">
          {/* Efeito Glow no fundo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/40 rounded-full blur-[80px] transform scale-75 animate-pulse"></div>
          
          {/* Card circular com a máquina */}
          <div className="relative w-full max-w-[450px] aspect-square rounded-full bg-gradient-to-b from-white to-[#F0F9FF] border-4 border-white shadow-[0_20px_50px_rgba(0,119,182,0.15)] flex items-center justify-center p-8 group">
            <img
              src="/src/assets/maquina.png"
              alt="Máquina Extratora de Higienização"
              className="w-full h-auto object-contain drop-shadow-[0_20px_20px_rgba(0,0,0,0.25)] group-hover:scale-105 transition-transform duration-700 ease-out z-10"
              onError={(e) => {
                e.target.src = "/src/assets/maquina.png";
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
