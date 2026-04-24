import HeroSection from "@/components/ui/blocks/hero";
import { getDictionary } from "@/lib/dictionary";
import en from "@/dictionaries/en.json";
import Timeline from "@/components/ui/blocks/timeline";
import Navbar from "@/components/ui/blocks/navbar";
import Feature from "@/components/ui/blocks/feature";
import Testimonials from "@/components/ui/blocks/testimonial";
import Footer from "@/components/ui/blocks/footer";
import { Metadata } from "next";
export type Dictionary = typeof en;
export type Language = 'en' | 'ar';
export type maltilangualProps= {
  dictionary: Dictionary; // Ideally, define a specific Type/Interface for your JSON
  lang: 'en' | 'ar';
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (lang === "ar" ? "ar" : "en") as Language;
  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.seo.title,
    description: dictionary.seo.description,
    keywords: dictionary.seo.keywords,
    alternates: {
      canonical: `https://yourdomain.com/${locale}`,
      languages: {
        "en-US": "https://yourdomain.com/en",
        "ar-SA": "https://yourdomain.com/ar",
      },
    },
    openGraph: {
      title: dictionary.seo.title,
      description: dictionary.seo.description,
      url: `https://yourdomain.com/${locale}`,
      siteName: "Khalid ibn al-Walid Legacy",
      images: [
        {
          url: "/Khalid/Pic01-1200.webp", // Put a high-quality preview image in your public folder
          width: 1200,
          height: 630,
        },
      ],
      locale: locale === "ar" ? "ar_EG" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.seo.title,
      description: dictionary.seo.description,
      images: ["/Khalid/Pic01-1200.webp"],
    },
  };
}
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
    <>
    <Navbar dictionary={dictinary} lang={locale}/>
      {/* Pass the dictionary directly to your Client Component */}
      <HeroSection dictionary={dictinary} lang={locale} />
      <Feature dictionary={dictinary} lang={locale}/>
      <Timeline dictionary={dictinary} lang={locale} />
      <Testimonials dictionary={dictinary} lang={locale}/>
      <Footer dictionary={dictinary}/>
    </>
  );
}