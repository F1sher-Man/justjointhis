import React, { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreativeCommonsSampling } from "@fortawesome/free-brands-svg-icons";
import { faEnvelopeOpenText } from "@fortawesome/free-solid-svg-icons";
import TechStackElement from "./TechStackLevel/tech-stack-level.component";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

import "./offer-item-detailed.component.scss";

export interface OfferDetailedProps {
  goBack(): void;
}

// eslint-disable-next-line no-empty-pattern
const OfferDetailed = ({ goBack }: OfferDetailedProps): ReactElement => {
  const myIcon = faCreativeCommonsSampling;
  const money = "12000 - 13000 PLN net/month";
  const shortDesc = "Senior Javascript developer";
  const address = "Jana Pawła II, 10, Wrocław";

  type stackType = {
    desc: String;
    level: number;
  };
  const techStack: Array<stackType> = [
    { desc: "JS", level: 4 },
    { desc: "HTML", level: 3 },
    { desc: "CSS", level: 2 },
    { desc: "AGILE", level: 1 },
  ];

  return (
    <div className="offer-container">
      <div className="offer-container-item">
        <div className="go-back-btn" onClick={(): void => goBack()}>
          <svg>
            <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
          </svg>
        </div>
        <div className="offer-container-item-top">
          <FontAwesomeIcon className="brand-icon" icon={myIcon} size="8x" />
          <div className="offer-container-item-top-details">
            <span>{money}</span>
            <span>{shortDesc}</span>
            <span>{address}</span>
          </div>
          <a href="#form" className="apply-btn">
            <div className="apply-btn">
              <FontAwesomeIcon icon={faEnvelopeOpenText} size="2x" />
              <span>Aplikuj!</span>
            </div>
          </a>
        </div>
        <div className="offer-container-item-stack">
          <p>Tech Stack</p>
          <hr />
          <div className="techs">
            {techStack.map((tech) => (
              <TechStackElement desc={tech.desc} level={tech.level} />
            ))}
          </div>
        </div>
        <div className="offer-container-item-stack">
          <p>Description</p>
          <hr />
          <p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
              Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
              Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris
              massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti
              sociosqu ad litora torquent per conubia nostra, per inceptos
              himenaeos. Curabitur sodales ligula in libero. Sed dignissim
              lacinia nunc.{" "}
            </p>

            <p>
              Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque
              sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin
              ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis
              vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
              lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel,
              tincidunt sed, euismod in, nibh. Quisque volutpat condimentum
              velit. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.{" "}
            </p>

            <p>
              Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque
              adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi.{" "}
              <i>Pellentesque nibh</i>. Ut fringilla. Suspendisse potenti. Nunc
              feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin
              quam. Etiam ultrices. Suspendisse in justo eu magna luctus
              suscipit. Sed lectus. Integer euismod lacus luctus magna. Quisque
              cursus, metus vitae pharetra auctor, sem massa mattis sem, at
              interdum magna augue eget diam.{" "}
            </p>
          </p>
        </div>
        <div className="offer-container-item-stack">
          <p>Apply for a job</p>
          <hr />
          <form id="form" noValidate autoComplete="off" className="apply-form">
            <TextField
              style={{ backgroundColor: "white" }}
              id="outlined-basic"
              label="Imię i nazwisko"
              variant="outlined"
              className="apply-form-item"
            />
            <TextField
              style={{ backgroundColor: "white" }}
              id="outlined-basic"
              label="E-mail"
              variant="outlined"
              className="apply-form-item"
            />

            <div className="apply-form-item">
              <input
                accept="image/*"
                id="raised-button-file"
                multiple
                type="file"
                style={{ display: "none" }}
              />
              <label htmlFor="raised-button-file">
                <Button
                  variant="contained"
                  color="default"
                  component="span"
                  startIcon={<CloudUploadIcon />}
                  className="apply-form-btn"
                >
                  <b>CV</b>
                </Button>
              </label>
              <span>CV : brak pliku</span>
            </div>
            <div className="apply-form-item">
              <Button
                variant="contained"
                color="primary"
                className="apply-form-btn"
              >
                <b>Aplikuj</b>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OfferDetailed;
