import { INavigateItems } from "@/models/navigationItem";
import { PersonIcon } from "@radix-ui/react-icons";
import {
  Bus,
  Calendar,
  CarTaxiFront,
  Home,
  Luggage,
  Parentheses,
  PersonStandingIcon,
  Settings,
  Map
} from "lucide-react";

export const sideNavItems: INavigateItems[] = [
  {
    key: "#dash",
    path: "/home",
    title: "Tableau de board",
    subItems: [],
    icon: Home,
  },
  {
    key: "#Travelers",
    path: "/travelers",
    title: "Voyageurs",
    subItems: [],
    icon: Parentheses,
  },
  {
    key: "#dash",
    path: "/luggage",
    title: "Gestion des colis",
    subItems: [],
    icon: Luggage,
  },
  {
    key: "#bookings",
    path: "/bookings",
    title: "Reservation",
    subItems: [],
    icon: Calendar,
  },
  {
    key: "#trip",
    path: "/trip",
    title: "Gestion du voyage",
    subItems: [],
    icon: Calendar,
  },
  {
    key: "#employes",
    path: "/employee",
    title: "Employes",
    subItems: [],
    icon: PersonStandingIcon,
  },
  {
    key: "#drivers",
    path: "/drivers",
    title: "Chauffeurs",
    subItems: [],
    icon: CarTaxiFront,
  },
  {
    key: "#vehicles",
    path: "/vehicles",
    title: "Vehicules",
    subItems: [],
    icon: Bus,
  },
  {
    key: "#town",
    path: "/villes",
    title: "Villes",
    subItems: [],
    icon: Map,
  },
  {
    key: "#customers",
    path: "/customers",
    title: "Clientel",
    subItems: [],
    icon: PersonIcon,
  },
  {
    key: "#settings",
    path: "/settings",
    title: "Parametre",
    subItems: [],
    icon: Settings,
  },
];
