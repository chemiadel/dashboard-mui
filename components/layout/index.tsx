import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import MLink from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import LibraryBooksRoundedIcon from '@mui/icons-material/LibraryBooksRounded';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

import useMediaQuery from '@mui/material/useMediaQuery';
import { Avatar, Stack } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/router';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  backgroundColor: 'GrayText',
  zIndex: 9999,
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    // width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  zIndex: 0,
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Icons = [
  <GridViewRoundedIcon />,
  <LibraryBooksRoundedIcon />,
  <ForumRoundedIcon />,
  <AccountTreeRoundedIcon />,
];

const Routes = ['/', '/knowledges', '/forums', '/services'];

export default function PersistentDrawerLeft({
  children,
  pageName,
}: {
  children: React.ReactNode;
  pageName?: string;
}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);
  const isMD = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();
  React.useEffect(() => {
    if (isMD) {
      setOpen(false);
    }
  }, [isMD]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen((prev) => !prev)}
            edge="start"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography flexGrow={1} variant="h6" noWrap component="div">
            FriendlyGig
          </Typography>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Avatar>A</Avatar>
            <Typography>Username</Typography>
          </Stack>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Dashboard', 'Knowledge Base', 'Forums', 'Services'].map((text, index) => (
            <Link href={Routes[index]} passHref>
              <ListItem button key={text}>
                <ListItemIcon>{Icons[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>
        {/* <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />

        <Stack direction="row" alignItems="center" spacing={2}>
          {router.pathname.split('/').length > 2 && (
            <IconButton onClick={() => router.back()}>
              <ArrowBackRoundedIcon />
            </IconButton>
          )}
          <Typography flexGrow={1} variant="h5" noWrap fontWeight={900} component="h1">
            {pageName}
          </Typography>
        </Stack>

        {children}
      </Main>
    </Box>
  );
}
