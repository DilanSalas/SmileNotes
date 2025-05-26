import { Alert, Button, Grid, TextField, Typography } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";

const formData = { email: "", password: "" };

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
    <AuthLayout title="Iniciar Sesión">
      <form onSubmit={onSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField label="Correo" type="email" fullWidth name="email" onChange={onInputChange} value={email} />
          </Grid>

          <Grid item xs={12}>
            <TextField label="Contraseña" type="password" fullWidth name="password" onChange={onInputChange} value={password} />
          </Grid>

          {errorMessage && (
            <Grid item xs={12}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
          )}

          <Grid item xs={12}>
            <Button type="submit" fullWidth disabled={isAuthenticated} className="primary-button">
              Iniciar sesión
            </Button>
          </Grid>

          <Grid item xs={12}>
            <Button onClick={onGoogleSignIn} fullWidth disabled={isAuthenticated} className="secondary-button" startIcon={<GoogleIcon />}>
              Google
            </Button>
          </Grid>

          <Grid item xs={12} textAlign="center">
            <RouterLink to="/auth/register">
              <Button variant="text" sx={{ fontSize: "0.9rem" }}>¿No tienes cuenta? Regístrate</Button>
            </RouterLink>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
