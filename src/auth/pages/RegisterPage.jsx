import { Grid, TextField, Button, Typography, Alert } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth";
import { Navbar } from "./NavbarLogin"


const formData = { displayName: "", email: "", password: "" };

const formValidations = {
  email: [(value) => value.includes("@"), "Debe de incluir el caracter @"],
  password: [(value) => value.length >= 6, "La contraseña debe tener al menos 6 caracteres"],
  displayName: [(value) => value.length >= 3, "El nombre debe tener al menos 3 caracteres"],
};

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { status, errorMessage } = useSelector((state) => state.auth);
  const isCheckingAuthentication = useMemo(() => status === "checking", [status]);

  const {
    displayName,
    email,
    password,
    onInputChange,
    formState,
    isFormValid,
    emailValid,
    passwordValid,
    displayNameValid,
  } = useForm(formData, formValidations);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword(formState));
  };

  return (
    <>
      
        <Navbar />
      

      <AuthLayout title="Registro">
        <div className="login-page">
          <form onSubmit={onSubmit}>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Nombre Completo"
                  type="text"
                  fullWidth
                  name="displayName"
                  value={displayName}
                  onChange={onInputChange}
                  error={!!displayNameValid && formSubmitted}
                  helperText={displayNameValid}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Correo"
                  type="email"
                  fullWidth
                  name="email"
                  value={email}
                  onChange={onInputChange}
                  error={!!emailValid && formSubmitted}
                  helperText={emailValid}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  label="Contraseña"
                  type="password"
                  fullWidth
                  name="password"
                  value={password}
                  onChange={onInputChange}
                  error={!!passwordValid && formSubmitted}
                  helperText={passwordValid}
                />
              </Grid>

              {errorMessage && (
                <Grid item xs={12}>
                  <Alert severity="error">{errorMessage}</Alert>
                </Grid>
              )}

              <Grid item xs={12}>
                <Button type="submit" fullWidth disabled={isCheckingAuthentication} className="primary-button">
                  Crear cuenta
                </Button>
              </Grid>

              <Grid item xs={12} textAlign="right">
                <Typography variant="text" component="span" sx={{ mr: 1 }}>
                  ¿Ya tienes cuenta?
                </Typography>
                <RouterLink to="/auth/login">
                  <Button variant="text" sx={{ fontSize: "0.9rem" }}>Ingresar</Button>
                </RouterLink>
              </Grid>
            </Grid>
          </form>
        </div>
      </AuthLayout>
   
    </>
  );
};
