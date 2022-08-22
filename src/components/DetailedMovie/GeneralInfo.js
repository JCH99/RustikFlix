import React from "react";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import ExplicitIcon from "@mui/icons-material/Explicit";
import TranslateIcon from "@mui/icons-material/Translate";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const Info = (props) => {
  const { title, children } = props;
  return (
    <div className="flex items-center space-x-2">
      <h3 className="font-bold">{title}:</h3>
      <div className="flex items-center space-x-1 text-sm">{children}</div>
    </div>
  );
};

const GeneralInfo = (props) => {
  const { adult, language, release_date } = props;

  return (
    <div className="flex items-start justify-between flex-col sm:flex-row sm:items-center space-y-4 sm:space-y-0">
      <Info title={"Public"}>
        {adult ? (
          <>
            <ExplicitIcon fontSize="large" color="secondary" />
            <p>Adults</p>
          </>
        ) : (
          <>
            <EscalatorWarningIcon fontSize="large" color="primary" />
            <p>Everyone</p>
          </>
        )}
      </Info>
      <Info title={"Language"}>
        <TranslateIcon fontSize="large" color="primary" />
        <p>"{language}"</p>
      </Info>
      <Info title={"Release"}>
        <CalendarMonthIcon fontSize="large" color="primary" />
        <p>{release_date}</p>
      </Info>
    </div>
  );
};

export default GeneralInfo;
