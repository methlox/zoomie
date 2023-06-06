import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute, SidebarLinkS } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="order" onClick={toggle}>Order</SidebarLink>
            </SidebarMenu>
            <SidebarMenu>
                <SidebarLink to="hotel" onClick={toggle}>Restaurants</SidebarLink>
            </SidebarMenu>
            <SidebarMenu>
                <SidebarLink to="premium" onClick={toggle}>Premium</SidebarLink>
            </SidebarMenu>
            <SidebarMenu>
                <SidebarLinkS to="login" onClick={toggle}>Sign Up</SidebarLinkS>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to='login'>Sign In</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;
