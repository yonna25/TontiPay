import React from 'react';
import { useQuery } from "convex/react";
import { TrendingUp } from 'lucide-react';

const HomeDashboard = () => {
  // On appelle la fonction "tontine:getTontineInfo" directement par son nom
  const tontine = useQuery("tontine:getTontineInfo");

  if (tontine === undefined) return <div className="p-10 text-center text-white">Chargement...</div>;

  return (
    <div className="p-4 space-y-6">
      <div className="bg-black text-white p-6 rounded-[2rem] border border-gray-800">
        <p className="text-sm opacity-70 italic">À verser ce mois-ci :</p>
        <h2 className="text-4xl font-bold">
          {tontine?.contributionAmount?.toLocaleString() || "0"} 
          <span className="text-orange-400 ml-2 text-xl">FCFA</span>
        </h2>
        <button className="w-full mt-6 bg-orange-500 py-3 rounded-xl font-bold hover:bg-orange-600 transition-colors">
          Payer maintenant
        </button>
      </div>
      
      <p className="text-center text-gray-400 text-sm">
        Groupe : {tontine?.name || "Non défini"}
      </p>
    </div>
  );
};

export default HomeDashboard;
