import { Button, Card, Container, Grid } from "@mui/material";
import React from "react";
import MainLayout from "../../layout/MainLayout";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { ITrack } from "../../types/track";
import TrackList from "../../comtponents/TrackList";

const MyComponent = () => {
  const router = useRouter();

  const tracks: ITrack[] = [
    {
      _id: "Трек 1",
      name: "name 1",
      artist: "singer 1",
      text: "text 1",
      listens: 0,
      audio:
        "http://localhost:5000/audio/c95fc09f-ad5a-4e2e-b011-2e3948c85c61.mp3",
      picture:
        "http://localhost:5000/picture/11c1f249-bf57-4626-94d1-980b853789c4.jpg",
      comments: [],
    },
    {
      _id: "Трек 2",
      name: "name 2",
      artist: "singer 2",
      text: "text 2",
      listens: 0,
      audio:
        "http://localhost:5000/audio/c95fc09f-ad5a-4e2e-b011-2e3948c85c61.mp3",
      picture:
        "http://localhost:5000/picture/11c1f249-bf57-4626-94d1-980b853789c4.jpg",
      comments: [],
    },
  ];

  return (
    <MainLayout>
      <Grid container justifyContent={"center"}>
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent={"space-between"}>
              <h1>Список треков</h1>
              <Button onClick={() => router.push("/tracks/create")}>
                Загрузить
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default MyComponent;
