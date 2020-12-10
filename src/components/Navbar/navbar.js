import React from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import NotesIcon from '@material-ui/icons/Notes';
// import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import CloseIcon from '@material-ui/icons/Close';
// import { useAuth } from '../auth/auth'
// import SearchBar from  "../searchBar/searchBar";

import "./navbar.css";

export default function PersistentDrawerRight() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // const { setUserName, setAuthToken } = useAuth();

  // const logout = () => {
  //   setUserName();
  //   setAuthToken();
  // }

  return (
    <div className="root">
      <CssBaseline />
      <AppBar
        position="fixed"
      >
        <Toolbar>
        <Typography className="title" variant="h6" noWrap>
            <Link
              to="/"
              id="link"
              className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Ride On
            </Link>
          </Typography>

          {/* <SearchBar></SearchBar> */}

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && "hide")}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <main>
        <div className={"drawerHeader"} />
      </main>
      <Drawer
        className={"drawer"}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: "drawerPaper",
        }}
      >
        <div className={"drawerHeader"}>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {["About"].map((text) =>(
            <Link to="/about">
             <ListItemText primary={text}
              style={{ color: "black", textEmphasis: "none" }} 
              />
            </Link>
          ))}
        </List>

        <List>
          {["Contact"].map((text) =>(
            <Link to="/contact">
             <ListItemText primary={text}
              style={{ color: "black", textEmphasis: "none" }} 
              />
            </Link>
          ))}
        </List>
        
        {/* <List>
          {['Wishlist'].map((text) => (
            <Link
              to="/wishlist"
              >
            <ListItem button key={text}>
              <ListItemIcon>
                  <FavoriteIcon></FavoriteIcon>
              </ListItemIcon>
              <ListItemText primary={text}
              style={{ color: "black", textEmphasis: "none" }} 
              />
            </ListItem>
            </Link>    
          ))}

          <List>
          {['Notes'].map((text) => (
            <Link
            key={useAuth}
              to="/user"
              >
            <ListItem button key={text}>
              <ListItemIcon>
                  <NotesIcon></NotesIcon>
              </ListItemIcon>
              <ListItemText primary={text}
              style={{ color: "black", textEmphasis: "none" }} 
              />
            </ListItem>
            </Link>
          ))}
        </List>
        </List>
        <Divider />
        <List onClick={() => logout()}>
          {['Log Out'].map((text) => (
            <Link
              to="/note"
              >
            <ListItem button key={text}>
              <ListItemIcon>
                  <ExitToAppIcon></ExitToAppIcon>
              </ListItemIcon>
              <ListItemText primary={text}
              style={{ color: "black", textEmphasis: "none" }} 
              />
            </ListItem>
            </Link>
          ))}
        </List> */}
      </Drawer>
    </div>
  );
}