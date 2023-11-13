import { Box, styled } from '@mui/material';

export const CustomContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  overflow: 'hidden',
  width: '100vw',
  height: '100vh',
  background: `${theme.palette.primary.main} 0% 0% no-repeat padding-box`,
  opacity: 1,
}));
