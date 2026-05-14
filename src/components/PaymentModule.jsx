// src/components/PaymentModule.jsx
import React, { useState } from 'react';
import { Smartphone, ArrowRight, CheckCircle } from 'lucide-react';

const PaymentModule = () => {
  const [step, setStep] = useState('choice'); // choice, confirm, success

  const methods = [
    { id: 'om', name: 'Orange Money', color: 'bg-[#FF6600]', icon: 'OM' },
    { id: 'wave', name: 'Wave', color: 'bg-[#3399FF]', icon: 'W' },
    { id: 'momo', name: 'MTN MoMo', color: 'bg-[#FFCC00]', icon: 'M' },
  ];

  if (step === 'success') {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh] text-center space-y-4">
        <div className="w-20 h-20 bg-[oklch(0.55_0.16_145)]/20 text-[oklch(0.55_0.16_145)] rounded-full flex items-center justify-center mb-4">
          <CheckCircle size={48} />
        </div>
        <h2 className="text-2xl font-bold">Paiement Envoyé !</h2>
        <p className="text-[oklch(0.52_0.03_60)]">Votre reçu a été partagé avec le gérant du groupe.</p>
        <button 
          onClick={() => setStep('choice')}
          className="mt-8 px-8 py-3 bg-[oklch(0.18_0.025_50)] text-white rounded-2xl font-bold"
        >
          Retour à l'accueil
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header className="py-4">
        <h1 className="text-2xl font-bold">Payer ma cotisation</h1>
        <p className="text-[oklch(0.52_0.03_60)]">Montant : 25.000 FCFA</p>
      </header>

      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">Choisir un mode de paiement</p>
        {methods.map((method) => (
          <button
            key={method.id}
            onClick={() => setStep('success')}
            className="w-full flex items-center justify-between p-4 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-[oklch(0.62_0.19_45)] transition-all"
          >
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 ${method.color} rounded-xl flex items-center justify-center text-white font-black shadow-inner`}>
                {method.icon}
              </div>
              <span className="font-bold text-lg">{method.name}</span>
            </div>
            <ArrowRight size={20} className="text-gray-300" />
          </button>
        ))}
      </div>

      <div className="bg-gray-100 p-4 rounded-2xl flex items-start gap-3">
        <Smartphone size={18} className="mt-1 text-gray-500" />
        <p className="text-xs text-gray-500 leading-relaxed">
          Le paiement sera débité directement de votre compte mobile. Assurez-vous d'avoir le montant disponible.
        </p>
      </div>
    </div>
  );
};

export default PaymentModule;
