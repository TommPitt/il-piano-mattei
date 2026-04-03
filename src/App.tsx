import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import { ShoppingCart, BookOpen, ChevronRight, Info, History, Cpu, User, Globe, Shield, Brain, Zap } from 'lucide-react';

// --- COMPONENTI SVG PERSONALIZZATI ---
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.51"/></svg>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#0A0A0A] font-['Lato'] selection:bg-[#C4A747] selection:text-white">
      
      {/* --- 1. HERO SECTION --- */}
      <header className="relative min-h-screen flex flex-col lg:flex-row items-center overflow-hidden border-b border-[#C4A747]/20 bg-gray-50">
        <div className="w-full lg:w-1/2 h-[60vh] lg:h-screen relative flex items-center justify-center p-6 lg:p-12 bg-white animate-in fade-in duration-1000">
          <img 
            src="/copertina-il-piano-mattei-ucronia-thomas-pitt.jpg" 
            alt="Copertina del romanzo Il Piano Mattei" 
            className="w-auto h-full max-h-[85vh] shadow-[30px_30px_80px_rgba(0,0,0,0.3)] z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 border-[20px] border-gray-50 pointer-events-none z-20" />
        </div>

        <div className="w-full lg:w-1/2 p-8 lg:p-20 flex flex-col justify-center z-10 animate-in slide-in-from-right duration-1000 delay-300">
          <span className="font-['IBM_Plex_Mono'] text-[#C4A747] tracking-[0.3em] text-xs mb-6 uppercase font-bold">
            Ucronica #35 • Delos Digital
          </span>
          <h1 className="font-['Playfair_Display'] text-5xl lg:text-8xl font-bold leading-[1.1] mb-8 text-[#0A0A0A]">
            Il Piano <br/> <span className="text-[#2C3E50]">Mattei</span>
          </h1>
          <p className="text-xl leading-relaxed mb-10 max-w-xl text-gray-700 border-l-4 border-[#C4A747] pl-6 italic text-left">
            27 ottobre 1962. Una decisione cambia tutto. In questa realtà alternativa, l'Italia diventa una superpotenza planetaria. Due realtà si scontrano: quella di un agente segreto in Sardegna e quella di un uomo tormentato da ricordi impossibili.
          </p>
          <div className="flex wrap gap-4">
            <a href="#acquista" className="px-10 py-5 bg-[#0A0A0A] text-white font-bold hover:bg-[#C4A747] hover:scale-105 transition-all duration-300 flex items-center gap-3 uppercase tracking-widest text-sm shadow-xl">
              <ShoppingCart size={18} /> Inizia a leggere ora
            </a>
          </div>
        </div>
      </header>

      {/* --- 2. CHI ERA ENRICO MATTEI --- */}
      <section className="py-24 px-8 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center text-left">
          <div className="order-2 lg:order-1 transition-all duration-700">
            <h2 className="font-['Playfair_Display'] text-5xl font-bold mb-8 leading-tight">Chi era <br/><span className="text-[#C4A747]">Enrico Mattei?</span></h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700 mb-10">
              <p>Enrico Mattei (1906-1962) fu il fondatore e presidente dell'ENI, l'Ente Nazionale Idrocarburi. Non fu semplicemente un imprenditore: fu l'architetto della sovranità energetica italiana nel dopoguerra.</p>
              <p>In un'Italia devastata dalla guerra, Mattei trasformò l'ENI in una potenza globale, sfidando i monopoli petroliferi internazionali. Gli italiani lo chiamavano "lo stato nello stato" – tanto era il suo potere e la sua influenza.</p>
              <p>La sua visione era radicale: usare l'energia come leva di indipendenza nazionale, negoziare da pari con i governi dei paesi esportatori di petrolio, costruire un'Italia moderna e autonoma.</p>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative group max-w-md">
              <img src="/enrico-mattei-portrait.jpg" alt="Ritratto Enrico Mattei" className="w-full h-auto shadow-2xl rounded-sm grayscale group-hover:grayscale-0 transition-all duration-1000 ease-in-out" />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-[#C4A747] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. UCRONIA / IL BIVIO TECNOLOGICO --- */}
      <section id="ucronia" className="py-32 px-8 lg:px-20 bg-gray-50 grid lg:grid-cols-2 gap-24 items-center">
        <div className="relative overflow-hidden group">
          <img src="/eni-cutting-edge.jpg" alt="Mattei e l'aereo ENI" className="w-full h-auto shadow-2xl grayscale contrast-125 group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute top-0 left-0 w-full h-full border border-white/20 pointer-events-none" />
        </div>
        <div className="text-left">
          <h2 className="font-['Playfair_Display'] text-5xl font-bold mb-12 text-[#2C3E50]">Il Bivio <span className="text-[#C4A747]">Tecnologico</span></h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            L'ucronia esplora strade non battute. In questa timeline, l'Italia è un paese evoluto dove vengono utilizzati dispositivi tecnologici evoluti come il <strong>ReTel</strong>, porta di accesso alla prima rete telematica globale che raggiunge ogni abitazione. Dai <strong>Missili balistici Alfa</strong> al progresso della cibernetica, la divergenza storica trasforma la nazione in una superpotenza industriale.
          </p>
          <ul className="space-y-4 font-['IBM_Plex_Mono'] text-sm text-[#C4A747]">
            <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300"><ChevronRight size={16}/> Basata su fatti storici rigorosi</li>
            <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300"><ChevronRight size={16}/> Esplorazione del "what if" energetico</li>
            <li className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300"><ChevronRight size={16}/> Riflessione contemporanea su IA e memoria</li>
          </ul>
        </div>
      </section>

      {/* --- 4. DUE REALTÀ SI SCONTRANO --- */}
      <section className="py-32 px-8 lg:px-20 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-['Playfair_Display'] text-6xl font-bold mb-10 uppercase tracking-tighter">Due Realtà si <span className="text-[#C4A747]">Scontrano</span></h2>
          <p className="text-xl text-gray-500 mb-20 max-w-3xl mx-auto italic">
            La trama di "Il Piano Mattei" esplora due timeline parallele che si intrecciano, rivelando la vera natura della memoria e dell'identità.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12 text-left">
            <div className="p-12 border border-gray-100 bg-gray-50 group hover:border-[#C4A747] hover:shadow-xl transition-all duration-500">
              <Shield className="text-[#C4A747] mb-8 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-3xl font-bold mb-6 italic text-[#2C3E50]">Realtà Alternativa</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Mentre Enrico Mattei volta le spalle all'aereo che lo avrebbe ucciso, cambiando il corso della storia, una superpotenza planetaria emerge dalle ceneri del dopoguerra.
              </p>
              <p className="text-gray-600 leading-relaxed italic border-l-2 border-[#C4A747] pl-4">
                A cavallo tra gli anni '70 e gli anni '80 del secolo scorso, l'Agente Giovanni Sanna, in Sardegna, è incaricato di sventare un complotto militare. Uno spy thriller dove ogni mossa ha conseguenze globali.
              </p>
            </div>

            <div className="p-12 border border-gray-100 bg-[#2C3E50] text-white group hover:shadow-2xl transition-all duration-500">
              <Brain className="text-[#C4A747] mb-8 group-hover:scale-110 transition-transform" size={40} />
              <h3 className="text-3xl font-bold mb-6 italic">Oggi: Un Uomo e la Sua Memoria</h3>
              <p className="opacity-80 leading-relaxed mb-6">
                Nel nostro presente, un uomo cura la sua memoria a pezzi con l'aiuto dell'intelligenza artificiale. È tormentato da ricordi che non sembrano suoi: un padre assente, tecnologie impossibili, frammenti di una vita che non ha mai vissuto.
              </p>
              <p className="opacity-80 leading-relaxed">
                Un dramma psicologico profondo dove la linea tra realtà e illusione si sfuma. Chi è il vero protagonista di questa storia?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. STRILLO SECTION --- */}
      <section className="py-32 bg-[#0A0A0A] text-white px-8 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center animate-in zoom-in duration-1000">
          <p className="text-xl lg:text-2xl font-light mb-8 opacity-60">
            Quando i frammenti della sua vita e la missione dell'agente si sovrappongono, la domanda diventa una sola:
          </p>
          <h2 className="text-4xl lg:text-7xl font-['Playfair_Display'] font-bold text-[#C4A747] leading-tight">
            Chi è il vero protagonista di questa storia?
          </h2>
        </div>
      </section>

      {/* --- 6. AUTHOR SECTION --- */}
      <section className="py-32 px-8 lg:px-20 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24">
          <div className="lg:w-2/3 text-left">
            <h2 className="font-['Playfair_Display'] text-5xl font-bold mb-10">L'Autore: <span className="text-[#C4A747]">Thomas M. Pitt</span></h2>
            <div className="space-y-6 text-xl text-gray-700 leading-relaxed">
              <p className="font-bold font-['IBM_Plex_Mono'] text-sm uppercase tracking-widest text-[#2C3E50]">Informatico • Scrittore • Narratore di Genere</p>
              <p>
                Thomas M. Pitt è lo pseudonimo di un informatico sardo di origine gallurese che coltiva da sempre una profonda passione per la scrittura e la narrativa di genere.
              </p>
              <p>
                Da sempre affascinato dal potere del "what if" come strumento per analizzare il presente, esplora i confini della realtà attraverso storie che fondono fantascienza, mistero psicologico e ucronia.
              </p>
              <p>
                Autore di racconti brevi e attivo nell'ambiente fantascientifico sui social media, è stato blogger in diversi settori, tra cui tecnologia, informatica e sport. La sua formazione tecnica si riflette nella precisione narrativa e nella costruzione di mondi coerenti.
              </p>
            </div>
            <div className="flex wrap gap-3 mt-12">
              {['Fantascienza', 'Ucronia', 'What If History', 'Psicologia Narrativa', 'Tecnologia'].map(tag => (
                <span key={tag} className="px-4 py-2 bg-gray-50 border border-gray-100 text-[10px] font-bold font-['IBM_Plex_Mono'] uppercase tracking-widest text-gray-400 hover:bg-[#C4A747] hover:text-white transition-colors duration-300 cursor-default">{tag}</span>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/3 text-left">
            <div className="bg-[#2C3E50] p-10 text-white shadow-2xl relative sticky top-10 hover:-translate-y-2 transition-transform duration-500">
              <Zap className="absolute -bottom-10 -right-10 text-white/5" size={200} />
              <h3 className="font-['Playfair_Display'] text-3xl font-bold mb-10 border-b border-white/20 pb-4 italic tracking-tight">Il Piano Mattei</h3>
              <ul className="space-y-6 font-['IBM_Plex_Mono'] text-[10px] uppercase tracking-widest">
                <li className="flex justify-between border-b border-white/10 pb-2"><span className="opacity-50">Formato</span> <span>Romanzo Breve</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span className="opacity-50">Pagine</span> <span>46</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span className="opacity-50">Genere</span> <span>Fantascienza • Ucronia</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span className="opacity-50">Collana</span> <span>Ucronica #35</span></li>
                <li className="flex justify-between border-b border-white/10 pb-2"><span className="opacity-50">Editore</span> <span>Delos Digital</span></li>
                <li className="flex justify-between"><span className="opacity-50">Pubblicazione</span> <span>7 Ottobre 2025</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- 7. CTA SECTION --- */}
      <section id="acquista" className="py-32 px-8 lg:px-20 bg-gray-50 text-center">
        <h2 className="font-['Playfair_Display'] text-6xl font-bold mb-10 italic">Inizia a Leggere Ora</h2>
        <p className="text-xl text-gray-600 mb-20 max-w-2xl mx-auto">
          "Il Piano Mattei" è disponibile su tutte le principali piattaforme di ebook. Scegli il tuo lettore preferito e immergiti in una storia di ucronia, spionaggio e memoria.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { store: 'Delos Store', price: '€2,99', url: 'https://www.delosstore.it/ebook/55947/il-piano-mattei/' },
            { store: 'Amazon Kindle', price: '€2,99', url: 'https://amzn.to/4saXV4g' },
            { store: 'Kobo Store', price: '€2,99', url: 'https://www.kobo.com/it/it/ebook/il-piano-mattei?sId=1ff7333c-09eb-4182-b557-c59566665ddf&ssId=RJ0K-a_6VqfzXpDMq4i8b' },
            { store: 'Google Play', price: '€2,99', url: 'https://play.google.com/store/books/details/Thomas_M_Pitt_Il_piano_Mattei?id=c5eMEQAAQBAJ&hl=it' }
          ].map((item) => (
            <a key={item.store} href={item.url} target="_blank" rel="noopener noreferrer" className="bg-white p-10 border border-gray-100 hover:border-[#C4A747] transition-all hover:shadow-2xl hover:-translate-y-2 flex flex-col items-center group duration-300">
              <BookOpen className="text-gray-200 mb-8 group-hover:text-[#C4A747] transition-colors" size={40} />
              <h4 className="font-bold text-2xl mb-2">{item.store}</h4>
              <p className="text-[#C4A747] text-3xl font-bold mb-4">{item.price}</p>
              <div className="flex justify-center items-center text-sm font-bold gap-2 group-hover:text-[#C4A747] mt-auto uppercase">Vai allo store <ChevronRight size={14} /></div>
            </a>
          ))}
        </div>
      </section>

      {/* --- 8. FOOTER --- */}
      <footer className="bg-[#0A0A0A] text-white py-24 px-8 lg:px-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <h3 className="text-[#C4A747] font-['IBM_Plex_Mono'] text-2xl mb-12 font-bold uppercase tracking-[0.3em]">Thomas M. Pitt</h3>
          <div className="flex wrap justify-center gap-12 mb-16">
            <a href="https://www.facebook.com/thomasmpitt" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
              <div className="p-4 rounded-full border border-white/10 group-hover:border-[#C4A747] group-hover:text-[#C4A747] transition-all duration-300"><FacebookIcon /></div>
              <span className="text-[10px] uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">Facebook</span>
            </a>
            <a href="https://www.linkedin.com/in/tommaso-pitturru-94693365/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
              <div className="p-4 rounded-full border border-white/10 group-hover:border-[#C4A747] group-hover:text-[#C4A747] transition-all duration-300"><LinkedinIcon /></div>
              <span className="text-[10px] uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">LinkedIn</span>
            </a>
            <a href="https://www.instagram.com/thomasmpitt/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 group">
              <div className="p-4 rounded-full border border-white/10 group-hover:border-[#C4A747] group-hover:text-[#C4A747] transition-all duration-300"><InstagramIcon /></div>
              <span className="text-[10px] uppercase tracking-widest opacity-50 group-hover:opacity-100 transition-opacity">Instagram</span>
            </a>
          </div>
          <div className="w-full pt-10 border-t border-white/10 text-[9px] text-gray-600 uppercase tracking-widest font-bold">
            <p>© 2026 Thomas M. Pitt • ISBN: 9788825434101 • Pubblicato da Delos Digital</p>
          </div>
        </div>
      </footer>
	  <Analytics />
    </div>
  );
};

export default App;