import React from 'react';
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { TrendingUp, ArrowUpRight } from 'lucide-react';

const HomeDashboard = () => {
  // On appelle la base de données
  const tontine = useQuery(api.tontine.getTontineInfo);

  // Si ça charge, on affiche un petit message
  if (tontine === undefined) return <div className="p-10 text-center">Connexion...</div>;

  return (
    <div className="p-4 space-y-6">
      <div className="bg-black text-white p-6 rounded-[2rem]">
        <p className="text-sm opacity-70 italic">À verser ce mois-ci :</p>
        <h2 className="text-4xl font-bold">
          {tontine?.contributionAmount?.toLocaleString() || "0"} 
          <span className="text-orange-400 ml-2 text-xl">FCFA</span>
        </h2>
        <button className="w-full mt-6 bg-orange-500 py-3 rounded-xl font-bold">
          Payer maintenant
        </button>
      </div>
      
      <p className="text-center text-gray-400 text-sm">
        Groupe : {tontine?.name}
      </p>
    </div>
  );
};

export default HomeDashboard;
