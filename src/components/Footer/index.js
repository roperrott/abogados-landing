import {
  Button, Grid, List, ListItem, ListItemText, Typography,
} from '@mui/material';
import WhatsappTwoToneIcon from '@mui/icons-material/WhatsappTwoTone';
import logo from '../../assets/logo.svg';
import './index.css';
import { itemsListData } from '../../data/itemsListData';

export function Footer() {
  return (
    <Grid container spacing={{ xs: 0, md: 0 }} columns={{ xs: 6, md: 3 }} className="footer-container">
      <Grid item xs={12} md={1} className="footer-item">
        <Typography
          paragraph
          sx={{
            fontSize: 16, fontWeight: 600, color: '#FFFFFF', textAlign: 'left', mb: 0,
          }}
        >
          SOMOS ESPECIALISTAS EN
        </Typography>
        <List>
          {itemsListData.map((list) => (
            <ListItem disablePadding key={list.item}>
              <ListItemText>{list.item}</ListItemText>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={12} md={1} className="footer-item">
        <Typography
          paragraph
          sx={{
            fontSize: 12, fontWeight: 500, color: '#FFFFFF', textAlign: 'left', mb: 0,
          }}
        >
          Centro de la Provincia de Buenos Aires
        </Typography>
        <Typography
          paragraph
          sx={{
            fontSize: 12, fontWeight: 400, color: '#FFFFFF', textAlign: 'left', mb: 3,
          }}
        >
          Tandil, Azul, Olavarría, Mar del Plata, Necochea, Dolores, Balcarce y ciudades aledañas
        </Typography>
        <Button
          href="https://wa.me/5492494025191"
          target="_blank"
          rel="noopener noreferrer"
          variant="outlined"
          size="large"
          endIcon={<WhatsappTwoToneIcon style={{ fontSize: 16 }} />}
        >
          CONTACTANOS

        </Button>
      </Grid>
      <Grid item xs={12} md={1} sx={{ textAlign: 'center' }} className="footer-item">
        <img src={logo} className="footer-img" alt="Logo abogados Web" />
      </Grid>
    </Grid>
  );
}
