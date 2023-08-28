import Container from '@mui/material/Container'
import React from 'react'
import ContainerWidth from './container-width'

type myProps = {
    children: React.ReactNode,
    fixed?: boolean,
    maxWidth?: ContainerWidth,
    disableGutters?: boolean
}

const GaContainer: React.FC<myProps> = ({
    maxWidth =  ContainerWidth.LG,
    fixed,
    children,
    disableGutters = false
}) => {
  return (
    <Container maxWidth={maxWidth} disableGutters={disableGutters} fixed={fixed}>
        {children}
    </Container>
  )
}

export default GaContainer