import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export default interface IJobOffer {
  icon: string;
  shortDesc: string;
  companyName: string;
  city: string;
  salary: string;
  techStack: [string, string, string];
}
