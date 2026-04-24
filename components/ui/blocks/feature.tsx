"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { motion } from "motion/react";
import { maltilangualProps } from "@/app/[lang]/page";
import { Water, Siege, Camel, Encirclement } from '@/components/ui/icons/khalid-icons'
import { SVGProps } from "react";
const Feature: React.FC<maltilangualProps> = ({ dictionary, lang }) => {
  const { strategicAchievements } = dictionary
  const ICON_MAP: Record<string, React.FC<SVGProps<SVGSVGElement>>> = {
    water: Water,
    siege: Siege,
    camel: Camel,
    encirclement: Encirclement
  }
  const achievements = strategicAchievements.achievements.map((achievement) => ({
    ...achievement,
    icon: ICON_MAP[achievement.id]
  }))

  return (
    <section id={strategicAchievements.id}>
      <div className="lg:py-20 sm:py-16 py-8">
        <div className="mx-auto max-w-7xl px-4 pt-12 sm:px-8">
          <div className="flex flex-col gap-8 md:gap-12">
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className="flex flex-col  items-center justify-center  gap-4"
            >
              <div className="flex flex-col gap-4  items-center text-center ltr:md:text-left rtl:md:text-right">
                <Badge
                  variant={"outline"}
                  className="px-3 py-1 h-auto text-sm font-normal self-center"
                >
                  {strategicAchievements.badge}
                </Badge>
                <h2 className="text-3xl md:text-4xl font-semibold">
                  {strategicAchievements.title}
                </h2>
                <p className="text-lg font-normal text-muted-foreground">
                  {strategicAchievements.description}
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="p-6 sm:p-16 rounded-2xl bg-[url('https://images.shadcnspace.com/assets/feature/feature-01-img.webp')] object-cover bg-center h-full w-full bg-cover bg-no-repeat"
              >
                <Card className="flex flex-col  items-start gap-6 sm:gap-12 pt-6 sm:py-10 border-none shadow-none ring-0 rounded-lg">
                  <CardContent className="flex flex-col gap-6 px-6 sm:px-8">
                    {/* <Avatar className="size-12">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        JD
                      </AvatarFallback>
                    </Avatar> */}
                    <h3 className="text-xl sm:text-5xl font-medium">
                      {strategicAchievements.testimonials.text}
                    </h3>
                  </CardContent>
                  <CardFooter className="bg-card border-none w-full px-6 sm:px-8 py-4 sm:py-0 flex flex-col items-start gap-0.5">
                    <p className="text-sm font-medium text-primary">
                      {strategicAchievements.testimonials.speaker}
                    </p>
                    <span className="text-xs font-normal text-muted-foreground uppercase">
                      {strategicAchievements.testimonials.role}
                    </span>
                  </CardFooter>
                </Card>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
                {achievements.map((value) => {
                  // const Icon = value.icon;
                  return (
                    <motion.div
                      key={value.name}
                      initial={{ x: 100, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        ease: [0.21, 0.47, 0.32, 0.98],
                      }}
                    >
                      <Card className="py-8 bg-muted text-muted-foreground ring-0 border-0 h-full relative">
                        <CardContent className="w-full h-full px-8 flex flex-col items-start gap-3  ">
                          {value.icon && <value.icon className="w-full h-full text-primary opacity-20 absolute -bottom-1/4 -inset-e-1/2" />}
                          <h3 className="text-lg font-semibold text-primary">{value.name}</h3>
                          <p className="text-base  font-normal">
                            {value.innovation}  {value.description} {value.outcome}
                          </p>
                        
                           
                        
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;