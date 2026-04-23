"use client";
import React, { SVGProps, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  BattleIcon,
  EmpireIcon,
  SwordIcon,
  CasualtyIcon,
  CommandIcon,
  CityIcon,
} from "@/components/ui/icons/khalid-icons";
import { Separator } from "@/components/ui/separator";
import { motion, useInView, useSpring, useTransform } from "motion/react";
import { Dictionary, Language } from "@/app/[lang]/page";
interface Achievement {
  icon?: React.FC<SVGProps<SVGSVGElement>>;
  value: string;
  label: string;
  subtext?: string; // Made optional just in case
}

const Counter = ({ value, lang }: { value: string, lang: string }) => {
  // 1. Convert Arabic numerals to Western digits so parseInt works
  const westernDigits = value.replace(/[٠-٩]/g, (d) =>
    (d.charCodeAt(0) - 1632).toString()
  );

  // 2. Strip everything except numbers
  const numericValue = parseInt(westernDigits.replace(/\D/g, ""));

  const count = useSpring(0, {
    stiffness: 100,
    damping: 30,
  });

  const rounded = useTransform(count, (latest) => {
    // 3. This will turn the number back into the correct local format (e.g., ١٠٠ for ar-EG)
    const formatted = Math.round(latest).toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-US');
    return value.includes("+") ? `${formatted}+` : formatted;
  });

  useEffect(() => {
    if (!isNaN(numericValue)) {
      count.set(numericValue);
    }
  }, [numericValue, count]);

  return <motion.span>{rounded}</motion.span>;
};
const Achievement: React.FC<Achievement & { lang: Language }> = ({ icon: Icon, value, label, lang }) => {
  return (
    <div className="flex flex-col items-center gap-3 py-5 px-8 sm:py-0 sm:px-0 w-full" aria-label={`${label}: ${value}`}

    >
      {Icon && <Icon className="w-12 h-12 text-primary" />}
      <p className="sm:text-xl text-lg font-semibold text-background dark:text-foreground">
        <Counter value={value} lang={lang} />
      </p>
      <p className="text-sm font-normal text-muted-foreground">
        {label}
      </p>
    </div>
  );
};
// const militaryAchievements: readonly Achievement[] =
//   [
//     {
//       icon: BattleIcon,
//       value: "100+",
//       label: "Battles Fought",
//       subtext: "Undefeated"
//     },
//     {
//       icon: EmpireIcon,
//       value: "2",
//       label: "Empires Defeated",
//       subtext: "Byzantine & Sasanian Persian"
//     },
//     {
//       icon: SwordIcon,
//       value: "9",
//       label: "Swords Broken",
//       subtext: "At Battle of Mu'tah, 629 CE"
//     },
//     {
//       icon: CasualtyIcon,
//       value: "50,000+",
//       label: "Enemy Casualties",
//       subtext: "At Battle of Yarmouk alone"
//     },
//     {
//       icon: CommandIcon,
//       value: "9",
//       label: "Years of Command",
//       subtext: "629–638 CE"
//     },
//     {
//       icon: CityIcon,
//       value: "10+",
//       label: "Cities Conquered",
//       subtext: "Damascus, Homs, Aleppo, Jerusalem, Al-Hira & more"
//     }
//   ] as const;

interface HeroProps {
  dictionary: Dictionary; // Ideally, define a specific Type/Interface for your JSON
  lang: 'en' | 'ar';
}

const HeroSection: React.FC<HeroProps> = ({ dictionary, lang }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const { hero, achievements } = dictionary;
  return (
    <section ref={sectionRef} >
      <div className="bg-background
      bg-[url('/Khalid/Pic01-480.webp')] 
      md:bg-[url('/Khalid/Pic01-800.webp')] 
      lg:bg-[url('/Khalid/Pic01-1920.webp')] 
      bg-blend-darken
      dark:bg-blend-color-dodge
       bg-cover md:bg-top-left bg-bottom-left  bg-no-repeat overflow-hidden relative flex flex-col xl:h-screen justify-center z-10 xl:gap-0 gap-12">
        <div className="max-w-7xl mx-auto sm:px-16 px-4 w-full xl:pt-0 pt-32 ">
          <div className="relative text-start z-30 text-background dark:text-foreground">
            <p className=" text-xs font-medium tracking-wider text-accent dark:text-primary">{hero.location}</p>
            <h1 className="text-inherit text-5xl md:text-6xl lg:text-7xl font-normal mt-2 mb-6">
              {hero.title.replace(hero.accent, "")}{" "}
              <span className="text-accent dark:text-primary">{hero.accent}</span>            </h1>
            <div>
              <Button >
                <a href="#">{hero.cta}</a>
              </Button>
            </div>
          </div>
        </div>
        <div className="xl:absolute bottom-9 inset-e-0 z-30 xl:w-auto lg:w-4/5 w-full lg:ms-auto">
          <div className="relative">

            <div className=" sm:py-10 py-6 xl:ps-12 ps-4  pe-4 xl:pe-34 z-1 relative">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.05, ease: "easeInOut" }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-0 lg:flex sm:items-center justify-center sm:gap-10 sm:text-center"
              >
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    viewport={{ once: true, margin: "-50px" }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                      delay: index * 0.1
                    }}
                    className="flex sm:gap-10"
                  >
                    {/* Stats */}
                    <Achievement {...item} lang={lang} />
                    {index < achievements.length - 1 && (
                      <Separator
                        orientation="vertical"
                        className="h-12 my-auto lg:block hidden"
                      />
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
