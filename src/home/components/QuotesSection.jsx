import { Container, Grid, Typography } from "@mui/material"
import { QuoteCard } from "./QuotesCard.jsx"
import '../styles/styles.css'

const quotes = [
  {
    quote: "La felicidad no es la ausencia de problemas, es la habilidad de lidiar con ellos.",
    author: "Steve Maraboli",
    gradient: "linear-gradient(to right, #fbbf24, #f59e0b)",
  },
  {
    quote: "Tu mente es un jardín, tus pensamientos son las semillas. Puedes cultivar flores o maleza.",
    author: "Anónimo",
    gradient: "linear-gradient(to right, #f472b6, #c084fc)",
  },
  {
    quote: "Cada día es una nueva oportunidad para cambiar tu vida.",
    author: "Anónimo",
    gradient: "linear-gradient(to right, #60a5fa, #67e8f9)",
  },
  {
    quote: "La paz comienza con una sonrisa.",
    author: "Madre Teresa",
    gradient: "linear-gradient(to right, #a78bfa, #818cf8)",
  },
]

export const QuotesSection = () => (
  <section id="quotes" className="quotes-section">
    <div className="section-background"></div>
    <Container maxWidth="xl">
      <Typography variant="h2" align="center" className="section-title">
        Frases Motivadoras
      </Typography>
      <Grid container spacing={4} className="quotes-grid">
        {quotes.map((q, i) => (
          <Grid item xs={12} md={i % 3 === 0 ? 8 : 4} key={i}>
            <QuoteCard quote={q.quote} author={q.author} gradient={q.gradient} />
          </Grid>
        ))}
      </Grid>
    </Container>
    <div className="blob quote-blob1"></div>
    <div className="blob quote-blob2"></div>
    <div className="blob quote-blob3"></div>
  </section>
)
