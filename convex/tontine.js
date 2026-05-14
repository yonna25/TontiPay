import { query } from "./_generated/server";

export const getTontineInfo = query({
  handler: async (ctx) => {
    // On récupère la première tontine de la liste
    return await ctx.db.query("tontines").first();
  },
});
