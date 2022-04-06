/* eslint-disable react/jsx-props-no-spreading */
import { Box } from '@mui/material';
import { InfoCard } from '../InfoCard';
import { cardsData } from '../../data/cardsData';
import './index.css';

export function CardsContainer() {
  return (
    <Box className="cards-container" sx={{ m: '28px 120px' }}>
      {
                cardsData.map((data) => <InfoCard key={data.title} {...data} />)
            }
    </Box>
  );
}
