import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import * as XLSX from "xlsx";
import ValidationInfo from "./verificationInfo";
import { Box } from "@mui/material";
import "./styles.css";
import { Dialog, Button } from "@mui/material";

//import verifier from "./url";

const fileTypes = ["xls", "xlsx", "docx"];

export default function UploadFile({ open, setOpen }) {
  const [file, setFile] = useState(null);
  const [verificationResults, setVerificationResults] = useState(null);
  const handleChange = (file) => {
    setFile(file);
    const reader = new FileReader();

    reader.onload = (evt) => {
      const bstr = evt.target.result;
      const wb = XLSX.read(bstr, { type: "binary" });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws, {
        header: [
          "Cluster#",
          "T(Degree)",
          "X(mm)",
          "THK(mm)",
          "Min(%)",
          "Max(%)",
          "Ave.(%)",
          "Size(mm*mm)",
          "no. on table",
          "TYPE",
        ],
      });
      setVerificationResults(data);
    };
    reader.readAsBinaryString(file[0]);
  };

  const handleSubmit = () => {
    //your event
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth={"sm"}
    >
      <Box p={6}>
        <h1 style={{ textAlign: "center" }}>Upload user</h1>
        <Box sx={{ display: "grid", justifyContent: "center" }}>
          <FileUploader multiple={true} handleChange={handleChange} name="file" types={fileTypes} />
          {verificationResults ? <ValidationInfo fileName={file[0].name} verificationResults={verificationResults} /> : null}
          <Box sx={{ display: "grid", justifyContent: "center" }}>
            <Button color="primary" variant="outlined" sx={{ marginTop: "2rem", width: "6rem" }} onClick={handleSubmit}>
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Dialog>
  );
}
