// src/components/HomeDashboard.jsx
import React from 'react';
import { TrendingUp, AlertCircle, Calendar, ArrowUpRight } from 'lucide-react';

const HomeDashboard = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* En-tête : Identification immédiate */}
      <header className="py-4">
        <h1 className="text-2xl font-bold text-[oklch(0.18_0.025_50)]">Bonjour, Marie</h1>
        <p className="text-[oklch(0.52_0.03_60)] font-medium">Heureux de vous revoir !</p>
      </header>

      {/* CARTE PRESTIGE : Fusion Argent & Score (3 secondes pour comprendre) */}
      <div className="bg-[oklch(0.20_0.04_45)] text-white p-6 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
        {/* Décoration en arrière-plan */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
        
        <div className="flex justify-between items-start relative z-10">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-white/60 font-bold mb-1">Ma Fiabilité</p>
            <div className="flex items-center gap-2">
              <span className="text-3xl font-black text-[oklch(0.55_0.16_145)]">97%</span>
              <TrendingUp size={18} className="text-[oklch(0.55_0.16_145)]" />
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-2 rounded-2xl border border-white/10">
            <Calendar size={20} className="text-orange-400" />
          </div>
        </div>

        <div className="mt-10 relative z-10">
          <p className="text-sm text-white/70 font-medium">À verser ce mois-ci :</p>
          <div className="flex items-baseline gap-2">
            <h2 className="text-4xl font-black tracking-tighter">25.000</h2>
            <span className="text-lg font-bold text-orange-400">FCFA</span>
          </div>
        </div>

        {/* Action Principale Unique */}
        <button className="w-full mt-6 bg-[oklch(0.62_0.19_45)] hover:bg-orange-500 text-white py-4 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg">
          Verser ma part <ArrowUpRight size={18} />
        </button>
      </div>

      {/* ZONE ALERTE : Information cruciale hors paiement */}
      <div className="bg-white border-2 border-[oklch(0.62_0.19_45)]/20 p-5 rounded-[2rem] flex items-start gap-4 shadow-sm">
        <div className="bg-orange-100 p-2 rounded-xl">
          <AlertCircle className="text-[oklch(0.62_0.19_45)]" size={24} />
        </div>
        <div>
          <h3 className="font-bold text-[oklch(0.18_0.025_50)]">Prochain Pot</h3>
          <p className="text-sm text-[oklch(0.52_0.03_60)] leading-tight mt-1">
            C'est le tour de **Fatou Bamba**. <br/>Date limite : <span className="font-bold text-orange-600">15 Mai</span>.
          </p>
        </div>
      </div>

      {/* STATUTS RAPIDES : Rappel du contexte */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
          <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Caisse Groupe</p>
          <p className="text-lg font-black text-[oklch(0.18_0.025_50)]">200.000 <span className="text-[10px]">F</span></p>
        </div>
        <div className="bg-white p-4 rounded-3xl border border-gray-100 shadow-sm">
          <p className="text-[10px] uppercase font-bold text-gray-400 mb-1">Ma Position</p>
          <p className="text-lg font-black text-[oklch(0.18_0.025_50)]">Tour 5 / 8</p>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;
