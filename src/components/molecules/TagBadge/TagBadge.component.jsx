import { Chip } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import "./TagBadge.styles.scss";

const TagBadge = ({ tag_name, size, display, link, href }) => {
  console.log(tag_name);
  return (
    <Chip
      label={tag_name}
      component="a"
      href={`/tags/${tag_name}`}
      clickable
      color="success"
      // variant="outlined"
    />
  );
};

export default TagBadge;
