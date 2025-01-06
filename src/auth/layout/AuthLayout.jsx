import { Grid, Typography } from "@mui/material";

export const AuthLayout = ({children, title= ''}) => {
  return (
    
    <Grid
  
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{
      minHeight: "100vh",
      minWidth: "100vw",
      backgroundColor: "primary.main",
      padding: 4,
    }}
  >
    <Grid
      item
      xs={12}
      sm={8}
      md={6}
      sx={{
        backgroundColor: "white",
        padding: 3,
        borderRadius: 2,
        boxShadow: 2,
        width: {sm: 450},
      }}
    >
      <Typography variant="h5" sx={{ mb: 3, textAlign: "center" }}>
        {title}
      </Typography>

      
        {children}


      </Grid>
    </Grid>

  )
}
