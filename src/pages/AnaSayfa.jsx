import React from 'react';
import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';

export default function AnaSayfa() {
  return (
    <Box sx={{ width: '100%' }}>

      {/* Hero Bölümü */}
      <Box
        sx={{
          width: '100%',
          height: { xs: '60vh', md: '100vh' },
          backgroundImage: 'url(/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          px: 2,
        }}
      >
        {/* MUSAOĞULLARI kırmızı */}
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, color: 'red' }}>
          MUSAOĞULLARI
        </Typography>

      {/* Alüminyum Cephe Sistemleri beyaz */}
<Typography
  variant="h5"
  sx={{
    mb: 4,
    color: 'white', // Beyaz renk
    fontWeight: 'bold',
  }}
>
  Alüminyum Cephe Sistemleri
</Typography>

        <Button
          variant="contained"
          sx={{ backgroundColor: '#333333', color: 'white', px: 4, py: 1 }}
          href="/hakkimizda"
        >
          Hakkımızda
        </Button>
      </Box>

      {/* Hizmetler / Ürünler Bölümü */}
      <Box sx={{ py: { xs: 5, md: 10 }, px: { xs: 2, md: 4 }, backgroundColor: '#f9f9f9' }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 6 }}>
          Hizmetlerimiz
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Card sx={{ minHeight: 250 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Alüminyum Cephe Sistemleri
                </Typography>
                <Typography variant="body1">
                  Modern ve dayanıklı cephe çözümleri ile projelerinize estetik ve kalite katıyoruz.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ minHeight: 250 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Profil & Yassı Mamuller
                </Typography>
                <Typography variant="body1">
                  Çeşitli boyut ve alaşımlarda alüminyum profil ve yassı mamuller tedariki.
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card sx={{ minHeight: 250 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                  Endüstriyel Ürünler
                </Typography>
                <Typography variant="body1">
                  Otomotiv ve enerji sektörüne yönelik kaliteli ekstrüzyon ürünleri ve montaj elemanları.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Kısa Hakkımızda Bölümü */}
      <Box sx={{ py: { xs: 5, md: 10 }, px: { xs: 2, md: 4 } }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 4 }}>
          Hakkımızda
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: 900, mx: 'auto', lineHeight: 1.8, textAlign: 'center' }}>
          1980’lerden bu yana alüminyum ve metal sektöründe güvenle hizmet veren Musaogulları Alüminyum Cephe Sistemleri,
          modern tesisleri ve deneyimli ekibi ile projelerinize değer katmaktadır.
        </Typography>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: '#333333', color: 'white', px: 4, py: 1 }}
            href="/hakkimizda"
          >
            Daha Fazla
          </Button>
        </Box>
      </Box>

      {/* İletişim / CTA */}
      <Box
        sx={{
          py: { xs: 5, md: 10 },
          px: { xs: 2, md: 4 },
          backgroundColor: '#333333',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>
          Projeniz İçin Bizimle İletişime Geçin
        </Typography>
        <Button
          variant="contained"
          sx={{ backgroundColor: '#ffffff', color: '#333333', px: 4, py: 1 }}
          href="/iletisim"
        >
          Bize Ulaşın
        </Button>
      </Box>
    </Box>
  );
}
