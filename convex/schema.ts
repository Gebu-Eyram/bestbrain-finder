import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    username: v.string(),
    email: v.string(),
    imgUrl: v.string(),
  }),

  schools: defineTable({
    createdBy: v.string(),
    schoolName: v.string(),
    schoolLocation: v.string(),
    schoolRegion: v.string(),
    schoolContact: v.string(),
    schoolRemarks: v.string(),
  }),
});
