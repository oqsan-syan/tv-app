import { FC } from 'react';

import { Box, Grid, Typography } from '@mui/material';

import { additionalMenuItems, menuItems } from 'constants/menuItems';

import ProfilePic from 'assets/ProfilePic.png';

import {
  AdditionalMenuContainer,
  CustomAvatar,
  ExpandedMenuIconButton,
  MenuExpandedContainer,
  MenuItemContainer,
  MenuItemText,
  ProfileContainer,
  UserName,
} from './style';

interface MenuExpandedProps {
  isHovered: boolean;
}

const MenuExpanded: FC<MenuExpandedProps> = ({ isHovered }) => {
  return (
    <MenuExpandedContainer isHovered={isHovered}>
      <Box>
        <ProfileContainer>
          <CustomAvatar alt='Daniel' src={ProfilePic} />
          <UserName>Daniel</UserName>
        </ProfileContainer>
        <Grid container gap={1}>
          {menuItems.map((item, index) => {
            const props = { active: item.active };
            return (
              <Grid item xs={12} key={index}>
                <MenuItemContainer {...props}>
                  <ExpandedMenuIconButton>
                    <img src={item.icon} />
                  </ExpandedMenuIconButton>
                  <MenuItemText {...props}>{item.title}</MenuItemText>
                </MenuItemContainer>
              </Grid>
            );
          })}
        </Grid>
      </Box>

      <AdditionalMenuContainer>
        {additionalMenuItems.map((el, elIndex) => (
          <Typography variant='h6' key={elIndex}>
            {el}
          </Typography>
        ))}
      </AdditionalMenuContainer>
    </MenuExpandedContainer>
  );
};

export default MenuExpanded;
