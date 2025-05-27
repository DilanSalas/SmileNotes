import { Icon, IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal";


const drawerWidth = 240;

export const JournalPage = () => {

  const dispatch = useDispatch(); 

  const onClickNewNote = () => {
      dispatch(startNewNote());
      
  }

  

  const { isCreatingNote, isSaving , active} = useSelector((state) => state.journal);

  return (
      <JournalLayout>



        {
          (!!active)
          ?  <NoteView/>
          :  <NothingSelectedView/>
        }

        <IconButton
        disabled={isCreatingNote}
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
        }}
        >

          <AddOutlined sx={{fontSize: 40}}/>
        </IconButton>
      </JournalLayout> 
    
  )
}
