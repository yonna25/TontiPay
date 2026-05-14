import React from 'react';
import { TrendingUp, AlertCircle, ArrowUpRight } from 'lucide-react';

const HomeDashboard = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <header className="py-4">
      <h1 className="text-2xl font-bold">Bonjour, Marie</h1>
      <p className="text-gray-500">TontiPay est à jour</p>
    </header>

    <div className="bg-[oklch(0.20_0.04_45)] text-white p-6 rounded-[2.5rem] shadow-xl">
      <div className="flex justify-between">
        <div>
          <p className="text-[10px] uppercase opacity-60">Ma Fiabilité</p>
          <div className="flex items-center gap-2">
            <span className="text-3xl font-black text-[oklch(0.55_0.16_145)]">97%</span>
            <TrendingUp size={18} className="text-[oklch(0.55_0.16_145)]" />
          </div>
        </div>
      </div>
      <div className="mt-8">
        <p className="text-sm opacity-70">À verser ce mois-ci :</p>
        <h2 className="text-4xl font-black italic">25.000 <span className="text-sm text-orange-400">FCFA</span></h2>
      </div>
      <button className="w-full mt-6 bg-[oklch(0.62_0.19_45)] text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2">
        Payer maintenant <ArrowUpRight size={18} />
      </button>
    </div>

    <div className="bg-white border-2 border-orange-100 p-5 rounded-[2rem] flex items-start gap-4">
      <AlertCircle className="text-[oklch(0.62_0.19_45)]" />
      <div>
        <h3 className="font-bold">Prochain Pot</h3>
        <p className="text-sm text-gray-500">Tour de Fatou Bamba le 15 Mai.</p>
      </div>
    </div>
  </div>
);

export default HomeDashboard;
