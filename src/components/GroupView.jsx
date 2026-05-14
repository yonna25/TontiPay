import React from 'react';
import { CheckCircle2, Clock, User } from 'lucide-react';

const GroupView = () => (
  <div className="space-y-6">
    <h1 className="text-2xl font-bold py-4">Mon Groupe</h1>
    {[
      { name: "Marie Adjoua", paid: true, score: 97 },
      { name: "Fatou Bamba", paid: true, score: 88 },
      { name: "Rosine Dossou", paid: false, score: 92 }
    ].map((m, i) => (
      <div key={i} className="bg-white p-4 rounded-2xl flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center"><User size={20}/></div>
          <div><p className="font-bold">{m.name}</p><p className="text-[10px] text-gray-400">Score: {m.score}%</p></div>
        </div>
        {m.paid ? <CheckCircle2 className="text-green-500" /> : <Clock className="text-gray-300" />}
      </div>
    ))}
  </div>
);

export default GroupView;
