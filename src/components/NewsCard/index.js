import {
  Card, CardMedia, Typography, CardContent, CardActions,
} from '@mui/material';
import './index.css';

export function NewsCard({
  img, title, subtitle, content,
}) {
  return (
    <Card className="MuiNewsCard" variant="outlined" style={{ backgroundColor: '#F6F6F6' }}>
      <CardMedia
        component="img"
        height="350px"
        width="400px"
        image={img}
        alt="Trabajo informal"
        style={{ borderRadius: 80 }}
      />
      <CardContent sx={{ ml: '40px' }}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6">{subtitle}</Typography>
        <Typography variant="body2" sx={{ textAlign: 'left' }}>{content}</Typography>
      </CardContent>
      <CardActions />
    </Card>
  );
}
