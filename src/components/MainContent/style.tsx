import { Box, BoxProps, styled } from '@mui/material';

interface WrapperProps extends BoxProps {
  isHovered: boolean;
}

export const Container = styled(Box)(() => ({
  width: '100%',
  paddingLeft: '20px',
  position: 'relative',
  marginLeft: '156px',
}));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const Wrapper = styled(Box)<WrapperProps>(({ theme, isHovered }) => ({
  content: '""',
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100vh',
  background: 'rgb(4, 4, 4)',
  opacity: isHovered ? 0.8 : 0,
  zIndex: 2,
  transition: 'all 0.5s ease-in',
}));
