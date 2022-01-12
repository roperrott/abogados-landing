import {
  Card, CardHeader, Typography, CardContent, CardActions, Button,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import './index.css';

export function InfoCard({
  icon, title, content, className,
}) {
  return (
    <Card>
      <CardHeader
        sx={{ flexGrow: 1 }}
        title={(
          <div className="card-header">
            <img className={className} src={icon} alt="className" />
            <Typography variant="h5" color="secondary">{title}</Typography>
          </div>
                  )}
      />
      <CardContent sx={{ p: '0px 20px 8px', flexGrow: 1 }}>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="success" size="small" startIcon={<WhatsAppIcon style={{ fontSize: 25 }} />}>CONSULTÁ GRATIS</Button>
      </CardActions>
    </Card>

  );
}
