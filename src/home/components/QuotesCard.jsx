import { Card, CardContent, Typography, Box } from "@mui/material"
import { Favorite as HeartIcon } from "@mui/icons-material"

export const QuoteCard = ({ quote, author, gradient }) => (
  <Card className="quote-card">
    <div className="card-accent" style={{ background: gradient }}></div>
    <CardContent className="quote-content">
      <Box position="relative">
        <HeartIcon className="heart-icon" />
        <Typography variant="body1" component="blockquote" className="quote-text">
          {quote}
        </Typography>
      </Box>
      <Typography variant="caption" className="quote-author">
        — {author}
      </Typography>
    </CardContent>
  </Card>
)
