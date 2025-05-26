// ImageGallery.jsx
import { ImageListItem, ImageList } from '@mui/material';

export const ImageGallery = ({ images = [] }) => {
  return (
    <ImageList
      className="box-shadow"
      sx={{ width: '100%', height: 500 }}
      cols={4}
      rowHeight={200}
    >
      {images.map((image) => (
        <ImageListItem key={image} className="box-shadow">
          <img
            className="image-wrapper"
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt="Imagen de la nota"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};
