import {
  AudioWaveform,
  Contact,
  HomeIcon,
  Rocket,
  Settings,
} from "lucide-react";
import { v4 as uuid } from "uuid";

type FieldProps = {
  label: string;
  id: string;
};

type SideBarProps = {
  icon: React.ReactNode;
} & FieldProps;

export const SIDEBAR_MENU: SideBarProps[] = [
  {
    id: uuid(),
    label: "home",
    icon: <HomeIcon />,
  },
  {
    id: uuid(),
    label: "automations",
    icon: <AudioWaveform />,
  },
  {
    id: uuid(),
    label: "contacts",
    icon: <Contact />,
  },
  {
    id: uuid(),
    label: "integrations",
    icon: <Rocket />,
  },
  {
    id: uuid(),
    label: "settings",
    icon: <Settings />,
  },
];
