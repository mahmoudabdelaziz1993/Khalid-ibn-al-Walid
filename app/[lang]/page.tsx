import HeroSection from "@/components/ui/blocks/hero";
import { getDictionary } from "@/lib/dictionary";
import en from "@/dictionaries/en.json";
export type Dictionary = typeof en;
export type Language = 'en' | 'ar';

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  // Cast lang to your supported types
  const locale = (lang === 'ar' ? 'ar' : 'en') as Language;
  
  // Load the static JSON content
  const dictinary = await getDictionary(locale);
  return (
    <main>
      {/* Pass the dictionary directly to your Client Component */}
      <HeroSection dictionary={dictinary} lang={locale} />
    </main>
  );
}