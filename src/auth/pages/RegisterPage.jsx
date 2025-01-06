import { Grid, TextField, Button, Typography, Alert } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { Link, Link as RouterLink } from "react-router-dom";

import { useForm } from "../../hooks";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

const formData = {
  displayName: "",
  email: "",
  password: "",
};

const formValidations = { 
  email: [(value) => value.includes('@'), 'Debe de incluir el caracter @'],  
  password: [(value) => value.length >= 6, 'La contraseña debe de tener al menos 8 caracteres'],
  displayName: [(value) => value.length >=1, 'El nombre debe de tener al menos 3 caracteres'],
};

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { status, errorMessage } = useSelector((state) => state.auth);

  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const {displayName, email, password, onInputChange, formState, isFormValid,emailValid,
     passwordValid, displayNameValid} = useForm(formData, formValidations);

  const onSubmit = ( event ) => {
    event.preventDefault();
    setFormSubmitted(true);

    if ( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword(formState) );
  };

  return (
    <AuthLayout title="Registro">
   
      <form onSubmit={onSubmit}  className="animate__animated animate__fadeIn animate__faster">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nombre Completo"
              type="text"
              placeholder="Tu nombre completo"
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
              placeholder="Correo@ejemplo.com"
              fullWidth
              name="email"
              value={email}
              onChange={onInputChange}
              error={!!emailValid  && formSubmitted }
              helperText={emailValid}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Contraseña"
              type="password"
              placeholder="Contraseña"
              fullWidth
              name="password"
              value={password}
              onChange={onInputChange}
              error={!!passwordValid  && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>


          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
             
            <Grid item xs={12}
              display={!!errorMessage ? '' : 'none'}
            >
              <Alert severity="error" sx={{ mb: 2 }}>
                {errorMessage}
              </Alert>
            </Grid>

            
            <Grid item xs={12}>
              <Button variant="contained" fullWidth
               type="submit"
               disabled={isCheckingAuthentication}
              >
                Crear cuenta
              </Button>
            </Grid>

            <Grid container direction={"row"} justifyContent="end">
              <Typography sx={{mr:1}}>Ya tengo cuenta</Typography>
              <Link component= {RouterLink} color="inherit" to="/auth/login">
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
