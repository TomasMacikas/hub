import * as React from 'react'
import { AppRoot } from './AppRoot'
import { AppNavDrawer } from './AppNavDrawer'
import { AppNavToolbar } from './AppNavToolbar'
import { AppMain } from './AppMain'

const drawerWidth = 240

export const Layout: React.FC = ({ children }) => {
  const [open, setOpen] = React.useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }

  return (
    <AppRoot>
      <AppNavToolbar drawerWidth={drawerWidth} toggleDrawer={toggleDrawer} />
      <AppNavDrawer open={open} drawerWidth={drawerWidth} toggleDrawer={toggleDrawer} />
      <AppMain>{children}</AppMain>
    </AppRoot>
  )
}
