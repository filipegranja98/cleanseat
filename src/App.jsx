import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <Header />
      <Hero />
      <Portfolio />
      <BookingForm />
      <Footer />
    </div>
  );
}

export default App;
