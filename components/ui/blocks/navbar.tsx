"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ArrowUpRight, TextAlignJustify } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { ButtonGroup } from "../button-group";

export type NavigationSection = {
    title: string;
    href: string;
};

const navigationData: NavigationSection[] = [
    {
        title: "About us",
        href: "#",
    },
    {
        title: "Services",
        href: "#",
    },
    {
        title: "Work",
        href: "#",
    },
    {
        title: "Team",
        href: "#",
    },
    {
        title: "Pricing",
        href: "#",
    },
    {
        title: "Awards",
        href: "#",
    },
];

const CollaborateButton = ({ className, ...props }: React.ComponentProps<typeof Button> & { className?: string }) => (
    <Button {...props} className={cn("relative text-sm font-medium h-10 p-1 ps-4 pe-12 group transition-all duration-500 hover:ps-12 hover:pe-4 w-fit overflow-hidden hover:bg-primary/80", className)}>
        <span className="relative z-10 transition-all duration-500 hover:cursor-pointer">
            Let&apos;s Collaborate
        </span>
        <div className="absolute right-1 w-8 h-8 bg-background text-foreground flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-36px)] ">
            <ArrowUpRight size={16} className={cn("transition-all duration-500 group-hover:rotate-45")} />
        </div>
    </Button>
);

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const handleScroll = useCallback(() => {
        setSticky(window.scrollY >= 50);
    }, []);

    const handleResize = useCallback(() => {
        if (window.innerWidth >= 768) setIsOpen(false);
    }, []);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [handleScroll, handleResize]);

    return (
        
            <header className={cn(  " bg-transparent transition-all duration-500",
            sticky && "sticky top-0 z-50 bg-background/60 backdrop-blur-lg shadow-2xl shadow-primary/5")}>
                <div className="max-w-7xl mx-auto w-full px-4 py-4 sm:px-6 ">
                    <nav
                        className={cn(
                            "w-full flex items-center h-fit justify-between gap-3.5 lg:gap-6 transition-all duration-500",
                        )}
                    >
                        <a href="#">
                            Khalid ibn Alwalid
                        </a>
                        <div>
                            <NavigationMenu className="max-lg:hidden  p-0.5 ">
                                <NavigationMenuList className="flex gap-0">
                                    {navigationData.map((navItem) => (
                                        <NavigationMenuItem key={navItem.title}>
                                            <NavigationMenuLink
                                                href={navItem.href}
                                                className="px-2 lg:px-4 py-2 text-sm font-medium  text-muted-foreground hover:text-accent-foreground hover:bg-accent outline outline-transparent hover:outline-border hover:shadow-xs shadow-accent transition tracking-normal"
                                            >
                                                {navItem.title}
                                            </NavigationMenuLink>
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>
                        <ButtonGroup>
                            <ButtonGroup className="hidden lg:flex"><CollaborateButton /></ButtonGroup>
                            <ButtonGroup className="hidden lg:flex">  <ModeToggle  /></ButtonGroup>

                        </ButtonGroup>

                       
                        <div className="lg:hidden">
                            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                                <DropdownMenuTrigger className="rounded-full bg-background border border-border p-2 outline-none flex items-center justify-center cursor-pointer transition-colors">
                                    <TextAlignJustify size={20} />
                                    <span className="sr-only">Menu</span>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent
                                    align="end"
                                    className="w-56 mt-2"
                                >
                                    {navigationData.map((item) => (
                                        <DropdownMenuItem key={item.title}>
                                            <a href={item.href} className="w-full cursor-pointer text-sm font-medium">{item.title}</a>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </nav>
                </div>
            </header>
        
    );
};

export default Navbar;
