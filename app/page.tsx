// app/page.tsx
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Detect Egyptian/Arabic locale or default to English
    const preferredLang = navigator.language.startsWith("ar") ? "ar" : "en";
    router.replace(`/${preferredLang}`);
  }, [router]);

  return null; // The screen remains blank for a split second during redirect
}