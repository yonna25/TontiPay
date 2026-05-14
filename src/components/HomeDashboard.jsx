const HomeDashboard = () => {
  return (
    <div className="space-y-6">
      <header className="py-4">
        <h1 className="text-2xl font-bold">Bonjour, Marie</h1>
        <p className="text-[oklch(0.52_0.03_60)]">Voici l'état de votre caisse</p>
      </header>

      {/* Carte Score/Argent Fusionnée */}
      <div className="bg-[oklch(0.20_0.04_45)] text-white p-6 rounded-3xl shadow-xl space-y-4">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm opacity-80 text-white/70">Mon Score</p>
            <p className="text-3xl font-bold text-[oklch(0.55_0.16_145)]">97%</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-white/70">Prochain Pot</p>
            <p className="text-xl font-semibold">15 Juin</p>
          </div>
        </div>
        
        <div className="pt-4 border-t border-white/10">
          <p className="text-sm text-white/70">Ce que je dois verser :</p>
          <p className="text-4xl font-black mt-1">25.000 FCFA</p>
        </div>
      </div>

      {/* Alerte Simple */}
      <div className="bg-orange-50 border-l-4 border-[oklch(0.62_0.19_45)] p-4 rounded-r-xl">
        <p className="text-sm font-bold text-orange-900">Alerte Paiement</p>
        <p className="text-xs text-orange-800">Il reste 2 jours pour cotiser au groupe "Nana Benz".</p>
      </div>
    </div>
  );
};
