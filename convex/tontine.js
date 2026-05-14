import { query } from "./_generated/server";

export const getTontineInfo = query({
  handler: async (ctx) => {
    // Récupère la première tontine trouvée dans la table "tontines"
    const data = await ctx.db.query("tontines").first();
    return data;
  },
});
