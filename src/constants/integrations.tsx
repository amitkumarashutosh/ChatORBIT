import { InstagramIcon, ShieldAlert } from "lucide-react";

type Props = {
  title: string;
  icon: React.ReactNode;
  description: string;
  strategy: "INSTAGRAM" | "CRM";
};

export const INTEGRATION_CARDS: Props[] = [
  {
    title: "Connect Instagram",
    description:
      "Connect your Instagram account to ChatOrbit to get the most out of your community.",
    icon: <InstagramIcon />,
    strategy: "INSTAGRAM",
  },
  {
    title: "Connect Salesforce",
    description:
      "Connect your Salesforce account to ChatOrbit to get the most out of your community.",
    icon: <ShieldAlert />,
    strategy: "CRM",
  },
];
