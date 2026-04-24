"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Languages, TextAlignJustify } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { ButtonGroup } from "../button-group";
import { maltilangualProps } from "@/app/[lang]/page";
import { Button } from "../button";
import Link from "next/link";
import { usePathname } from "next/navigation";





const Navbar: React.FC<maltilangualProps> = ({ dictionary, lang }) => {
    const [sticky, setSticky] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { name, navigation } = dictionary
    const handleScroll = useCallback(() => {
        setSticky(window.scrollY >= 50);
    }, []);

    const handleResize = useCallback(() => {
        if (window.innerWidth >= 768) setIsOpen(false);
    }, []);
    const isAr = lang === "ar";
    const pathname = usePathname();
    const toggleLanguagePath = isAr ? pathname.replace("/ar", "/en") : pathname.replace("/en", "/ar");
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, [handleScroll, handleResize]);

    return (

        <header className={cn("fixed inset-0 z-50  bg-transparent text-background dark:text-foreground transition-all duration-500",
            sticky && "sticky top-0  bg-background/60 text-foreground backdrop-blur-lg shadow-2xl shadow-primary/5")}>
            <div className="max-w-7xl mx-auto w-full px-4 py-4 sm:px-6 ">
                <nav
                    className={cn(
                        "w-full flex items-center h-fit justify-between gap-3.5 lg:gap-6 transition-all duration-500",
                    )}
                >
                    <a href="#">
                        <h2 className="sm:text-2xl text-xl font-serif font-bold tracking-tight ">{name}</h2>
                    </a>
                    <div>
                        <NavigationMenu className="max-lg:hidden  p-0.5 " dir={lang === "ar" ? "rtl" : "ltr"}>
                            <NavigationMenuList className="flex gap-0">
                                {navigation.links.map((navItem) => (
                                    <NavigationMenuItem key={navItem.title}>
                                        <NavigationMenuLink
                                            href={navItem.href}
                                            className="px-2 lg:px-4 py-2 text-sm font-medium   hover:text-accent-foreground hover:bg-accent outline outline-transparent hover:outline-border hover:shadow-xs shadow-accent transition tracking-normal"
                                        >
                                            {navItem.title}
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <ButtonGroup>

                        <ButtonGroup >  <ModeToggle /></ButtonGroup>
                        <ButtonGroup >
                            <Button 
                                variant="ghost" 
                                
                                asChild 
                            >
                                <Link href={toggleLanguagePath}>
                                    <Languages  className="hidden md:block" />
                                    <span className="text-xs uppercase font-bold tracking-tighter ">
                                        {isAr ? "English" : "العربية"}
                                    </span>
                                </Link>
                            </Button>
                        </ButtonGroup>
                        <ButtonGroup>  <div className="lg:hidden">
                            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
                                <DropdownMenuTrigger asChild>
                                    <Button size={'icon-lg'} variant="ghost">
                                    <TextAlignJustify size={20} />
                                    <span className="sr-only">Menu</span>
                                    </Button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent
                                    align="end"
                                    className="w-56 mt-2"
                                >
                                    {navigation.links.map((item) => (
                                        <DropdownMenuItem key={item.title}>
                                            <a href={item.href} className="w-full cursor-pointer text-sm font-medium">{item.title}</a>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div></ButtonGroup>
                    </ButtonGroup>



                </nav>
            </div>
        </header>

    );
};

export default Navbar;
