import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Hakkimizda() {
  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        backgroundImage: 'url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        py: { xs: 5, md: 10 },
        px: { xs: 2, md: 4 },
      }}
    >
      <Box
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.85)',
          padding: { xs: 3, md: 6 },
          borderRadius: 2,
          width: '100%',
          maxWidth: '1200px',
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontWeight: 'bold',
            mb: 4,
            color: '#222',
          }}
        >
          Hakkımızda
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: '#444' }}>
          <strong>Musaoğulları Alüminyum</strong> olarak 2005 yılında alüminyum
          sektörüne adım attık. Kurulduğumuz günden bu yana kaliteli işçilik,
          güvenilir hizmet ve müşteri memnuniyetini ön planda tutarak
          çalışmalarımızı sürdürüyoruz.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: '#444' }}>
          Sektörde edindiğimiz yıllara dayanan tecrübe ve bilgi birikimimizle;
          <strong> alüminyum cephe kaplama, alüminyum doğrama, kompozit kaplama
          ve korkuluk sistemleri</strong> başta olmak üzere birçok farklı
          alanda hizmet sunuyoruz.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: '#444' }}>
          Her projeyi kendi ihtiyaçları doğrultusunda değerlendiriyor; estetik,
          dayanıklılık ve işlevselliği bir arada sunan çözümler üretmeye
          özen gösteriyoruz. Kullanılan malzemenin kalitesinden uygulama
          aşamasındaki işçiliğe kadar her detayı titizlikle ele alıyoruz.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: '#444' }}>
          Müşterilerimizin beklentilerini doğru anlamak ve projeleri zamanında,
          kaliteli ve eksiksiz şekilde tamamlamak çalışma anlayışımızın temelini
          oluşturmaktadır. Küçük veya büyük fark etmeksizin her projeye aynı
          özen ve sorumluluk bilinciyle yaklaşıyoruz.
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: '#444' }}>
          Sektördeki gelişmeleri ve yeni uygulamaları yakından takip ederek
          kendimizi sürekli geliştiriyor, modern yapıların ihtiyaçlarına uygun
          çözümler sunmaya devam ediyoruz.
        </Typography>

        <Typography
          variant="h5"
          sx={{
            fontWeight: 'bold',
            mt: 4,
            mb: 2,
            color: '#222',
          }}
        >
          Kalite ve Güven
        </Typography>

        <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8, color: '#444' }}>
          Musaoğulları Alüminyum olarak başarımızın temelinde tecrübemiz,
          kaliteli işçiliğimiz ve müşterilerimizle kurduğumuz güvene dayalı
          ilişkiler bulunmaktadır. Amacımız yalnızca bir işi tamamlamak değil,
          uzun yıllar güvenle kullanılabilecek kaliteli ve dayanıklı
          uygulamalar ortaya koymaktır.
        </Typography>

        <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#444' }}>
          <strong>2005'ten bugüne edindiğimiz tecrübe ile</strong>, alüminyum
          sektöründe güvenilir bir çözüm ortağı olmak için çalışıyor;
          kaliteli hizmet anlayışımızdan ödün vermeden geleceğe sağlam
          adımlarla ilerliyoruz.
        </Typography>
      </Box>
    </Box>
  );
}