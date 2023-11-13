import { Box, BoxProps, Button, Typography, styled } from '@mui/material';
import { getImagePath } from 'utils/imageUtils';

interface MainVideoContainerProps extends BoxProps {
  url: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MainVideoContainer = styled(Box)<MainVideoContainerProps>(({ theme, url }) => ({
  width: '100%',
  height: '67vh',
  backgroundImage: `url("${getImagePath(url)}")`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
}));

export const Content = styled(Box)(() => ({
  zIndex: 1,
  img: {
    marginBottom: '16px',
  },
}));

export const ButtonsContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  gap: '18px',
  marginTop: '32px',
  button: {
    width: '240px',
    height: '72px',
    borderRadius: '40px',
    p: {
      paddingTop: '8px',
      fontWeight: 'bold',
      fontSize: '32px',
      lineHeight: '30px',
      letterSpacing: '-0.32px',
      textTransform: 'capitalize',
    },
  },
}));

export const PlayButton = styled(Button)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.text.primary,
  color: '#0C0C0C',
  ':hover': {
    backgroundColor: theme.palette.text.primary,
    opacity: '0.7',
  },
  svg: {
    fontSize: '40px',
    marginRight: '12px',
  },
}));

export const MoreInfoButton = styled(Button)(({ theme }) => ({
  background: 'transparent linear-gradient(128deg, #2727F5 0%, #001671 100%)',
  color: theme.palette.text.primary,
  ':hover': {
    backgroundColor: 'transparent linear-gradient(128deg, #2727F5 0%, #001671 100%)',
    opacity: '0.7',
  },
}));

export const Description = styled(Typography)(({ theme }) => ({
  fontWeight: 'medium',
  fontSize: '32px',
  lineHeight: '38px',
  color: theme.palette.text.primary,
}));
