"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";

export function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-0 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Admin Dashboard"
              href="https://admindashboard-vert.vercel.app/"
              src="/project1.png"
              description="Admin dashboard that focuses on employee management in company"
            />
            <ProductItem
              title="AD exports"
              href="https://adexports.vercel.app/"
              src="/project2.png"
              description="Discover our advanced CNC machining solutions including Multi-Tasking, 5-axis, milling, turning, CNC controls and automation."
            />
            <ProductItem
              title="Block-staking App"
              href="https://staking-app-pied.vercel.app/"
              src="/project3.png"
              description="Our app is the only app that lets you buy crypto with a card or bank account and self-custody your assets—all in one place"
            />
            <ProductItem
              title="AI-chat App"
              href="https://ai-app-jet.vercel.app/"
              src="/project4.png"
              description="unlocks the power of knowledge with information discovery and sharing."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="About">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
