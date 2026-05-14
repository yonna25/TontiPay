// src/App.jsx
import React, { useState } from 'react';
import HomeDashboard from './components/HomeDashboard';
import GroupView from './components/GroupView';
import PaymentModule from './components/PaymentModule';
import CommunitySpace from './components/CommunitySpace';
import { Home, Users, CreditCard, MessageSquare } from 'lucide-react';

const App = () => {
  // État pour gérer l'onglet actif (par défaut : Accueil)
  const [activeTab, setActiveTab] = useState('home');

  // Configuration de la navigation simplifiée (Logique : 4 onglets max)
  const navigation = [
    { id: 'home', label: 'Argent', icon: Home, component: HomeDashboard },
    { id: 'group', label: 'Groupe', icon: Users, component: GroupView },
    { id: 'pay', label: 'Payer', icon: CreditCard, component: PaymentModule },
    { id: 'chat', label: 'Messages', icon: MessageSquare, component: CommunitySpace },
  ];

  // Extraction du composant à afficher selon l'onglet sélectionné
  const ActiveComponent = navigation.find((tab) => tab.id === activeTab).component;

  return (
    <div className="min-h-screen bg-[oklch(0.99_0.005_80)] text-[oklch(0.18_0.025_50)] font-sans antialiased">
      {/* Zone de contenu principal : max-w-md pour simuler un rendu mobile sur PC */}
      <main className="max-w-md mx-auto min-h-screen pb-24 px-5 pt-4">
        {/* Affichage dynamique du module sélectionné */}
        <ActiveComponent />
      </main>

      {/* Barre de navigation basse (Bottom Nav) - Fixée en bas */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.03)] z-50">
        <div className="max-w-md mx-auto flex justify-around items-center py-3 px-2">
          {navigation.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-1.5 transition-all duration-300 relative ${
                  isActive 
                    ? 'text-[oklch(0.62_0.19_45)] scale-110' 
                    : 'text-[oklch(0.52_0.03_60)]'
                }`}
              >
                {/* Indicateur visuel pour l'onglet actif */}
                {isActive && (
                  <span className="absolute -top-1 w-1 h-1 bg-[oklch(0.62_0.19_45)] rounded-full animate-pulse" />
                )}
                
                <Icon 
                  size={24} 
                  strokeWidth={isActive ? 2.5 : 2} 
                />
                
                <span className={`text-[10px] font-bold uppercase tracking-tighter ${
                  isActive ? 'opacity-100' : 'opacity-70'
                }`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default App;
        
