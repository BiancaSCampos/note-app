import React from "react";
import { Checkbox, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./styles.module.css";
import { Note } from "../../types/note";

const NoteCard = ({ title, date, content, category, completed }: Note) => {
  const color = () => {
    if (completed) {
      return "#282E2999";
    } else {
      switch (category) {
        case "home":
          return "#FF9100";
        case "personal":
          return "#66BB6A";
        case "work":
          return "#5C6BC0";
        default: {
          console.log("invalid category");
        }
      }
    }
  };

  return (
    <div className={styles.noteContainer} style={{ backgroundColor: color() }}>
      <div className={styles.containerHeaderNote}>
        <div className={styles.containerTitleNote}>
          <Checkbox
            value={completed}
            sx={{
              color: "white",
              "&.Mui-checked": {
                color: "white",
              },
            }}
          />
          <Typography
            id="modal-modal-title"
            variant="h5"
            component="h2"
            color={"white"}
            style={{ marginLeft: 15 }}
          >
            {title}
          </Typography>
        </div>
        <div className={styles.containerButtons}>
          <IconButton aria-label="delete" style={{ marginRight: 2 }}>
            <EditIcon
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white",
                },
                opacity: 0.8,
              }}
            />
          </IconButton>
          <IconButton aria-label="delete">
            <DeleteIcon
              sx={{
                color: "white",
                "&.Mui-checked": {
                  color: "white",
                },
                opacity: 0.8,
              }}
            />
          </IconButton>
        </div>
      </div>
      <div className={styles.containerContent}>
        <Typography
          variant="body2"
          color={"white"}
          style={{ marginLeft: 15 }}
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "4",
            WebkitBoxOrient: "vertical",
          }}
        >
          {content}
        </Typography>

        <Typography
          id="modal-modal-title"
          variant="body2"
          color={"white"}
          style={{
            opacity: 0.6,
            marginTop: 10,
            marginLeft: 15,
          }}
        >
          {date}
        </Typography>
      </div>
    </div>
  );
};

export default NoteCard;
