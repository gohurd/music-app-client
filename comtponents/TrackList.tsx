import React from "react";
import { ITrack } from "../types/track";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TrackItem from "./TrackItem";

interface TrackListProp {
  tracks: ITrack[];
}

const TrackList: React.FC<TrackListProp> = ({ tracks }) => {
  return (
    <Grid container direction="column">
      <Box p={2}>
        {tracks.map((track) => {
          return <TrackItem key={track._id} active={false} track={track} />;
        })}
      </Box>
    </Grid>
  );
};

export default TrackList;
