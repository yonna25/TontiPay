import React from 'react';
import { useQuery } from "convex/react";

const HomeDashboard = () => {
  // On appelle la fonction en utilisant la syntaxe "nomDuFichier:nomDeLaFonction"
  const tontine = useQuery("tontine:getTontineInfo");

  // État de chargement (si la connexion prend du temps)
  if (tontine === undefined) {
    return (
      <div className="p-10 text-center text-gray-500">
        Connexion au serveur...
      </div>
    );
  }

  // État si la base de données est vide
  if (tontine === null) {
    return (
      <div className="p-10 text-center text-red-500">
        Aucune donnée trouvée dans la base.
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6">
      <div className="bg-black text-white p-8 rounded-[2.5rem] border border-gray-800 shadow-2xl">
        <p className="text-xs uppercase tracking-widest opacity-60 mb-2">Mensualité</p>
        <h2 className="text-5xl font-extrabold tracking-tighter">
          {tontine.contributionAmount?.toLocaleString() || "0"}
          <span className="text-orange-500 ml-2 text-2xl font-light">FCFA</span>
        </h2>
        <button className="w-full mt-8 bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-black text-lg transition-all active:scale-95">
          PAYER MAINTENANT
        </button>
      </div>
      
      <div className="text-center">
        <p className="text-gray-500 text-sm font-medium">
          Groupe : <span className="text-black">{tontine.name}</span>
        </p>
      </div>
    </div>
  );
};

export default HomeDashboard;
