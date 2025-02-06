import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Popper,
  Paper,
  Fade,
} from '@mui/material';
import {
  ChevronLeft,
  ChevronRight,
  Home,
  Settings,
  People,
  Mail,
  BarChart,
  ExpandMore,
  ExpandLess,
} from '@mui/icons-material';

const drawerWidth = 240;

const menuItems = [
  { icon: <Home />, text: 'Home' },
  {
    icon: <Settings />,
    text: 'Settings',
    children: [
      { icon: <People />, text: 'Profile' },
      { icon: <Mail />, text: 'Notifications' },
    ],
  },
  {
    icon: <BarChart />,
    text: 'Reports',
    children: [
      { icon: <BarChart />, text: 'Daily' },
      { icon: <BarChart />, text: 'Monthly' },
    ],
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const popperRef = useRef(null);
  const parentRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      !open &&
      !parentRef.current?.contains(event.target) &&
      !popperRef.current?.contains(event.target)
    ) {
      setAnchorEl(null);
      setOpenSubmenu(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mouseover', handleClickOutside);
    return () => {
      document.removeEventListener('mouseover', handleClickOutside);
    };
  }, [open]);

  const handleSubmenuClick = (index, event) => {
    event.stopPropagation();
    if (open) {
      setOpenSubmenu(openSubmenu === index ? null : index);
    }
  };

  const handleMouseEnter = (event, index) => {
    if (!open && menuItems[index]?.children) {
      parentRef.current = event.currentTarget;
      setAnchorEl(event.currentTarget);
      setOpenSubmenu(index);
    }
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: open ? drawerWidth : 73,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: open ? drawerWidth : 73,
            boxSizing: 'border-box',
            transition: 'width 225ms cubic-bezier(0.4, 0, 0.6, 1)',
            overflowX: 'hidden',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={() => setOpen(!open)}>
            {open ? <ChevronLeft /> : <ChevronRight />}
          </IconButton>
        </Box>

        <List>
          {menuItems.map((item, index) => (
            <Box key={index}>
              <ListItem disablePadding>
                <ListItemButton
                  onMouseEnter={(e) => handleMouseEnter(e, index)}
                  onClick={(e) => handleSubmenuClick(index, e)}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  {open && (
                    <>
                      <ListItemText
                        primary={item.text}
                        sx={{ whiteSpace: 'break-spaces' }}
                      />
                      {item.children &&
                        (openSubmenu === index ? (
                          <ExpandLess />
                        ) : (
                          <ExpandMore />
                        ))}
                    </>
                  )}
                </ListItemButton>
              </ListItem>

              {item.children &&
                (open ? (
                  <Collapse
                    in={openSubmenu === index}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {item.children.map((child, childIndex) => (
                        <ListItemButton
                          key={childIndex}
                          sx={{ pl: 4 }}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ListItemIcon>{child.icon}</ListItemIcon>
                          <ListItemText
                            primary={child.text}
                            sx={{ whiteSpace: 'break-spaces' }}
                          />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                ) : (
                  <Popper
                    open={openSubmenu === index}
                    anchorEl={anchorEl}
                    placement="right-start"
                    transition
                    sx={{ zIndex: 1300 }}
                  >
                    {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={200}>
                        <Paper
                          ref={popperRef}
                          elevation={4}
                          sx={{ pointerEvents: 'auto' }}
                        >
                          <List>
                            {item.children.map((child, childIndex) => (
                              <ListItemButton
                                key={childIndex}
                                onClick={(e) => e.stopPropagation()}
                              >
                                <ListItemIcon>{child.icon}</ListItemIcon>
                                <ListItemText primary={child.text} />
                              </ListItemButton>
                            ))}
                          </List>
                        </Paper>
                      </Fade>
                    )}
                  </Popper>
                ))}
            </Box>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <h1>Main Content</h1>
      </Box>
    </Box>
  );
};

export default Sidebar;
