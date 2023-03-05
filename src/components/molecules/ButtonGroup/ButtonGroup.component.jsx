import { Box } from "@mui/material";
import React, { Fragment } from "react";
import BaseButton from "../BaseButton/BaseButton.component";

const ButtonGroup = ({ buttons, selected, setSelected }) => {
  return (
    <Fragment>
      <div className="grid--cell">
        <Box pr={2.5}>
          {buttons.map((button, index) => (
            <BaseButton
              key={index}
              text={button}
              selected={selected}
              onClick={() => setSelected(button)}
            />
          ))}
        </Box>
      </div>
    </Fragment>
  );
};

export default ButtonGroup;
