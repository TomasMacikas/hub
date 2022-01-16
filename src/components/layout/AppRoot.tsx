import { Box } from '@mui/material'
import * as React from 'react'

export const AppRoot: React.FC = ({ children }) => {
  return <Box sx={{ display: 'flex' }}>{children}</Box>
}
