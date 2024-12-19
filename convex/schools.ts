import { v } from "convex/values";
import { mutation } from "./_generated/server";
export const createSchool = mutation({
  args: {
    schoolName: v.string(),
    schoolLocation: v.string(),
    schoolRegion: v.string(),
    schoolContact: v.string(),
    schoolRemarks: v.string(),
    createdBy: v.string(),
  },

  handler: async (ctx, args) => {
    const school = await ctx.db
      .query("schools")
      .filter((q) =>
        q.and(
          q.eq(q.field("schoolName"), args.schoolName),
          q.eq(q.field("schoolLocation"), args.schoolLocation)
        )
      )
      .collect();

    if (school?.length == 0) {
      await ctx.db.insert("schools", {
        schoolName: args.schoolName,
        schoolLocation: args.schoolLocation,
        schoolRegion: args.schoolRegion,
        schoolContact: args.schoolContact,
        schoolRemarks: args.schoolRemarks,
        createdBy: args.createdBy,
      });
      return "School created";
    }
    return "School already exists";
  },
});
