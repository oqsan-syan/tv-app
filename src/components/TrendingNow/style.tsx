import { Box, Typography, styled } from '@mui/material';

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 500,
  lineHeight: '38px',
  color: theme.palette.text.primary,
  marginBottom: '15px',
}));

export const CarouselItem = styled(Box)(() => ({
  margin: '0 16px',
}));
