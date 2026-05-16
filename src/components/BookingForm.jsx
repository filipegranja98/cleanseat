import React, { useState } from 'react';

function BookingForm() {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    dataHorario: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = "558193113251";
    const message = `Olá CleanSeat! Gostaria de agendar uma higienização.\n\n*Meus Dados:*\nNome: ${formData.nome}\nEndereço: ${formData.endereco}\nHorário de Preferência: ${formData.dataHorario}`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="agendamento" className="py-20 bg-slate-50">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-4xl font-display font-bold text-primary mb-5">Pronto para renovar seus estofados?</h2>
            <p className="text-lg text-slate-600 mb-8">Preencha o formulário e nós entraremos em contato via WhatsApp para confirmar o agendamento e passar o orçamento sem compromisso.</p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 font-medium text-slate-800">✅ Produtos antialérgicos</li>
              <li className="flex items-center gap-3 font-medium text-slate-800">✅ Secagem rápida</li>
              <li className="flex items-center gap-3 font-medium text-slate-800">✅ Atendimento a domicílio</li>
              <li className="flex items-center gap-3 font-medium text-slate-800">✅ Profissionais qualificados</li>
            </ul>
          </div>
          
          <div className="flex-1 w-full bg-white p-8 md:p-10 rounded-2xl shadow-xl fade-in">
            <form onSubmit={handleSubmit}>
              <h3 className="text-2xl font-bold text-primary text-center mb-8">Agende sua Limpeza</h3>
              
              <div className="mb-5">
                <label htmlFor="nome" className="block mb-2 font-medium text-slate-800">Nome Completo</label>
                <input 
                  type="text" 
                  id="nome" 
                  name="nome" 
                  value={formData.nome} 
                  onChange={handleChange} 
                  required 
                  placeholder="Ex: Maria Silva"
                  className="w-full p-3 border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:border-secondary focus:bg-white focus:ring-4 focus:ring-secondary/10 transition-all"
                />
              </div>
              
              <div className="mb-5">
                <label htmlFor="endereco" className="block mb-2 font-medium text-slate-800">Endereço Completo</label>
                <textarea 
                  id="endereco" 
                  name="endereco" 
                  value={formData.endereco} 
                  onChange={handleChange} 
                  required 
                  placeholder="Rua, Número, Bairro, Cidade"
                  rows="3"
                  className="w-full p-3 border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:border-secondary focus:bg-white focus:ring-4 focus:ring-secondary/10 transition-all"
                ></textarea>
              </div>
              
              <div className="mb-6">
                <label htmlFor="dataHorario" className="block mb-2 font-medium text-slate-800">Data e Horário de Preferência</label>
                <input 
                  type="text" 
                  id="dataHorario" 
                  name="dataHorario" 
                  value={formData.dataHorario} 
                  onChange={handleChange} 
                  required 
                  placeholder="Ex: 25/10 pela manhã"
                  className="w-full p-3 border border-slate-200 rounded-lg bg-slate-50 focus:outline-none focus:border-secondary focus:bg-white focus:ring-4 focus:ring-secondary/10 transition-all"
                />
              </div>
              
              <button type="submit" className="w-full flex items-center justify-center px-6 py-4 rounded-xl font-semibold transition-all bg-[#25D366] text-white shadow-md hover:bg-[#128C7E] hover:-translate-y-0.5 text-lg">
                <span className="mr-2 text-2xl">📱</span> Enviar para WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookingForm;
