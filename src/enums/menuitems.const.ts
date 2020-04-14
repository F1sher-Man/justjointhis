import {
  faNewspaper,
  faLink,
  faBriefcase,
  faBuilding,
  faQuestionCircle,
  faStarOfLife,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type item = {
  description: string;
  icon: IconProp;
  route?: string;
};
type items_enum = {
  [key: string]: item;
};
const ITEMS_MOBILE: items_enum = {
  MATCHMAKING: {
    description: "Matchmaking",
    icon: faLink,
    route: "/matchmaking",
  },
  JOB_OFFERS: {
    description: "Job offers",
    icon: faBriefcase,
    route: "/joboffers",
  },
  BRAND_STORIES: {
    description: "Brand Stories",
    icon: faBuilding,
    route: "/brandstories",
  },
  JUST_GEEK_IT: {
    description: "Just Geek IT",
    icon: faNewspaper,
    route: "/justgeekit",
  },
  LIVE: {
    description: "LIVE",
    icon: faStarOfLife,
    route: "/live",
  },
  HELP: {
    description: "Help",
    icon: faQuestionCircle,
    route: "/help",
  },
};

export default ITEMS_MOBILE;
