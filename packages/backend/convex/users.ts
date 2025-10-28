import { query, mutation } from "./_generated/server.js";

export const getMany = query({
    args: {},
    handler: async (ctx) => {
        const users = await ctx.db.query("users").collect();

        return users;
    }
})

export const add = mutation({
    args: {},
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();

        const orgId  = identity?.org_id as string;

        if(!orgId){
            throw new Error("No organization found");
        }

        if(identity === null){
            throw new Error("Not authenticated");
        }
        const userId = await ctx.db.insert("users", {
            name: "Anton"
        });

        return userId;
    }
});
