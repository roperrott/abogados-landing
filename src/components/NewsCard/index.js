/* eslint-disable max-len */
import {
  Card, CardMedia, Typography, CardContent, CardActions, Box,
} from '@mui/material';
import defaultImg from '../../assets/informalWorkImg.jpg';
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
        image={img ?? defaultImg}
        alt="Trabajo informal"
        style={{ borderRadius: 80 }}
      />
      <CardContent className="MuiNewsCardContent" sx={{ ml: '40px' }}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6">{subtitle}</Typography>
        <Box
          component="div"
        >
          <Typography
            variant="body2"
            sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              '-webkit-line-clamp': '6',
              '-webkit-box-orient': 'vertical',
              textAlign: 'left',
            }}
          >
            {content}
          </Typography>
        </Box>
      </CardContent>
      <CardActions />
    </Card>
  );
}
