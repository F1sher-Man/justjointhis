import {
  faNewspaper,
  faLink,
  faBriefcase,
  faBuilding,
  faQuestionCircle,
  faStarOfLife,
  faUserFriends,
  faMicrophone,
  faRss,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type item = {
  description: string;
  icon: IconProp;
  route?: string;
  isSpinning?: boolean;
};
type items_enum = {
  [key: string]: item;
};
export const ITEMS_MOBILE: items_enum = {
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
    isSpinning: true,
  },
  HELP: {
    description: "Help",
    icon: faQuestionCircle,
    route: "/help",
  },
};
export const ITEMS_DESKTOP: items_enum = {
  EMPLOYER_PANEL: {
    description: "Employer Panel",
    icon: faBriefcase,
    route: "/employerpanel",
  },
  JUST_JOIN_IT: {
    description: "Just Join IT",
    icon: faFacebookF,
    route: "/facebook",
  },
  ABOUT_US: {
    description: "About us",
    icon: faUserFriends,
    route: "/about",
  },
  EVENT: {
    description: "Event",
    icon: faMicrophone,
    route: "/event",
  },
  RSS: {
    description: "RSS",
    icon: faRss,
    route: "/rss",
  },
  TERMS: {
    description: "Terms",
    icon: faFilePdf,
    route: "/terms",
  },
  POLICY: {
    description: "Policy",
    icon: faFilePdf,
    route: "/policy",
  },
};
export default ITEMS_MOBILE;
