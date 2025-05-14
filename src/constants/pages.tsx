import {
  AudioWaveform,
  Contact,
  HomeIcon,
  Rocket,
  Settings,
} from "lucide-react";

export const PAGE_BREAD_CRUMBS: string[] = [
  "contacts",
  "automations",
  "integrations",
  "settings",
];

type Props = {
  [page in string]: React.ReactNode;
};

export const PAGE_ICON: Props = {
  AUTOMATIONS: <AudioWaveform />,
  CONTACTS: <Contact />,
  INTEGRATIONS: <Rocket />,
  SETTINGS: <Settings />,
  HOME: <HomeIcon />,
};

export const PLANS = [
  {
    name: "Free Plan",
    description: "Perfect for getting started",
    price: "₹0",
    features: [
      "Boost engagement with target response",
      "Automate comment replies to enhance engagement",
      "Turn followers into customers with target messaging",
    ],
    cta: "Get started",
  },
  {
    name: "Smart AI Plan",
    description: "For growing businesses and creators",
    price: "₹999",
    features: [
      "All Free Plan features",
      "Advanced audience targeting",
      "AI-powered content suggestions",
      "Bulk messaging and scheduling",
      "Priority customer support",
    ],
    cta: "Upgrade now",
  },
];
