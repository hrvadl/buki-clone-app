import { Tab } from "@/design/tabs";
import { Ad } from "@/models/ad";
import AdAboutTab from "../components/AdAboutTab";
import ContactAdAuthorTab from "../components/ContactAdAuthorTab";

export const tabs = (ad: Ad): Tab[] => [
  {
    name: "About",
    item: () => <AdAboutTab ad={ad} />,
  },
  {
    name: "Contact",
    item: () => <ContactAdAuthorTab author={ad.author} />,
  },
];
