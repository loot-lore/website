import React from "react";
import { Navbar, Page } from "../../components";
// mui
import { Typography, Container } from "@mui/material";

export const Home: React.FC = () => {
  return (
    <Page title="Loot Lore - Write your adventure">
      <Navbar />
      <Container>
          <Typography>Home</Typography>
      </Container>
    </Page>
  );
};
