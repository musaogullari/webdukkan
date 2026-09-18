import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = [
  { name: 'Ana Sayfa', path: '/' },
  { name: 'Hakkımızda', path: '/hakkimizda' },
  { name: 'Kataloğ', path: '/katalog' },
  { name: 'Referanslar', path: '/referanslar' },
  { name: 'İletişim', path: '/iletisim' }
];

const NavMenuItems = ({ items, handleClose }) => (
  <>
    {items.map((item) => (
      <MenuItem key={item.name} onClick={handleClose}>
        <Typography
          textAlign="center"
          sx={{ color: '#333333', fontWeight: 'bold' }}
          component={Link}
          to={item.path}
        >
          {item.name}
        </Typography>
      </MenuItem>
    ))}
  </>
);

const NavButtons = ({ items, handleClose }) => (
  <>
    {items.map((item) => (
      <Button
        key={item.name}
        component={Link}
        to={item.path}
        onClick={handleClose}
        sx={{
          my: 2,
          color: '#333333',
          display: 'block',
          textTransform: 'none',
          fontWeight: 'bold',
        }}
      >
        {item.name}
      </Button>
    ))}
  </>
);

const LogoWithText = ({ display }) => (
  <Box
    component={Link}
    to="/"
    sx={{
      display,
      alignItems: 'center',
      textDecoration: 'none',
    }}
  >
    <img src="/logo.jpg" alt="Logo" style={{ height: 50, marginRight: 12 }} />
    <Box sx={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
      <Typography
        variant="h6"
        sx={{
          color: 'red', // MUSAOĞULLARI kırmızı
          fontWeight: 'bold',
          fontFamily: 'monospace',
          letterSpacing: '.2rem',
        }}
      >
        MUSAOĞULLARI
      </Typography>
      <Typography
        variant="subtitle2"
        sx={{
          color: '#FFD700', // Alüminyum Cephe Sistemleri altın
          fontFamily: 'monospace',
          letterSpacing: '.1rem',
        }}
      >
        Alüminyum Cephe Sistemleri
      </Typography>
    </Box>
  </Box>
);

export default function ResponsiveAppBar() {
  const [menuAnchor, setMenuAnchor] = React.useState(null);

  const handleOpenMenu = (event) => setMenuAnchor(event.currentTarget);
  const handleCloseMenu = () => setMenuAnchor(null);

  return (
    <AppBar position="static" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Logo + Text */}
          <LogoWithText display={{ xs: 'none', md: 'flex' }} />

          {/* Mobile Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: '#333333' }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={menuAnchor}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              keepMounted
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              open={Boolean(menuAnchor)}
              onClose={handleCloseMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <NavMenuItems items={pages} handleClose={handleCloseMenu} />
            </Menu>
          </Box>

          {/* Mobile Logo + Text */}
          <LogoWithText display={{ xs: 'flex', md: 'none' }} />

          {/* Desktop Buttons */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}>
            <NavButtons items={pages} handleClose={handleCloseMenu} />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
