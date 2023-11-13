import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@mui/material';

import { menuItems } from 'constants/menuItems';
import { selectIsHovered, toggleMenu } from 'store/slices/moviesSlice';

import MenuExpanded from './MenueExpanded';

import { Container, MainMenu, MenuIconButton } from './style';

const Menu: FC = () => {
  const dispatch = useDispatch();
  const isHovered = useSelector(selectIsHovered);

  const handleHover = () => {
    dispatch(toggleMenu());
  };

  return (
    <Container onMouseEnter={handleHover} onMouseLeave={handleHover}>
      <MenuExpanded isHovered={isHovered} />
      <MainMenu container isHovered={isHovered}>
        {menuItems.map((item, index) => {
          const props = { active: item.active };
          return (
            <Grid item xs={12} key={index}>
              <MenuIconButton {...props}>
                <img src={item.icon} />
              </MenuIconButton>
            </Grid>
          );
        })}
      </MainMenu>
    </Container>
  );
};

export default Menu;
