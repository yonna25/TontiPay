import { query } from "./_generated/server";

export const getTontineInfo = query({
  handler: async (ctx) => {
    return await ctx.db.query("tontines").first();
  },
});

export const getMembers = query({
  handler: async (ctx) => {
    return await ctx.db.query("users").collect();
  },
});
