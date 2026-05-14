import React from 'react';
import { CheckCircle2, Clock, User, ShieldCheck } from 'lucide-react';

const GroupView = () => {
  // Données simulées basées sur le cahier des charges
  const members = [
    { id: 1, name: "Marie Adjoua", paid: true, isNext: false, score: 97, status: "Élite" },
    { id: 2, name: "Fatou Bamba", paid: true, isNext: true, score: 88, status: "Fiable" },
    { id: 3, name: "Rosine Dossou", paid: false, isNext: false, score: 92, status: "Fiable" },
    { id: 4, name: "Awa Touré", paid: false, isNext: false, score: 45, status: "Risque" },
  ];

  return (
    <div className="space-y-6">
      {/* En-tête simplifié */}
      <header className="py-4">
        <h1 className="text-2xl font-bold text-[oklch(0.18_0.025_50)]">Mon Groupe</h1>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-sm font-medium text-[oklch(0.52_0.03_60)]">Nana Benz Premium</span>
          <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
          <span className="text-sm font-medium text-[oklch(0.62_0.19_45)]">Tour 3 sur 8</span>
        </div>
      </header>

      {/* Liste des membres */}
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase tracking-widest text-[oklch(0.52_0.03_60)] mb-2">
          Cotisations du mois
        </p>
        
        {members.map((member) => (
          <div 
            key={member.id} 
            className="bg-white p-4 rounded-2xl border border-gray-100 flex items-center justify-between shadow-sm transition-all hover:shadow-md"
          >
            <div className="flex items-center gap-3">
              {/* Avatar avec indicateur de statut */}
              <div className="relative">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  member.paid 
                    ? 'bg-[oklch(0.55_0.16_145)]/10 text-[oklch(0.55_0.16_145)]' 
                    : 'bg-gray-100 text-gray-400'
                }`}>
                  <User size={24} />
                </div>
                {member.score > 90 && (
                  <div className="absolute -top-1 -right-1 bg-white rounded-full p-0.5">
                    <ShieldCheck size={14} className="text-[oklch(0.55_0.16_145)]" />
                  </div>
                )}
              </div>

              <div>
                <p className="font-bold text-[oklch(0.18_0.025_50)] leading-tight">
                  {member.name}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  {member.isNext ? (
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-orange-100 text-orange-700">
                      Prend le pot
                    </span>
                  ) : (
                    <span className="text-[10px] font-medium text-[oklch(0.52_0.03_60)]">
                      Score: {member.score}%
                    </span>
                  )}
                </div>
              </div>
            </div>
            
            {/* État de paiement visuel (3 secondes pour comprendre) */}
            <div className="flex flex-col items-center gap-1">
              {member.paid ? (
                <>
                  <CheckCircle2 className="text-[oklch(0.55_0.16_145)]" size={28} />
                  <span className="text-[9px] font-bold text-[oklch(0.55_0.16_145)] uppercase">Payé</span>
                </>
              ) : (
                <>
                  <Clock className="text-gray-300" size={28} />
                  <span className="text-[9px] font-bold text-gray-400 uppercase">En attente</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Note de transparence */}
      <div className="mt-8 p-4 bg-[oklch(0.99_0.005_80)] rounded-2xl border border-gray-200 border-dashed">
        <p className="text-[11px] text-[oklch(0.52_0.03_60)] text-center leading-relaxed">
          Cette liste est visible par tous les membres du groupe pour garantir la confiance et la transparence.
        </p>
      </div>
    </div>
  );
};

export default GroupView;
