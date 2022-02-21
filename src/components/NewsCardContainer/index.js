/* eslint-disable react/jsx-props-no-spreading */
import { Box } from '@mui/material';
import { newsCardData } from '../../data/newsCardData';
import { NewsCard } from '../NewsCard';

export function NewsCardContainer() {
  return (
    <Box sx={{
      width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center',
    }}
    >
      {
            newsCardData.map((data) => <NewsCard key={data.title} {...data} />)
            }
    </Box>
  );
}
