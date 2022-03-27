import React from "react";
import { ITrack } from "../types/track";
import { Card } from "@mui/material";
import styles from "../styles/TrackItem.module.scss";
import IconButton from "@mui/material/IconButton";
import { Pause, PlayArrow } from "@mui/icons-material";

interface TrackProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackProps> = ({ track, active }) => {
  return (
    <Card className={styles.track}>
      <IconButton>{active ? <Pause /> : <PlayArrow />}</IconButton>
      <img width={70} height={70} src={track.picture} />
    </Card>
  );
};

export default TrackItem;
