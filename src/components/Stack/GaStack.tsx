import Stack from '@mui/material/Stack';
import React from 'react'
import StackDirection from './stack-direction'


type myProps = {
    children: React.ReactNode,
    spacing?: number | string,
    direction?: StackDirection
    divider?: React.ReactNode
}

const GaStack : React.FC<myProps> = ({
    children,
    spacing,
    direction = StackDirection.COLUMN,
    divider
}) => {
  return (
    <Stack spacing={spacing} direction={direction} divider={divider}>
        {children}
    </Stack>
  )
}

export default GaStack