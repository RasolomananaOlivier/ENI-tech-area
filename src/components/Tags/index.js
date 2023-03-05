import React, { useState } from "react";
import { TagsInput } from "react-tag-input-component";
import {
  Dialog,
  DialogContent,
  Typography,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import axios from "axios";
import { allTagsData } from "../../api/urls";

export const AppTagsInput = ({ array, setArray }) => {
  return (
    <TagsInput
      value={array}
      onChange={setArray}
      name="tag"
      placeHolder="write your tag"
    />
  );
};

export default function Tags({ TagsOpen, setTagsOpen }) {
  const [array, setArray] = useState(null);
  const [currentDisable, setCurrentDisable] = useState(true);

  React.useEffect(() => {
    if (array === null) {
      setCurrentDisable(true);
    } else {
      setCurrentDisable(false);
    }
  }, [array]);

  const handleSubmit = (e) => {
    axios
      .post(allTagsData, {
        Tags: array,
      })
      .then((res) => {
        if (res) {
          setTagsOpen(false);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Dialog
        open={TagsOpen}
        keepMounted
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>
          <Typography variant="h5">Write your tag</Typography>
          <Typography variant="body2" sx={{ color: "#b7afaf" }}>
            please write your competences
          </Typography>
        </DialogTitle>
        <DialogContent sx={{ width: "400px" }}>
          <AppTagsInput array={array} setArray={setArray} />
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleSubmit}
            disabled={currentDisable}
            fullWidth
            variant="contained"
            sx={{ height: "37px", fontSize: "1.1rem", fontWeight: "600" }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
