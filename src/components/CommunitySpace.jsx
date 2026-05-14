import React from 'react';
import { Send, Gavel, Lock, MessageSquare, ShieldAlert } from 'lucide-react';

const CommunitySpace = () => {
  // Simulation du flux communautaire
  const messages = [
    {
      id: 1,
      type: 'info',
      content: 'Le coffre de réserve a atteint 150.000 FCFA.',
      icon: Lock,
      color: 'bg-blue-50 text-blue-700 border-blue-100'
    },
    {
      id: 2,
      type: 'vote',
      author: 'Système',
      content: 'Rosine Dossou demande un déblocage exceptionnel du fonds de secours pour une urgence santé.',
      isUrgent: true
    },
    {
      id: 3,
      type: 'chat',
      author: 'Fatou Bamba',
      time: '10:45',
      content: 'J’ai bien reçu mon pot ce matin, merci le groupe ! 🙏',
      isMe: false
    }
  ];

  return (
    <div className="flex flex-col h-[calc(100vh-120px)]">
      {/* En-tête */}
      <header className="py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-[oklch(0.18_0.025_50)]">Communauté</h1>
          <p className="text-sm text-[oklch(0.52_0.03_60)]">Nana Benz Premium</p>
        </div>
        <div className="bg-[oklch(0.99_0.005_80)] p-2 rounded-full border border-gray-200">
          <MessageSquare size={20} className="text-[oklch(0.52_0.03_60)]" />
        </div>
      </header>

      {/* Zone de discussion / Decisions */}
      <div className="flex-1 overflow-y-auto space-y-4 py-4 pr-1">
        {messages.map((msg) => (
          <div key={msg.id} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            
            {/* TYPE : INFO / COFFRE */}
            {msg.type === 'info' && (
              <div className={`p-3 rounded-2xl border flex items-center gap-3 ${msg.color}`}>
                <msg.icon size={18} />
                <p className="text-xs font-bold uppercase tracking-tight">{msg.content}</p>
              </div>
            )}

            {/* TYPE : VOTE / LITIGE FUSIONNÉ */}
            {msg.type === 'vote' && (
              <div className="bg-white border-2 border-dashed border-orange-200 p-4 rounded-3xl shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-[oklch(0.62_0.19_45)]">
                  <Gavel size={20} />
                  <span className="font-black text-sm uppercase">Décision Collective</span>
                </div>
                <p className="text-[oklch(0.18_0.025_50)] text-sm leading-relaxed mb-4">
                  {msg.content}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button className="bg-[oklch(0.62_0.19_45)] text-white py-3 rounded-2xl font-bold text-sm shadow-sm active:scale-95 transition-transform">
                    D'accord
                  </button>
                  <button className="bg-white border border-gray-200 text-gray-500 py-3 rounded-2xl font-bold text-sm active:scale-95 transition-transform">
                    Pas d'accord
                  </button>
                </div>
              </div>
            )}

            {/* TYPE : CHAT CLASSIQUE */}
            {msg.type === 'chat' && (
              <div className={`flex flex-col ${msg.isMe ? 'items-end' : 'items-start'}`}>
                <span className="text-[10px] text-[oklch(0.52_0.03_60)] mb-1 px-2">
                  {msg.author} • {msg.time}
                </span>
                <div className={`p-4 max-w-[85%] rounded-3xl shadow-sm border border-gray-50 ${
                  msg.isMe 
                    ? 'bg-[oklch(0.20_0.04_45)] text-white rounded-tr-none' 
                    : 'bg-white text-[oklch(0.18_0.025_50)] rounded-tl-none'
                }`}>
                  <p className="text-sm leading-relaxed">{msg.content}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Barre de message simplifiée */}
      <div className="py-4 bg-[oklch(0.99_0.005_80)]">
        <div className="bg-white p-2 rounded-3xl border border-gray-200 flex items-center shadow-sm focus-within:border-[oklch(0.62_0.19_45)] transition-all">
          <input 
            type="text" 
            placeholder="Écrire au groupe..." 
            className="flex-1 bg-transparent border-none outline-none px-3 text-sm text-[oklch(0.18_0.025_50)]"
          />
          <button className="bg-[oklch(0.62_0.19_45)] text-white p-3 rounded-2xl shadow-md active:scale-90 transition-transform">
            <Send size={18} fill="currentColor" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommunitySpace;
            
