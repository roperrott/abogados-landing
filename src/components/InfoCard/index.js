import {
  Card, CardHeader, Typography, CardContent, CardActions, Button,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './index.css';

export function InfoCard({
  icon, title, content,
}) {
  return (
    <Card>
      <CardHeader
        title={(
          <div className="card-header">
            <img className="header-icon" src={icon} alt="card-icon" />
            <Typography variant="h5" color="secondary">{title}</Typography>
          </div>
                  )}
      />
      <CardContent sx={{ p: '0px 24px 4px', flexGrow: 1 }}>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
      <CardActions>
        <Button
          href="https://wa.me/5492494025191"
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          color="success"
          size="small"
          startIcon={<WhatsAppIcon style={{ fontSize: 16 }} />}
        >
          CONSULTÁ GRATIS

        </Button>
      </CardActions>
    </Card>

  );
}
