import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    name: v.string(),
    phone: v.string(),
    score: v.number(),
    role: v.string(),
  }).index("by_phone", ["phone"]),

  tontines: defineTable({
    name: v.string(),
    contributionAmount: v.number(),
    totalTours: v.number(),
    currentTour: v.number(),
    status: v.string(),
  }),

  contributions: defineTable({
    tontineId: v.id("tontines"),
    userId: v.id("users"),
    tour: v.number(),
    amount: v.number(),
    status: v.string(),
    paidAt: v.optional(v.number()),
  }).index("by_tontine_and_tour", ["tontineId", "tour"]),

  messages: defineTable({
    authorId: v.optional(v.id("users")),
    authorName: v.string(),
    content: v.string(),
    type: v.string(),
    timestamp: v.number(),
  }),
});
