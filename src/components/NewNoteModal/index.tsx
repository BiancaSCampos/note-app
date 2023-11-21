import {
  Box,
  Button,
  MenuItem,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import React from "react";
import styles from "./styles.module.css";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const currencies = [
  {
    value: "Home",
  },
  {
    value: "Work",
  },
  {
    value: "Personal",
  },
];

const NewNoteModal = ({ open, handleClose }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} borderRadius={1}>
          <Typography
            id="modal-modal-title"
            variant="h4"
            component="h2"
            color={grey[600]}
          >
            Add note
          </Typography>

          <div className={styles.boxTitleAndCategory}>
            <TextField
              id="filled-basic"
              label="Add title"
              variant="filled"
              style={{ width: "80%", marginRight: 30 }}
            />
            <TextField
              id="filled-select-currency"
              select
              label="Select category"
              defaultValue="Work"
              variant="filled"
              style={{ width: "20%" }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <TextField
            id="filled-multiline-static"
            label="Add description"
            multiline
            rows={10}
            defaultValue=""
            variant="filled"
            style={{ width: "100%" }}
          />

          <div className={styles.buttonContainer}>
            <Button variant="text" style={{ marginRight: 20 }}>
              Cancel
            </Button>
            <Button variant="text">Add</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default NewNoteModal;
