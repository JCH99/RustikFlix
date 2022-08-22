import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NewReleasesIcon from "@mui/icons-material/NewReleases";

const Overview = (props) => {
  const { text } = props;
  return (
    <Accordion disableGutters className="rounded-lg overflow-hidden">
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="overview-content"
        id="overview-header"
      >
        <div className="space-x-2 flex items-center">
          <h3 className="font-bold">Overview:</h3>
          <p className="text-sm">
            <span>
              <NewReleasesIcon color="secondary" />
            </span>
            Spoilers!
          </p>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <p>{text}</p>
      </AccordionDetails>
    </Accordion>
  );
};

export default Overview;
