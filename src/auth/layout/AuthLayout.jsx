import { Box, Grid, Typography } from "@mui/material";

export const AuthLayout = ({ children, title = "" }) => {
  return (

    <Box className="practice-section" sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Box className="quote-card" sx={{ width: { xs: "90%", sm: 400 }, p: 4 }}>
        <Typography className="logo-text" variant="h5" align="center" sx={{ mb: 3 }}>
          {title}
        </Typography>
        {children}
      </Box>
    </Box>
  );
};
