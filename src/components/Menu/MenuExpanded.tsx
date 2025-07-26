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
        <MenuExpandedContainer
            isHovered={isHovered}
            role="menu"
            aria-label="Expanded navigation menu"
        >
            <Box>
                <ProfileContainer>
                    <CustomAvatar alt='Daniel' src={ProfilePic} />
                    <UserName>Daniel</UserName>
                </ProfileContainer>
                <Grid container gap={1}>
                    {menuItems.map((item, index) => {
                        const props = { active: item.active };
                        return (
                            <Box key={index}>
                                <MenuItemContainer
                                    {...props}
                                    role="menuitem"
                                    tabIndex={isHovered ? 0 : -1}
                                    aria-label={item.title}
                                >
                                    <ExpandedMenuIconButton
                                        aria-label={`${item.title} icon`}
                                    >
                                        <img src={item.icon} alt={`${item.title} icon`} />
                                    </ExpandedMenuIconButton>
                                    <MenuItemText {...props}>{item.title}</MenuItemText>
                                </MenuItemContainer>
                            </Box>
                        );
                    })}
                </Grid>
            </Box>

            <AdditionalMenuContainer>
                {additionalMenuItems.map((el, elIndex) => (
                    <Typography
                        variant='h6'
                        key={elIndex}
                        role="menuitem"
                        tabIndex={isHovered ? 0 : -1}
                        aria-label={el}
                        sx={{ cursor: 'pointer' }}
                    >
                        {el}
                    </Typography>
                ))}
            </AdditionalMenuContainer>
        </MenuExpandedContainer>
    );
};

export default MenuExpanded;
