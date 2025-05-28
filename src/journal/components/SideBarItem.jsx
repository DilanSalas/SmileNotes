import { ListItem, ListItemText, ListItemButton, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setActiveNote } from '../../store/journal';

export const SideBarItem = ({ title = '', body, id, date }) => {
  const dispatch = useDispatch();

  const onClickNote = () => {
    dispatch(setActiveNote({ title, body, id, date }));
  };

  // Formato bonito de fecha
  const formattedDate = new Date(date).toLocaleDateString('es-CR', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <ListItem disablePadding onClick={onClickNote}>
      <ListItemButton sx={{ display: 'block', textAlign: 'left' }}>
        <ListItemText
          primary={
            <Typography fontWeight="bold" fontFamily="Quicksand" fontSize="1rem" noWrap>
              {title}
            </Typography>
          }
          secondary={
            <>
              <Typography fontSize="0.9rem" fontFamily="Nunito" noWrap>
                {body}
              </Typography>
              <Typography
                fontSize="0.75rem"
                fontFamily="Nunito"
                color="var(--text-secondary)"
                mt={0.5}
              >
                {formattedDate}
              </Typography>
            </>
          }
        />
      </ListItemButton>
    </ListItem>
  );
};
