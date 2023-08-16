import React, { useState } from "react";
import Quotes from "../components/Quotes";
import TimeNormal from "../components/TimeNormal";
import TimeExpand from "../components/TimeExpand";

const Clock = () => {
  return (
    <div className="main">
      <div className="main-page">
        <Quotes />
        <TimeNormal />
        <TimeExpand />
      </div>
    </div>
  );
};

export default Clock;
