import {
  Box, Button, List, ListItem, ListItemText, Typography,
} from '@mui/material';
import WhatsappTwoToneIcon from '@mui/icons-material/WhatsappTwoTone';
import logo from '../../assets/logo.svg';
import './index.css';
import { itemsListData } from '../../data/itemsListData';

export function Footer() {
  return (
    <Box className="footer-container">
      <Box sx={{ width: 232 }}>
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
      </Box>
      <Box sx={{ width: 352 }}>
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
      </Box>
      <Box>
        <img src={logo} className="footer-img" alt="Logo abogados Web" />
      </Box>
    </Box>
  );
}
