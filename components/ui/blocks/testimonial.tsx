"use client";

import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { motion, useInView } from "motion/react";
import { maltilangualProps } from "@/app/[lang]/page";
import { Quote } from "../icons/khalid-icons";
import { cn } from "@/lib/utils";

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface Testimonial01Props {
  badge?: string;
  title?: string;
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    quote: "Shadcn Space replaced messy UI kits and half-baked templates. Today our dashboards look premium, scale beautifully, and our team focuses on real features instead of design debt.",
    author: "Walter Dutcher",
    role: "CEO",
    image: "https://images.shadcnspace.com/assets/profiles/testimonial-user.png",
  },
  {
    quote: "Shadcn Space replaced messy UI kits and half-baked templates. Today our dashboards look premium, scale beautifully, and our team focuses on real features instead of design debt.",
    author: "Walter Dutcher",
    role: "CEO",
    image: "https://images.shadcnspace.com/assets/profiles/testimonial-user-2.png",
  },
];

export default function Testimonial01({

  dictionary,
  lang
}:  maltilangualProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

const { testimonials: dictionaryTestimonials } = dictionary
  return (
    <section ref={sectionRef} id={dictionaryTestimonials.id}>
      <div className="max-w-7xl  mx-auto sm:px-16 px-4  relative">
        <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }} className="grid place-items-center gap-4 my-12 ">
          <Badge variant="outline">
           {dictionaryTestimonials.badge}
          </Badge>
          <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
{dictionaryTestimonials.title}            </h2>
            
        </motion.div>
        <div className="">
        
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
            className="pt-12 pb-8"
          >
            <Carousel opts={{ loop: true }}  >
              <CarouselContent className={cn("-ml-4 flex select-none", lang === "ar" && "flex-row-reverse")}>
                {dictionaryTestimonials.items.map((testimonial, index) => (
                  <CarouselItem key={testimonial.id}>
                    <div className="grid grid-cols-12 gap-6 items-center">
                      <div className=" col-span-12 flex sm:flex-row flex-col sm:gap-10 gap-6 lg:pe-12 p-4">
                        <div className="shrink-0 flex items-start">
                         <Quote className="w-30 h-30 text-primary" />
                        </div>
                        <div className="flex flex-col gap-12">
                          <p className="xl:text-7xl sm:text-5xl text-3xl text-muted-foreground">
                            {testimonial.quote}
                          </p>
                          <div>
                            <p className="text-base font-medium ">
                              {testimonial.author}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>

                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious variant={"outline"} className="hidden md:flex "  />
              <CarouselNext variant={"outline"} className="hidden md:flex " />
            </Carousel>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
