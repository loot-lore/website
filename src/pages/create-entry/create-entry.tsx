import React from "react";
import { Navbar, Page, CreateEntryForm } from "../../components";
// mui
import { Typography, Container } from "@mui/material";

export const CreateEntry: React.FC = () => {
  return (
    <Page title="Loot Lore | Create entry">
      <Navbar />
      <Container>
        <Typography variant="h4" sx={{ color: "text.primary" }}>
          Create new entry
        </Typography>
        <CreateEntryForm />
      </Container>
    </Page>
  );
};
