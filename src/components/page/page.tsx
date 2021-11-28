import { Helmet } from "react-helmet-async";
import { forwardRef, ReactNode } from "react";
// mui
import { Box, BoxProps } from "@mui/material";
import { styled } from "@mui/material/styles";

// ----------------------------------------------------------------------

const RootStyle = styled(Box)(({ theme }) => ({
  width: "100vw",
  height: "100vh",
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

interface PageProps extends BoxProps {
  children: ReactNode;
  title?: string;
}

export const Page = forwardRef<HTMLDivElement, PageProps>(
  ({ children, title = "", ...other }, ref) => {
    return (
      <RootStyle
        sx={{ backgroundColor: "background.default" }}
        ref={ref}
        {...other}
      >
        <Helmet>
          <title>{title}</title>
        </Helmet>
        {children}
      </RootStyle>
    );
  }
);
