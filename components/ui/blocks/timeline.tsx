"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

export interface Battle {
  year: string;
  name: string;
  opponent: string;
  result: string;
  significance: string;
}

const battles: Battle[] = [
  {
    year: "625 CE",
    name: "Battle of Uhud",
    opponent: "Muslims (pre-conversion)",
    result: "Victory",
    significance: "Only defeat ever inflicted on Prophet Muhammad",
  },
  {
    year: "629 CE",
    name: "Battle of Mu'tah",
    opponent: "Byzantine Empire",
    result: "Tactical Withdrawal",
    significance: "Earned title 'Sword of Allah' — broke 9 swords",
  },
  {
    year: "633 CE",
    name: "Battle of Yamama",
    opponent: "Musaylima's Hanifa",
    result: "Decisive Victory",
    significance: "Killed rival prophet Musaylima",
  },
  {
    year: "634 CE",
    name: "Battle of Ajnadayn",
    opponent: "Byzantine Empire",
    result: "Decisive Victory",
    significance: "First Byzantine field army destroyed",
  },
  {
    year: "636 CE",
    name: "Battle of Yarmouk",
    opponent: "Byzantine Empire",
    result: "Decisive Victory",
    significance: "50,000+ casualties — ended Roman rule in Syria",
  },
];

const Timeline = () => {
  return (
    <div id="timeline" className="py-20 bg-background">
      <div className="mb-12 space-y-4 text-center">
        <Badge variant="outline" className="px-3 py-1 text-sm">
          Campaign Timeline
        </Badge>
        <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight">
          Key Battles of Khalid ibn al-Walid
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          100+ battles fought across Arabia, Iraq, and Syria — never defeated
        </p>
      </div>

      <div className="grid place-items-center max-w-4xl mx-auto px-4">
        {battles.map((battle, index) => (
          <div
            key={battle.name}
            className={cn(
              "relative grid grid-cols-[1fr_auto_1fr] scroll-mt-24 justify-end gap-2 w-full",
              index % 2 === 0 ? "rtl" : "ltr"
            )}
            dir={index % 2 === 0 ? "rtl" : "ltr"}
          >
            {/* Left side - Year and details */}
            <div className="sticky top-28 flex flex-1 flex-col items-end gap-2 self-start pb-4 max-md:hidden">
              <Badge className="flex size-auto w-auto justify-end rounded-sm text-sm font-medium px-3">
                {battle.year}
              </Badge>
              <div className="text-muted-foreground text-right text-sm font-medium">
                vs {battle.opponent}
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