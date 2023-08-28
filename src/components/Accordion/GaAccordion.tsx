import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";

type Props = {
  defaultExpanded?: boolean;
  disabled?: boolean;
  expanded?: boolean;
  onChange?: (e: React.SyntheticEvent<Element, Event>) => void;
  summary: React.ReactNode;
  details: React.ReactNode;
  expandIcon?: React.ReactNode;
  bgColor?: string;
  elevation: number;
};

const GaAccordion: React.FC<Props> = ({
  defaultExpanded,
  disabled,
  expanded,
  onChange = () => {},
  summary,
  details,
  expandIcon = "",
  bgColor = "white",
  elevation,
}) => {
  return (
    <Accordion
      disabled={disabled}
      onChange={(e) => onChange(e)}
      expanded={expanded}
      elevation={elevation}
      defaultExpanded={defaultExpanded}
    >
      <AccordionSummary
        expandIcon={expandIcon}
        children={summary}
        sx={{ backgroundColor: bgColor }}
      />
      <AccordionDetails children={details} />
    </Accordion>
  );
};

export default GaAccordion;
