import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks";

import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";

const formData = {
  email: "",
  password: "",
}

export const LoginPage = () => {

  const {status, errorMessage} = useSelector((state) => state.auth);
 
   const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm(formData);

    const isAuthenticated = useMemo(() => {
      return status === 'checking';
    }, [status]);


    const onSubmit = (e) => {
      e.preventDefault();
      dispatch(startLoginWithEmailPassword({email, password}));
    };

    const onGoogleSignIn = () => {
      console.log("onGoogleSignIn");
      dispatch(startGoogleSignIn());
    };


  return (
        <AuthLayout title="Login">
        <form onSubmit={onSubmit}
         className="animate__animated animate__fadeIn animate__faster"
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Correo"
                type="email"
                placeholder="Correo@ejemplo.com"
                fullWidth
                name="email"
                onChange={onInputChange}
                value={email}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="Contraseña"
                fullWidth
                name="password"
                onChange={onInputChange}
                value={password}
              />
            </Grid>

            <Grid container
            display={!!errorMessage ? '' : 'none'}
            sx={{ mb: 2, mt: 1 }}
            >
              <Grid item xs={12} >
                <Alert severity="error" sx={{ mb: 2 }}>
                  {errorMessage}
                </Alert>
                </Grid>
            </Grid>

            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Button type="submit" variant="contained" fullWidth
                  disabled={isAuthenticated}
                >
                  Login
                </Button>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Button
                  onClick={onGoogleSignIn}
                  variant="contained"
                  fullWidth
                  disabled={isAuthenticated}
                >
                  <GoogleIcon />
                  <Typography sx={{ ml: 1 }}>
                    Google
                  </Typography>
                </Button>
              </Grid>
            </Grid>

            <Grid container justifyContent="center" sx={{ mt: 2 }}>
              <Grid item>
                <RouterLink to="/auth/register">
                  <Button variant="text" sx={{ fontSize: "0.875rem", textAlign: "center" }}>
                    Crear una cuenta
                  </Button>
                </RouterLink>
              </Grid>
            </Grid>
          </Grid>
        </form>

        </AuthLayout>


  );
};
