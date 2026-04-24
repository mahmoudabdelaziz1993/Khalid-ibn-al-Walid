"use client";

import { maltilangualProps } from "@/app/[lang]/page";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";



const Timeline: React.FC<maltilangualProps> = ({ dictionary, lang }) => {
  const { battles, timeLine } = dictionary
  return (
    <div id={timeLine.id} className="py-20 bg-card text-card-foreground">
      {/* Heading */}
      <div className="mb-12  space-y-4 text-center">
        <Badge variant="outline" className="px-3 py-1 text-sm">
          {timeLine.badge}
        </Badge>
        <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
          {timeLine.title}        </h2>
        <p className="text-muted-foreground text-lg max-w-7xl mx-auto">
          {timeLine.description}        </p>
      </div>
      {/* Timeline */}
      <div className="grid place-items-center max-w-4xl mx-auto px-4">
        {battles.map((battle) => (
          <div
            key={battle.name}
            className={cn(
              "relative grid md:grid-cols-[1fr_auto_1fr] grid-cols-[auto_1fr]  scroll-mt-24 justify-end gap-2 w-full",

            )}

          >
            {/* Left side - Year and details */}
            <div className="sticky top-28 flex flex-1 flex-col items-end gap-2 self-start pb-4 max-md:hidden">
              <Badge className="flex size-auto w-auto justify-end rounded-sm text-sm font-medium px-3">
                {lang === "ar"
                  ? `${battle.year}`.replace(/\d+/g, (n: string) => Number(n).toLocaleString("ar-EG"))
                  : battle.year}              </Badge>
              <div className="text-muted-foreground text-right text-sm font-medium">
               { lang === "ar" ? "ضد" : "vs"} {battle.opponent}
              </div>
            </div>

            {/* Center - Timeline dot */}
            <div className="flex flex-col flex-1 items-center">
              <div className="sticky top-28 flex size-6 items-center justify-center max-sm:top-5">
                <span className="bg-primary/20 flex size-4.5 shrink-0 items-center justify-center rounded-full">
                  <span className="bg-primary size-3 rounded-full" />
                </span>
              </div>
              <span className="-mt-2.5 w-px flex-1 border" />
            </div>

            {/* Right side - Battle name and significance */}
            <div className="flex flex-1 flex-col gap-2 pb-11 pl-3 md:pl-6 lg:pl-9">
              <div className="flex flex-col gap-1 md:hidden">
                <Badge className="flex rounded-sm font-medium w-fit">
                  {battle.year}
                </Badge>
                <div className="font-medium text-sm text-muted-foreground">
                  vs {battle.opponent}
                </div>
              </div>
              <h3 className="text-xl font-semibold font-serif">{battle.name}</h3>
              <p className="text-muted-foreground">{battle.significance}</p>
              <Badge
                variant={battle.result === "Victory" ? "default" : "secondary"}
                className="w-fit"
              >
                {battle.result}
              </Badge>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;