import { Box, Icon } from '@mui/material';
import { InfoCard } from '../InfoCard';
import { cardsData } from '../../data/cardsData';
import './index.css'

export function CardsContainer() {
    return(
        <Box className='cards-container' sx={{ m: '40px 64px'}}>
            {
                cardsData.map( (data, index) => <InfoCard key={index} {...data} />)
            }
        </Box>
    )
}