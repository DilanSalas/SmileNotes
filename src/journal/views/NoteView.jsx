import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DeleteOutline, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography, useTheme } from '@mui/material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { useForm } from '../../hooks/useForm';
import { ImageGallery } from '../components';
import { setActiveNote, startDeletingNote, startSaveNote, startUploadingFiles } from '../../store/journal';

export const NoteView = () => {
  const dispatch = useDispatch();
  const { active: note, messageSaved, isSaving } = useSelector(state => state.journal);
  const { body, title, date, onInputChange, formState } = useForm(note);
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  // 📆 Fecha amigable en español
  const dateString = useMemo(() => {
    const d = new Date(date);
    const options = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',       
    };

    let formatted = d.toLocaleString('es-CR', options);

    // Capitaliza primera letra, limpia coma y añade "del"
    formatted = formatted
      .replace(',', '')
      .replace(' de ', ' ')
      .replace(/(\d{4})/, 'del $1')
      .replace(' a. m.', ' a. m.')
      .replace(' p. m.', ' p. m.');

    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }, [date]);

  const fileInputRef = useRef();

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire('Nota actualizada', messageSaved, 'success');
    }
  }, [messageSaved]);

const onSaveNote = () => {
  if (!title.trim() || !body.trim()) {
    Swal.fire({
      icon: 'warning',
      title: 'Campos requeridos',
      text: 'Debes ingresar un título y una descripción para guardar la nota.',
    });
    return;
  }

  dispatch(startSaveNote());
};
  const onFileInputChange = ({ target }) => {
    if (target.files.length === 0) return;
    dispatch(startUploadingFiles(target.files));
  };

  const onDelete = () => {
    dispatch(startDeletingNote());
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{
        mb: 1,
        backgroundColor: isDarkMode ? '#0f172a' : '#f9fafb',
        padding: 2,
        borderRadius: 2,
        boxShadow: isDarkMode
          ? '0 0 10px rgba(255,255,255,0.05)'
          : '0 0 10px rgba(0,0,0,0.06)',
      }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <Grid item>
        <Typography
          fontSize={39}
          fontWeight="light"
          color={isDarkMode ? '#ffffff' : '#0f172a'}
        >
          {dateString}
        </Typography>
      </Grid>

      <Grid item>
        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={onFileInputChange}
          style={{ display: 'none' }}
        />

        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
          sx={{ color: isDarkMode ? '#8b5cf6' : '#4c1d95' }}
        >
          <UploadOutlined />
        </IconButton>

        <Button
          disabled={isSaving}
          onClick={onSaveNote}
          color="primary"
          sx={{ padding: 2, color: isDarkMode ? '#fff' : '#4c1d95' }}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{ border: 'none', mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió en el día de hoy?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>

      <Grid container justifyContent="end">
        <Button
          onClick={onDelete}
          sx={{ mt: 2 }}
          color="error"
        >
          <DeleteOutline />
          Borrar
        </Button>
      </Grid>

      {/* Galería de imágenes */}
      <ImageGallery images={note.imageUrls} />
    </Grid>
  );
};
