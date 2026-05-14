// src/components/PaymentModule.jsx
import React, { useState } from 'react';
import { Smartphone, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

const PaymentModule = () => {
  const [step, setStep] = useState('choice'); // 'choice' ou 'success'

  const paymentMethods = [
    { id: 'om', name: 'Orange Money', color: 'bg-[#FF6600]', icon: 'OM' },
    { id: 'wave', name: 'Wave', color: 'bg-[#3399FF]', icon: 'W' },
    { id: 'momo', name: 'MTN MoMo', color: 'bg-[#FFCC00]', icon: 'M' },
  ];

  // Vue après confirmation du paiement
  if (step === 'success') {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center animate-in zoom-in duration-300">
        <div className="w-24 h-24 bg-[oklch(0.55_0.16_145)]/20 text-[oklch(0.55_0.16_145)] rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={56} strokeWidth={2.5} />
        </div>
        <h2 className="text-2xl font-black text-[oklch(0.18_0.025_50)]">Paiement Réussi !</h2>
        <p className="mt-2 text-[oklch(0.52_0.03_60)] px-6">
          Votre cotisation de 25.000 FCFA a été enregistrée. Le groupe a été notifié.
        </p>
        <button 
          onClick={() => setStep('choice')}
          className="mt-10 w-full max-w-xs py-4 bg-[oklch(0.18_0.025_50)] text-white rounded-2xl font-bold shadow-lg active:scale-95 transition-all"
        >
          Retour
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-400">
      <header className="py-4">
        <h1 className="text-2xl font-bold text-[oklch(0.18_0.025_50)]">Régler ma part</h1>
        <p className="text-[oklch(0.52_0.03_60)]">Nana Benz Premium • Tour 3</p>
      </header>

      {/* Résumé du montant */}
      <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex justify-between items-center">
        <div>
          <p className="text-[10px] font-bold uppercase text-gray-400 tracking-widest">Montant à payer</p>
          <p className="text-3xl font-black text-[oklch(0.18_0.025_50)]">25.000 <span className="text-sm">FCFA</span></p>
        </div>
        <div className="bg-[oklch(0.55_0.16_145)]/10 p-3 rounded-2xl text-[oklch(0.55_0.16_145)]">
          <ShieldCheck size={28} />
        </div>
      </div>

      {/* Liste des opérateurs */}
      <div className="space-y-3">
        <p className="text-xs font-bold uppercase text-[oklch(0.52_0.03_60)] px-1">
          Choisir un opérateur
        </p>
        
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            onClick={() => setStep('success')}
            className="w-full group flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[oklch(0.62_0.19_45)] transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center text-white font-black text-lg shadow-inner shadow-black/10`}>
                {method.icon}
              </div>
              <span className="font-bold text-lg text-[oklch(0.18_0.025_50)] group-hover:text-[oklch(0.62_0.19_45)] transition-colors">
                {method.name}
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-orange-50 transition-colors">
              <ArrowRight size={20} className="text-gray-300 group-hover:text-[oklch(0.62_0.19_45)]" />
            </div>
          </button>
        ))}
      </div>

      {/* Note de sécurité sécurisante pour l'utilisatrice */}
      <div className="p-4 bg-[oklch(0.99_0.005_80)] rounded-2xl border border-dashed border-gray-200 flex gap-3">
        <Smartphone size={20} className="text-gray-400 shrink-0" />
        <p className="text-[11px] text-gray-500 leading-relaxed">
          TontiPay sécurise votre transaction. Votre compte mobile sera débité dès la validation sur votre téléphone.
        </p>
      </div>
    </div>
  );
};

export default PaymentModule;
        
