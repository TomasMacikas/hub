import React, { PropsWithChildren } from 'react'
import { Divider, Drawer as MuiDrawer, IconButton, styled, Toolbar } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'

interface OwnStylingProps {
  open: boolean
  drawerWidth: number
}

interface OwnProps extends OwnStylingProps {
  toggleDrawer: () => void
}

export const AppNavDrawer = ({ open, toggleDrawer, drawerWidth }: PropsWithChildren<OwnProps>) => {
  return (
    <Drawer variant="permanent" open={open} drawerWidth={drawerWidth}>
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      {/* <List>{mainListItems}</List> */}
      <Divider />
      {/* <List>{secondaryListItems}</List> */}
    </Drawer>
  )
}

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })<OwnStylingProps>(
  ({ theme, open, drawerWidth }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
)
