"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Toggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";

export function ModeToggle({ className }: { className?: string }) {
    const { resolvedTheme, setTheme } = useTheme();

    const isDark = resolvedTheme === "dark";

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
        <Toggle
            aria-label="Toggle theme"
            size="lg"
            variant="default"
            pressed={isDark}
            onPressedChange={toggleTheme}
            className={cn(
                "transition-all duration-500",
                className
            )}
        >
            {/* Single SVG that changes appearance based on theme */}
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m0-1.5v-17a8.5 8.5 0 0 1 0 17" /></svg>
            <span className="sr-only">Toggle theme</span>
        </Toggle>
    );
}