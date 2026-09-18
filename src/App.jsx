import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import ResponsiveAppBar from './components/ResponsiveAppBar.jsx';
import AnaSayfa from './pages/AnaSayfa.jsx';
import Hakkimizda from './pages/Hakkimizda.jsx';
import Katalog from './pages/Katalog.jsx';
import Referanslar from './pages/Referanslar.jsx';
import Iletisim from './pages/Iletisim.jsx';

// 1️⃣ MUI theme ile global font ayarı
const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, Arial, sans-serif', // tüm sayfalarda geçerli
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<AnaSayfa />} />
          <Route path="/hakkimizda" element={<Hakkimizda />} />
          <Route path="/katalog" element={<Katalog />} />
          <Route path="/referanslar" element={<Referanslar />} />
          <Route path="/iletisim" element={<Iletisim />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
