import React, { useState } from 'react';

// ACTUALIZACIÓN DE DATOS:
const experiences = [
  {
    id: 1,
    category: 'licors',
    title: 'Tallers de Licors Artesanals',
    price: '50€',
    duration: '3h',
    image: '/taller-licors.jpg', // imatge 
    desc: 'Tallers vivencials sobre elaboració artesana de licors i coneixement de plantes.'
  },
  {
    id: 2,
    category: 'licors',
    title: 'Tallers de Plantes',
    price: '50€',
    duration: '2.5h',
    image: '/taller-plantes.jpg', // imatge
    desc: 'Pedagogia del territori a través de les plantes aromàtiques i medicinals.'
  },
  {
    id: 3,
    category: 'rutes',
    title: 'Rutes de Senderisme',
    price: '25€',
    duration: '4h',
    image: '/ruta-senderisme.jpg', // imatge
    desc: 'Itineraris per conèixer la flora, fauna i usos tradicionals del Parc Natural.'
  },
  {
    id: 4,
    category: 'rutes',
    title: 'Rutes Privades a Mida',
    price: 'A consultar',
    duration: 'Personalitzat',
    image: '/ruta-a-mida.jpg', // imatge
    desc: 'Propostes singulars per a grups tancats o empreses, adaptades al client.'
  }
];

export default function Experiences() {
  const [activeCategory, setActiveCategory] = useState('licors');

  return (
    <section id="experiencies" className="bg-crema-organico py-10 overflow-hidden">
      
      {/* --- PARTE SUPERIOR: SELECTOR SPLIT SCREEN (Se mantiene igual, duración 700ms) --- */}
      <div className="flex flex-col md:flex-row h-[65vh] w-full">
        {/* Lado Licores */}
        <div 
          onClick={() => setActiveCategory('licors')}
          className={`relative flex-1 overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${activeCategory === 'licors' ? 'md:grow-[1.5]' : 'md:grow-[0.5]'}`}
        >
          <div className={`absolute inset-0 z-10 transition-colors duration-700 ${activeCategory === 'licors' ? 'bg-madera-calida/30' : 'bg-verde-picea/60'}`}></div>
          <img src="/categoria-licors.jpg" alt="Tallers de Licors" className="absolute inset-0 w-full h-full object-cover"/>
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-crema-organico text-center p-4">
            <h3 className="font-the-seasons text-4xl md:text-5xl mb-2 drop-shadow-lg">Licors i Tallers</h3>
          </div>
        </div>

        {/* Lado Rutas */}
        <div 
          onClick={() => setActiveCategory('rutes')}
          className={`relative flex-1 overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${activeCategory === 'rutes' ? 'md:grow-[1.5]' : 'md:grow-[0.5]'}`}
        >
           <div className={`absolute inset-0 z-10 transition-colors duration-700 ${activeCategory === 'rutes' ? 'bg-verde-picea/30' : 'bg-verde-picea/60'}`}></div>
          <img src="/categoria-rutes.jpg" alt="Rutes Guiades" className="absolute inset-0 w-full h-full object-cover"/>
          <div className="relative z-20 h-full flex flex-col items-center justify-center text-crema-organico text-center p-4">
            <h3 className="font-the-seasons text-4xl md:text-5xl mb-2 drop-shadow-lg">Rutes Guiades</h3>
          </div>
        </div>
      </div>

      {/* --- PARTE INFERIOR: GRID VISUAL COORDINADO --- */}
      <div className="max-w-7xl mx-auto px-6 py-24 bg-crema-organico relative z-10">
        
        {/* TRUCO TÉCNICO PARA ANIMACIÓN COORDINADA:
           Usamos key={activeCategory}. Esto fuerza a React a "reiniciar" este contenedor 
           cada vez que cambia la categoría, disparando la animación 'animate-fade-in-up' 
           que dura 700ms, sincronizándose con el selector de arriba.
        */}
        <div key={activeCategory} className="grid md:grid-cols-2 gap-12 animate-fade-in-up">
          
          {experiences
            .filter(item => item.category === activeCategory)
            .map(item => (
              // NUEVO DISEÑO DE TARJETA VISUAL
              <div key={item.id} className="group relative bg-white rounded-sm overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                
                {/* Contenedor de Imagen (Ratio 4:3) */}
                <div className="aspect-[4/3] overflow-hidden relative">
                   <img 
                     src={item.image} 
                     alt={item.title}
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                   />
                   <div className="absolute inset-0 bg-verde-picea/10 group-hover:bg-transparent transition-colors"></div>
                   {/* Precio flotante sobre la imagen */}
                   <div className="absolute top-6 right-6 bg-crema-organico text-verde-picea font-aktifob font-bold px-4 py-2 text-sm tracking-widest rounded-full shadow-lg">
                      {item.price}
                   </div>
                </div>

                {/* Contenido de la Tarjeta */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="font-the-seasons text-2xl text-verde-picea leading-tight pr-4">{item.title}</h4>
                  </div>
                  
                  <p className="font-aktifob text-verde-picea/70 mb-8 leading-relaxed text-sm">
                    {item.desc}
                  </p>

                  <div className="pt-6 border-t border-verde-picea/10 flex justify-between items-center font-aktifob text-[10px] tracking-[0.2em] uppercase text-verde-picea/60">
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        <span>{item.duration}</span>
                    </div>
                    
                    <button className="text-verde-picea group-hover:text-madera-calida transition-colors font-bold flex items-center gap-2">
                      Veure detalls
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3 group-hover:translate-x-1 transition-transform">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
