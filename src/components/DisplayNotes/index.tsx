import React from "react";
import { LinearProgress, Typography } from "@mui/material";
import NoteCard from "../NoteCard";
import styles from "./styles.module.css";

const DisplayNotes = ({ progress, note }) => {
  return (
    <>
      <div className={styles.containerProgressBar}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          color={"black"}
          style={{ marginBottom: 15 }}
        >
          You have 0/1 notes completed
        </Typography>
        <LinearProgress variant="determinate" value={progress} />
      </div>
      <NoteCard
        title={note.title}
        category={note.category}
        content={note.content}
        completed={note.completed}
        date={note.date}
      />
    </>
  );
};

export default DisplayNotes;
