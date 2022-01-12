import logo from '../../assets/logo.svg';
import { useStyles } from './styles';

export function Logo() {
  const classes = useStyles();
  return <img src={logo} className={classes.logo} alt="logo" />;
}
