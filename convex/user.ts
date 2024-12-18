import { v } from "convex/values";
import { mutation } from "./_generated/server";
export const createUser = mutation({
  args: {
    username: v.string(),
    email: v.string(),
    imgUrl: v.string(),
  },

  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    if (user?.length == 0) {
      await ctx.db.insert("users", {
        email: args.email,
        imgUrl: args.imgUrl,
        username: args.username,
      });
      return "User created";
    }
    return "User already exists";
  },
});
