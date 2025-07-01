import { Icon, IconButton, Typography, CircularProgress } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal";
import { useState } from "react";

export const JournalPage = () => {

  const dispatch = useDispatch(); 
  const [isCreating, setIsCreating] = useState(false);

  const onClickNewNote = async () => {
      if (isCreating || isCreatingNote) return; // Prevenir múltiples clicks
      
      setIsCreating(true);
      try {
        await dispatch(startNewNote());
      } finally {
        setIsCreating(false);
      }
  }

  const { isCreatingNote, isSaving , active} = useSelector((state) => state.journal);

  return (
      <JournalLayout>
        {/* Contenido principal con más espacio para el sidebar */}
        {
          (!!active)
          ?  <NoteView/>
          :  <NothingSelectedView/>
        }

        <IconButton
        disabled={isCreatingNote || isCreating}
        onClick={onClickNewNote}
        size="large"
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ':hover': {
            backgroundColor: "error.main",
            opacity: 0.8,
          },
          position: 'fixed',
          right: 20,
          bottom: 20,
          '&:disabled': {
            backgroundColor: "grey.400",
            color: "grey.600"
          }
        }}
        >
          {(isCreating || isCreatingNote) ? (
            <CircularProgress 
              size={24} 
              sx={{ color: 'white' }}
            />
          ) : (
            <AddOutlined sx={{fontSize: 40}}/>
          )}
        </IconButton>
      </JournalLayout> 
  )
}