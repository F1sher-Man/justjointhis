import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faJs, faHtml5, faCss3, faPython } from '@fortawesome/free-brands-svg-icons';

type item = {
    display: string;
    value: string;
    icon: IconProp;
};
type items_enum = {
    [key: string]: item;
};

export const TECH: items_enum = {
    JS: {
        display: "Javascript",
        value: "js",
        icon: faJs
    },
    HTML: {
        display: "HTML5",
        value: "html",
        icon: faHtml5
    },
    CSS: {
        display: "CSS3",
        value: "css",
        icon: faCss3
    },
    PYTHON: {
        display: "Python",
        value: "py",
        icon: faPython
    }

}