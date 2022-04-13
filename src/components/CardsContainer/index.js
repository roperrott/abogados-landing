/* eslint-disable react/jsx-props-no-spreading */
import { Grid, Box } from '@mui/material';
import { InfoCard } from '../InfoCard';
import { cardsData } from '../../data/cardsData';

export function CardsContainer() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid justify="center" align="center" container spacing={{ xs: 2, md: 2 }} columns={{ xs: 1, sm: 8, md: 12 }}>
        {
                cardsData.map((data) => (
                  <Grid item xs={2} sm={4} md={4} key={data.title} style={{ display: 'flex', justifyContent: 'center' }}>
                    <InfoCard {...data} />
                  </Grid>
                ))
            }
      </Grid>
    </Box>
  );
}
