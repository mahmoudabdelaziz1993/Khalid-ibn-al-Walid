
import { Geist, Geist_Mono, Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});



// This is key for GitHub Pages static export
export async function generateStaticParams() {
    return [{ lang: "en" }, { lang: "ar" }];
}
export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ lang: string }>;
}) {

    const { lang } = await params;
    const isAr = lang === "ar";
    return (
        <html
            lang={lang}
            dir={isAr ? "rtl" : "ltr"}
            suppressHydrationWarning
            className={cn(
                "h-full antialiased",
                geistSans.variable,
                geistMono.variable,
                inter.variable
            )}
        >
            <body className={cn("min-h-full flex flex-col font-sans", inter.className)}>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                    disableTransitionOnChange
                >
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );

}
