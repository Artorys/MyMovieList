import { createTheme } from '@mui/material'
import styled from 'styled-components'

const themeDefault = createTheme()
export const theme = createTheme(
    {
        palette : 
        {
            primary : 
            {
                main : themeDefault.palette.grey[600]
            },
            secondary : 
            {
                main : themeDefault.palette.grey[400]
            }
        },
        breakpoints : 
        {
            values : 
            {
                xs : 0,
                sm : 600,
                md : 900,
                lg : 1024,
                xl : 1280,
            }
        },
        components : 
        {
            MuiInput : 
            {
                styleOverrides : 
                {
                    root : 
                    {
                        color : themeDefault.palette.grey[400]
                    }
                }
            },
        }
    })
export const HeaderDiv = styled.header`
    width: 100%;
    height: 80px;
    background-color: ${theme.palette.grey[900]};
`