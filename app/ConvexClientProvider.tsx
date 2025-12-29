"use client"
import React, { ReactNode } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { ClerkProvider } from "@clerk/nextjs";
import provider from "./provider";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider>
      <ConvexProvider client={convex}>
        {children}
      </ConvexProvider>
    </ClerkProvider>
  );
}