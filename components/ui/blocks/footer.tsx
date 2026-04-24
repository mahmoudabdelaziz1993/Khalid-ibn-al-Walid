import { maltilangualProps } from "@/app/[lang]/page";
import { Separator } from "@/components/ui/separator";


type FooterData = {
  title: string;
  links: {
    title: string;
    href: string;
  }[];
};

const footerSections: FooterData[] = [
  {
    title: "Sitemap",
    links: [
      {
        title: "Contact us",
        href: "#",
      },
      {
        title: "About us",
        href: "#",
      },
      {
        title: "Work",
        href: "#",
      },
      {
        title: "Services",
        href: "#",
      },
      {
        title: "Pricing",
        href: "#",
      },
    ],
  },
];

const Footer: React.FC<Omit<maltilangualProps, "lang">> = ({ dictionary }) => {
  const { footer } = dictionary
  return (
    <footer className="py-3" id={footer.id}>
      <div className="max-w-7xl xl:px-16 lg:px-8 px-4 mx-auto">
        <div className="flex flex-col gap-6 sm:gap-12">
          <Separator orientation="horizontal" />
          <p className="text-sm font-normal text-muted-foreground text-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-100 ease-in-out fill-mode-both">
            {footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
