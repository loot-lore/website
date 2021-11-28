import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import Client from '@snapshot-labs/snapshot.js/src/sign';
// material
import { Grid, Card, Stack, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
// constants
import { SNAPSHOT_HUB } from "../../../constants";

// ----------------------------------------------------------------------

export const CreateEntryForm: React.FC = () => {
  const navigate = useNavigate();
  const snapshotClient = new Client(SNAPSHOT_HUB);


  const NewEntrySchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    summary: Yup.string().required("Summary is required"),
    content: Yup.string().required("Content is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur", resolver: yupResolver(NewEntrySchema) });

  const onSubmit = handleSubmit(async (values) => {
    try {
      console.log("submitting...");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <form noValidate autoComplete="off" onSubmit={onSubmit}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} md={8}>
          <Card sx={{ p: 3 }}>
            <Stack spacing={3}>
              <TextField
                fullWidth
                label="Title"
                {...register("title")}
                error={errors.title?.message}
                helperText={errors.title?.message}
              />

              <TextField
                fullWidth
                multiline
                rows={3}
                label="Summary"
                {...register("summary")}
                error={errors.summary?.message}
                helperText={errors.summary?.message}
              />
              <TextField
                fullWidth
                multiline
                rows={12}
                label="Write something awesome!"
                {...register("content")}
                error={errors.content?.message}
                helperText={errors.content?.message}
              />
            </Stack>
          </Card>
          <Stack direction="row" justifyContent="flex-end" sx={{ mt: 3 }}>
            <LoadingButton
              fullWidth
              color="success"
              type="submit"
              variant="contained"
              size="large"
            >
              Submit
            </LoadingButton>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};
