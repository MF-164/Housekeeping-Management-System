import * as React from 'react';
import { Link } from 'react-router-dom'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import updateAllClientState from "../../store/features/Client/clientSlice"
import updateAllLadiesState from "../../store/features/CleaningLady/cleaningLadySlice"
import { store } from "../../store/app/store";
import './Navbar.scss'
import { useDispatch } from 'react-redux';
const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}));

const StyledSelect = {
    m: 1,
    minWidth: 120,
    backgroundColor: 'rgba(255, 255, 255, 0.176)',
    borderRadius: '10px',
    border: 'solid none',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.286)',
    },
}

const Navbar = ({ list }) => {
    let dispatch = useDispatch()
    // let currentClient = store.getState().client.currentClient.client
    let clients = store.getState().client.allClients.clients
    let cleaningLadies = store.getState().allCleaningLadies.ladies
    let currentClient = { role: 'manager' }
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <Link to='/' className='connect'>
                <MenuItem onClick={handleMenuClose}>
                    <LogoutIcon sx={{ fontSize: 'medium' }} />
                    &nbsp;Log Out
                </MenuItem>
            </Link>
            <Link to='/SignUp' className='connect'>
                <MenuItem onClick={handleMenuClose}>
                    <LoginIcon sx={{ fontSize: 'medium' }} />
                    &nbsp;Sing Up
                </MenuItem>
            </Link>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>
                    My account
                </p>
            </MenuItem>
        </Menu>
    );

    // menu

    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const open = Boolean(anchorEl1);
    const handleClick = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl1(null);
    };

    //search 

    const [filter, setFilter] = React.useState('');
    const handleChange = (event) => {
        setFilter(event.target.value);
        if (list === "clients") {
            if (event.target.value == "city")
                sortByCityClient(clients)
            if (event.target.value == "name")
                sortByNameClient(clients)
        } else {
            if (event.target.value == "city")
                sortByCityLadies(cleaningLadies)
            if (event.target.value == "name")
                sortByNameLadies(cleaningLadies)
        }

    };

    const sortByCityClient = (array) => {
        array.sort((a, b) => {
            if (a.city < b.city)
                return -1
            if (a.city > b.city)
                return 1
            return 0
        })
        dispatch(updateAllClientState(array))
    }

    const sortByNameClient = (array) => {
        array.sort((a, b) => {
            if (a.name < b.name)
                return -1
            if (a.name > b.name)
                return 1
            return 0
        })
        dispatch(updateAllClientState(array))
    }
    
    const sortByCityLadies = (array) => {
        array.sort((a, b) => {
            if (a.city < b.city)
                return -1
            if (a.city > b.city)
                return 1
            return 0
        })
        dispatch(updateAllLadiesState(array))
    }

    const sortByNameLadies = (array) => {
        array.sort((a, b) => {
            if (a.firstName < b.firstName)
                return -1
            if (a.firstName > b.firstName)
                return 1
            return 0
        })
        dispatch(updateAllLadiesState(array))
    }


    const handleChangeSearch = (e) => {
        // let temp = list
        // if (filter === 'name')
        //     temp = list.filter(lady => (lady?.FirstName + ' ' + lady?.LastName).includes(e.value))
        // else if (filter === 'city')
        //     temp = list.filter(lady => lady?.City.includes(e.value))
        // // TODO:send 'temp' to update list!
    }

    return (
        <div className='navbar'>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <div>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleClick}
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl1}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <Link className='connect' /*to='קומפוננטה של פרטי משתמש'*/>
                                    <MenuItem onClick={handleClose}>
                                        <PersonIcon sx={{ fontSize: 'medium' }} />
                                        <p>&nbsp; My account</p>
                                    </MenuItem>
                                </Link>
                            </Menu>
                        </div>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ display: { xs: 'none', sm: 'block' } }}
                        >
                            <Link className='contain' to='/home'>
                                Cleaning Ladies
                            </Link>

                            {currentClient.role === 'manager' &&
                                <Link style={{ marginLeft: '0.5cm' }} className='contain' to='/HomeAdmin'>
                                    Clients
                                </Link>
                            }
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                                onChange={handleChangeSearch}
                            />
                        </Search>
                        <FormControl sx={StyledSelect} size="small">
                            <InputLabel id="demo-select-small-label" sx={{ color: "white" }}>Sort By</InputLabel>
                            <Select
                                labelId="demo-select-small-label"
                                id="filterBy"
                                value={filter}
                                label="Sort By"
                                sx={{ color: "white" }}
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="city">city</MenuItem>
                                <MenuItem value="name">name</MenuItem>
                            </Select>
                        </FormControl>
                        <Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="show more"
                                aria-controls={mobileMenuId}
                                aria-haspopup="true"
                                onClick={handleMobileMenuOpen}
                                color="inherit"
                            >
                                <MoreIcon />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
                {renderMenu}
            </Box>
        </div>
    )
}

export default Navbar