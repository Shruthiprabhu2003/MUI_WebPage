import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography, styled } from "@mui/material"
import PetsIcon from '@mui/icons-material/Pets';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from "react";

export const Navbar = () => {
    const [open,setOpen]= useState(false)
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-between"
    })
    const Search = styled("div")(({ theme }) => ({
        backgroundColor: "white",
        padding: "0 10px",
        borderRadius: theme.shape.borderRadius,
        width: "40%",
    }))
    const Icons = styled(Box)(({ theme }) => ({
        display: "none",
        gap: "20px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "flex"
        }
    }))
    const UserBox = styled(Box)(({ theme }) => ({
        display: "flex",
        gap: "10px",
        alignItems: "center",
        [theme.breakpoints.up("sm")]: {
            display: "none"
        }
    }))
    return (
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>Shruthi</Typography>
                <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder="search..." /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">  {/* to create the 4 mails/inbox effect */}
                        <MailIcon />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <NotificationsIcon />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }} src="https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" onClick={e=>setOpen(true)} />
                </Icons>
                <UserBox onClick={e=>setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30 }} src="https://images.pexels.com/photos/4926674/pexels-photo-4926674.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <Typography variant="span">John</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={e=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

