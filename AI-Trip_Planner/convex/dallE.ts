import { mutation, action } from "./_generated/server";
import { v } from "convex/values";

export const generateImage = mutation({
  args: {
    prompt: v.string(),
  },
  handler: async (ctx, args) => {
    // Here you would typically save the prompt to a database table.
    return { success: true, message: "Prompt received and queued." };
  },
});

export const callDallE = action({
  args: {
    prompt: v.string(),
  },
  handler: async (ctx, args) => {
    // In a real application, you would connect to the OpenAI API here.
    const dummyImageUrl = `https://via.placeholder.com/150?text=${encodeURIComponent(args.prompt)}`;
    return { imageUrl: dummyImageUrl };
  },
});