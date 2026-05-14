import React, { useState } from 'react';
import HomeDashboard from './components/HomeDashboard';
import GroupView from './components/GroupView';
import PaymentModule from './components/PaymentModule';
import CommunitySpace from './components/CommunitySpace';
import { Home, Users, CreditCard, MessageSquare } from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');

  const navigation = [
    { id: 'home', label: 'Argent', icon: Home, component: HomeDashboard },
    { id: 'group', label: 'Groupe', icon: Users, component: GroupView },
    { id: 'pay', label: 'Payer', icon: CreditCard, component: PaymentModule },
    { id: 'chat', label: 'Messages', icon: MessageSquare, component: CommunitySpace },
  ];

  const ActiveComponent = navigation.find((tab) => tab.id === activeTab).component;

  return (
    <div className="min-h-screen bg-[oklch(0.99_0.005_80)] text-[oklch(0.18_0.025_50)]">
      <main className="max-w-md mx-auto min-h-screen pb-24 px-5 pt-4">
        <ActiveComponent />
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md border-t border-gray-100 shadow-lg z-50">
        <div className="max-w-md mx-auto flex justify-around items-center py-3">
          {navigation.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center gap-1 transition-all ${isActive ? 'text-[oklch(0.62_0.19_45)]' : 'text-gray-400'}`}>
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
                <span className="text-[10px] font-bold uppercase">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default App;
