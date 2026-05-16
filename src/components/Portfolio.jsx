import React, { useState } from 'react';
import antesSofa1 from '../assets/portifolio/antessofa1.jpeg';
import depoisSofa1 from '../assets/portifolio/depoissofa1.jpeg';
import antesCadeira from '../assets/portifolio/antescadeira.jpeg';
import depoisCadeira from '../assets/portifolio/depoiscadeira.jpeg';
import antesSofa2 from '../assets/portifolio/antessofa2.jpeg';
import depoisSofa2 from '../assets/portifolio/depoissofa2.jpeg';

function Portfolio() {
  const [expandedImage, setExpandedImage] = useState(null);

  const portfolioItems = [
    { 
      id: 1, 
      antes: antesSofa1, 
      depois: depoisSofa1, 
      title: 'Sofá Retrátil', 
      desc: 'Limpeza e remoção de manchas' 
    },
    { 
      id: 2, 
      antes: antesCadeira, 
      depois: depoisCadeira, 
      title: 'Cadeiras de Jantar', 
      desc: 'Higienização profunda de tecido claro' 
    },
    { 
      id: 3, 
      antes: antesSofa2, 
      depois: depoisSofa2, 
      title: 'Sofá 2 Lugares', 
      desc: 'Remoção de ácaros e odores' 
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-primary font-display font-bold mb-4">Nosso Portfólio</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">Veja o resultado incrível do nosso trabalho de higienização comparando o Antes e Depois.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {portfolioItems.map(item => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl fade-in">
              <div className="flex flex-col sm:flex-row h-auto sm:h-64 relative">
                {/* Imagem Antes */}
                <div className="flex-1 relative group cursor-pointer" onClick={() => setExpandedImage(item.antes)}>
                  <div className="absolute top-3 left-3 bg-slate-900/70 text-white text-xs font-bold px-3 py-1 rounded-full z-10 pointer-events-none">
                    ANTES
                  </div>
                  <img 
                    src={item.antes} 
                    alt={`Antes - ${item.title}`} 
                    className="w-full h-48 sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                    <span className="text-white bg-black/50 px-3 py-1 rounded-lg text-sm font-semibold backdrop-blur-sm">🔍 Ampliar</span>
                  </div>
                </div>
                
                {/* Divisor Visual (apenas para telas sm+) */}
                <div className="hidden sm:flex absolute left-1/2 top-0 bottom-0 w-1 bg-white z-20 transform -translate-x-1/2 items-center justify-center pointer-events-none">
                  <div className="w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center border border-slate-200">
                    <span className="text-slate-400 text-xs font-bold">VS</span>
                  </div>
                </div>

                {/* Imagem Depois */}
                <div className="flex-1 relative group cursor-pointer" onClick={() => setExpandedImage(item.depois)}>
                  <div className="absolute top-3 right-3 bg-green-500/90 text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-sm pointer-events-none">
                    DEPOIS
                  </div>
                  <img 
                    src={item.depois} 
                    alt={`Depois - ${item.title}`} 
                    className="w-full h-48 sm:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                    <span className="text-white bg-black/50 px-3 py-1 rounded-lg text-sm font-semibold backdrop-blur-sm">🔍 Ampliar</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <h3 className="text-xl font-bold mb-2 text-slate-800">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal de Imagem Expandida */}
      {expandedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
            <button 
              className="absolute top-4 right-4 text-white hover:text-primary bg-black/50 rounded-full w-12 h-12 flex items-center justify-center text-2xl transition-colors z-50"
              onClick={(e) => {
                e.stopPropagation();
                setExpandedImage(null);
              }}
              title="Fechar"
            >
              ✕
            </button>
            <img 
              src={expandedImage} 
              alt="Imagem expandida" 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
