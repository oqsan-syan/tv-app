import {
  Avatar,
  Box,
  BoxProps,
  Grid,
  GridProps,
  IconButton,
  IconButtonProps,
  Typography,
  TypographyProps,
  styled,
} from '@mui/material';

interface MenuIconButtonProps extends IconButtonProps {
  active?: boolean;
}

interface MenuItemTextProps extends TypographyProps {
  active?: boolean;
}

interface MenuItemContainerProps extends BoxProps {
  active?: boolean;
}

interface MainMenuProps extends GridProps {
  isHovered?: boolean;
}

interface MenuExpandedContainrProps extends BoxProps {
  isHovered?: boolean;
}

export const Container = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  backgroundColor: '#040404',
  height: '100%',
  position: 'relative',
  zIndex: 10,
}));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MainMenu = styled(Grid)<MainMenuProps>(({ theme, isHovered }) => ({
  width: '136px',
  paddingTop: '192px',
  paddingLeft: '34px',
  paddingRight: '20px',
  backgroundColor: 'rgb(4, 4, 4)',
  opacity: isHovered ? 0 : 1,
  transform: isHovered ? 'translateX(-100%)' : 'translateX(0)',
  transition: 'all 0.5s ease-out',
  position: 'absolute',
  top: 0,
  left: 0,
}));

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const MenuIconButton = styled(IconButton)<MenuIconButtonProps>(({ theme, active }) => ({
  width: '82px',
  height: '82px',
  borderRadius: '41px',
  backgroundColor: `${active ? 'rgba(59, 72, 109, 0.56)' : 'inherit'}`,
  img: {
    width: '30px',
  },
  ':hover': {
    backgroundColor: 'rgba(59, 72, 109, 0.8)',
  },
}));

export const ExpandedMenuIconButton = styled(IconButton)<MenuIconButtonProps>(() => ({
  width: '82px',
  height: '72px',
  borderRadius: '41px',
  img: {
    width: '30px',
  },
  ':hover': {
    backgroundColor: 'inherit',
  },
}));

export const MenuItemText = styled(Typography)<MenuItemTextProps>(({ theme, active }) => ({
  font: active ? 'normal normal bold 36px/43px Tajawal' : 'normal normal normal 36px/43px Tajawal',
  color: theme.palette.text.primary,
  marginTop: '8px',
}));

export const UserName = styled(Typography)(({ theme }) => ({
  font: 'normal normal bold 32px/30px Tajawal',
  letterSpacing: '-0.32px',
  color: theme.palette.text.primary,
  marginTop: '8px',
}));

export const MenuItemContainer = styled(Box)<MenuItemContainerProps>(({ theme, active }) => ({
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '20px',
  width: '312px',
  height: '72px',
  background: active ? theme.palette.secondary.main : 'inherit',
  borderRadius: '12px',
  ':hover': {
    background: theme.palette.secondary.main,
    opacity: '0.8',
  },
}));

export const AdditionalMenuContainer = styled(Box)(() => ({
  paddingLeft: '22px',
  h6: {
    cursor: 'pointer',
    ':hover': {
      textDecoration: 'underline',
    },
  },
}));

export const CustomAvatar = styled(Avatar)(() => ({
  width: '82px',
  height: '82px',
}));

export const ProfileContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  columnGap: '20px',
  marginBottom: '50px',
}));

export const MenuExpandedContainer = styled(Box)<MenuExpandedContainrProps>(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ({ theme, isHovered }) => ({
    width: '370px',
    height: '100%',
    padding: '60px 20px 65px 38px',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: 'rgb(4, 4, 4)',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: isHovered ? 1 : 0,
    transform: `translateX(${isHovered ? 0 : '-100%'})`,
    transition: 'all 0.5s ease-out',
  }),
);
