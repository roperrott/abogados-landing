/* eslint-disable max-len */
import {
  Card, CardMedia, Typography, CardContent, CardActions, Box,
} from '@mui/material';
import { useEffect, useState, useRef } from 'react';
import defaultImg from '../../assets/informalWorkImg.jpg';
import './index.css';

export function NewsCard({
  img, title, subtitle, content,
}) {
  const textRef = useRef();
  const [textClosed, setTextClose] = useState(true);
  const [lineClamp, setLineClamp] = useState(6);
  const [textHeight, setTextHeight] = useState('290');
  const [overFlowStyle, setOverFlowStyle] = useState('hidden');
  const [overflowActive, setOverflowActive] = useState(false);

  function isOverflowActive(e) {
    return e.offsetHeight < e.scrollHeight || e.offsetWidth < e.scrollWidth;
  }
  useEffect(() => {
    if (isOverflowActive(textRef.current)) {
      setOverflowActive(true);
      return;
    }

    setOverflowActive(false);
  }, [isOverflowActive]);

  const onHandleViewMore = () => {
    if (textClosed) {
      setOverFlowStyle('visible');
      setTextHeight('auto');
      setTextClose(false);
      setLineClamp('auto');
    } else {
      setOverFlowStyle('hidden');
      setLineClamp(6);
      setTextClose(true);
    }
  };

  return (
    <Card className="MuiNewsCard" variant="outlined" style={{ backgroundColor: '#F6F6F6' }}>
      <CardMedia
        component="img"
        height="350px"
        width="400px"
        image={img ?? defaultImg}
        alt="Trabajo informal"
        style={{ borderRadius: 80 }}
        sx={{ marginBottom: 'auto' }}
      />
      <CardContent className="MuiNewsCardContent" sx={{ ml: '40px' }} style={{ height: textHeight }}>
        <Typography variant="h5">{title}</Typography>
        <Typography variant="h6">{subtitle}</Typography>
        <Box
          component="div"
        >
          <Typography
            variant="body2"
            id="content"
            sx={{
              overflow: overFlowStyle,
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: lineClamp,
              WebkitBoxOrient: 'vertical',
              textAlign: 'justify',
            }}
            ref={textRef}
          >
            {content}
          </Typography>
          {textClosed && !overflowActive ? null : (
            <Typography className="view-more" onClick={onHandleViewMore} variant="h6" textAlign="right">{!textClosed ? 'Ver menos' : 'Ver más'}</Typography>
          )}
        </Box>
      </CardContent>
      <CardActions />
    </Card>
  );
}
