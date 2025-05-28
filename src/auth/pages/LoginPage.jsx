import { useState, useMemo } from "react";
import { Alert, Button, Grid, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  checkingAuthentication,
  startGoogleSignIn,
  startLoginWithEmailPassword,
} from "../../store/auth/thunks";
import { Navbar } from "./NavbarLogin";

const formData = {
  email: "",
  password: "",
};

export const LoginPage = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm(formData);
  const isAuthenticated = useMemo(() => status === "checking", [status]);

  const [formError, setFormError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setFormError("Debe ingresar el correo y la contraseña.");
      return;
    }

    setFormError(""); // limpia errores si todo está bien
    dispatch(startLoginWithEmailPassword({ email, password }));
  };

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  };

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <Navbar />
      </div>

      <div style={{ marginTop: "90px" }}>
        <AuthLayout title="Iniciar Sesión">
          <div className="login-page">
            <form onSubmit={onSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Correo"
                    type="email"
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
                    fullWidth
                    name="password"
                    onChange={onInputChange}
                    value={password}
                  />
                </Grid>

                {/* Error personalizado de validación */}
                {formError && (
                  <Grid item xs={12}>
                    <Alert severity="warning">{formError}</Alert>
                  </Grid>
                )}

                {/* Error del backend */}
                {errorMessage && (
                  <Grid item xs={12}>
                    <Alert severity="error">{errorMessage}</Alert>
                  </Grid>
                )}

                <Grid item xs={12}>
                  <Button
                    type="submit"
                    fullWidth
                    disabled={isAuthenticated}
                    className="primary-button"
                  >
                    Iniciar sesión
                  </Button>
                </Grid>

                <Grid item xs={12}>
                  <Button
                    onClick={onGoogleSignIn}
                    fullWidth
                    disabled={isAuthenticated}
                    className="secondary-button"
                    startIcon={<GoogleIcon />}
                  >
                    Google
                  </Button>
                </Grid>

                <Grid item xs={12} textAlign="center">
                  <RouterLink to="/auth/register">
                    <Button variant="text" sx={{ fontSize: "0.9rem" }}>
                      ¿No tienes cuenta? Regístrate
                    </Button>
                  </RouterLink>
                </Grid>
              </Grid>
            </form>
          </div>
        </AuthLayout>
      </div>
    </>
  );
};
