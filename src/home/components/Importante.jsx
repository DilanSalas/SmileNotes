import { Box, Grid, Typography, Paper } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

const InfoCard = ({ icon, title, description }) => (
  <Paper
    elevation={3}
    sx={{
      p: 3,
      borderRadius: 5,
      backgroundColor: "var(--card-bg)",
      color: "var(--text-primary)",
      transition: "transform 0.3s ease",
      '&:hover': {
        transform: "translateY(-5px)",
        backgroundColor: "var(--card-hover-bg)",
      }
    }}
  >
    <Box display="flex" alignItems="center" mb={2}>
      <Box mr={2} fontSize="2rem">
        {icon}
      </Box>
      <Typography variant="h5" fontWeight={700} fontFamily="Quicksand">
        {title}
      </Typography>
    </Box>
    <Typography fontSize="1.15rem" fontFamily="Nunito">
      {description}
    </Typography>
  </Paper>
);

const ProjectOverview = () => (
  <Box
    className="reflection-section"
    sx={{
      py: 12,
      px: 4,
      mt: 10,
      position: "relative",
      borderRadius: "2rem",
      overflow: "hidden",
      background: "linear-gradient(to right, rgba(254, 240, 138, 0.1), rgba(249, 168, 212, 0.08), rgba(191, 219, 254, 0.1))",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
      backdropFilter: "blur(10px)"
    }}
  >
    <Box className="reflection-blob1 blob"></Box>
    <Box className="reflection-blob2 blob"></Box>

    <Box
      sx={{
        maxWidth: "1000px",
        margin: "0 auto",
        px: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: 4
      }}
    >
      <Typography
        variant="h3"
        fontFamily="Quicksand"
        fontWeight={700}
        sx={{
          background: "linear-gradient(to right, #fbbf24, #ec4899)",
          WebkitBackgroundClip: "text",
          color: "transparent"
        }}
      >
        ¿Qué es Smile Notes?
      </Typography>

      <Typography
        fontSize="1.25rem"
        fontFamily="Nunito"
        color="var(--text-primary)"
        lineHeight={1.8}
        sx={{
          textAlign: "justify",
          backgroundColor: "rgba(255, 255, 255, 0.04)",
          padding: "2rem",
          borderRadius: "1.5rem",
          border: "1px solid var(--border-color)",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
        }}
      >
        Smile Notes es una plataforma digital diseñada para mejorar el bienestar emocional de las personas a través del registro de momentos positivos y reflexiones diarias. Nació como respuesta a la creciente necesidad de herramientas accesibles de autocuidado mental en Puntarenas, donde el estrés, la ansiedad y la depresión afectan a gran parte de la población.
        <br /><br />
        A diferencia de redes sociales, Smile Notes es un espacio privado, seguro y libre de juicios. Permite a los usuarios escribir notas personales acompañadas de imágenes, con el fin de reforzar su autoestima, fomentar la gratitud y construir una narrativa positiva sobre sus vidas.
        <br /><br />
        Su diseño está pensado para ser utilizado por cualquier persona, sin importar su edad o experiencia digital. Es gratuita, accesible desde cualquier dispositivo y no requiere instalaciones complejas.
        <br /><br />
        Esta herramienta también promueve la inclusión digital, la salud mental comunitaria y puede ser utilizada en programas educativos, laborales y sociales como estrategia de acompañamiento emocional.
      </Typography>
    </Box>
  </Box>
);

export default function SmileNotesInfoSection() {
  return (
    <Box>
      <Box sx={{ py: 10, px: 4 }}>
        <Typography
          variant="h3"
          fontFamily="Quicksand"
          fontWeight={700}
          textAlign="center"
          mb={6}
          sx={{
            background: "linear-gradient(to right, #8b5cf6, #ec4899)",
            WebkitBackgroundClip: "text",
            color: "transparent"
          }}
        >
          ¿Cómo Smile Notes puede ayudarte?
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={6} lg={4}>
            <InfoCard
              icon={<EmojiEmotionsIcon color="secondary" />}
              title="Bienestar Emocional Diario"
              description="Registra momentos positivos y reflexiona sobre ellos para fomentar gratitud y mejorar tu estado de ánimo."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <InfoCard
              icon={<SelfImprovementIcon color="primary" />}
              title="Autocuidado Accesible"
              description="Accede a tu espacio personal desde cualquier dispositivo, sin importar tu experiencia tecnológica."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <InfoCard
              icon={<FavoriteIcon sx={{ color: "#f43f5e" }} />}
              title="Privacidad y Seguridad"
              description="Todas tus notas están protegidas, pensadas para un uso íntimo y personal sin juicios ni exposición."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <InfoCard
              icon={<GroupsIcon sx={{ color: "#22c55e" }} />}
              title="Inclusión y Comunidad"
              description="Smile Notes beneficia a jóvenes, adultos mayores, trabajadores, desempleados y estudiantes que requieren contención emocional."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <InfoCard
              icon={<SchoolIcon sx={{ color: "#f97316" }} />}
              title="Uso Educativo y Profesional"
              description="Puede implementarse en programas educativos, laborales o comunitarios como recurso de apoyo emocional."
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <InfoCard
              icon={<TrendingUpIcon sx={{ color: "#3b82f6" }} />}
              title="Sostenibilidad y Escalabilidad"
              description="Diseñada para crecer y adaptarse a otras comunidades sin altos costos ni barreras tecnológicas."
            />
          </Grid>
        </Grid>
      </Box>

      <ProjectOverview />
    </Box>
  );
}