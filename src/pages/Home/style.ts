import styled, { ThemedStyledProps } from 'styled-components';
import styledMUI from '@mui/styled-engine';
import { Card } from '@mui/material';
import { createTheme } from '@mui/material';
import { ReactElement } from 'react';
import { BiLeftArrow } from 'react-icons/bi';
import { IconType } from 'react-icons';

export const themeDefault = createTheme(
    {
        components : 
        {
            MuiSkeleton : 
            {
                styleOverrides : 
                {
                    root : 
                    {
                        visibility: "visible",
                    }
                }
            },
            MuiTypography : 
            {
                styleOverrides : 
                {
                    root : 
                    {
                        visibility: "visible"
                    }
                }
            },
            MuiCardMedia : 
            {
                styleOverrides : 
                {
                    root : 
                    {
                        visibility: "visible"
                    }
                }
            },
            MuiCard : 
            {
                styleOverrides : 
                {
                    root : 
                    {
                        margin: "auto",
                        padding: "1rem",
                        borderRadius: "1em",
                        border: "1px solid transparentize(white, 0.5)",
                    }
                }
            }
            
        }
    })
export const theme = createTheme(
    {
        palette : {
            primary : 
            {
                main : themeDefault.palette.grey[400]
            },
            secondary : {
                main : themeDefault.palette.grey[800]
            },
            info : {
                main : themeDefault.palette.grey[900]
            }
            
        },
        typography : 
        {
            body1 : {fontSize : "0.8rem"},
            body2 : {fontSize : "0.6rem"},
        },
        breakpoints : 
        {
            values : 
            {
                xs : 0,
                sm : 300,
                md :400, 
                lg :500,
                xl :800,
            }
        },
        components : 
        {
            MuiCardMedia : 
            {
                styleOverrides : 
                {
                    root : 
                    {
                        [themeDefault.breakpoints.down("sm")] : 
                        {
                            objectFit : "cover"
                        },
                        [themeDefault.breakpoints.up("sm")] : 
                        {
                            objectFit : "cover"
                        },
                        backgroundPosition : "center center",
                        backgroundSize : "100%"
                    }
                }
            },
            MuiSvgIcon : 
            {
                styleOverrides : 
                {
                    root : 
                    {  
                        
                            fontSize : "2rem",
                            backgroundColor : "rgba(0,0,0,0.5)",
                            borderRadius : "100%"

                    }
                }
            },
        }
    })

export const MainDiv = styled.main`
    overflow-y: auto;
    background-color: #0D0D0F;
    width: 100%;
    height: 100%;
    min-height: max-content;
    display: flex;
    justify-content: center;
    
`

export const ContentBox = styled.div`
    padding: 1rem 0;
    width: 100%;
    background-color:  #0D0D0F;
    height: max-content;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 5rem;
    .MovieSection{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }
`
export const MovieListBox = styled.div`
    
    width: 100%;
    height: max-content;

    .BoxHeader{
        @media screen and (min-width: 340px) {
        margin : 0 1rem;
        }
        @media screen and (min-width : 1280px) {
            margin : 0 200px;
        }
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: auto;
        height: 60px;
        background-color: ${theme.palette.grey[900]};

        .MuiTypography-root
        {
            font-size: 1.2rem;
            font-weight: 700;
            text-shadow: 1px 1px ${theme.palette.grey[600]}; ;
            color  : ${theme.palette.grey[100]};
        }
        .MuiSvgIcon-root
        {
            font-size: 1.4rem;
        }
        .MuiButton-root
        {
            display: flex;
            align-items:center;

                .MuiTypography-root
            {
                font-size: 0.8rem;
                font-weight: 700;
                text-shadow: 1px 1px ${theme.palette.grey[900]}; ;
                color  : ${theme.palette.grey[100]};
            }
                .MuiSvgIcon-root
            {
               margin : 0px 0 3px 0 ;
            }
        }
    }

    .BoxMain{
        @media screen and (min-width: 340px) {
        margin : 0 1rem;
        }
        @media screen and (min-width : 1280px) {
            margin : 0 200px;
        }
        display: flex;
        align-items: center;
        justify-content: space-around;
        gap: 1rem;
        width: auto;
        height: auto;
        background-color: ${theme.palette.grey[800]};
        position: relative;

        .next
        {
            right: 0;
            top : 40%;
            position : absolute;
            z-index: 20;
            width: max-content;
        }
        
        .prev
        {
            left: 0;
            top : 40%;
            z-index: 20;
            position: absolute;
            
        }
        .swiper-button-disabled
        {
            opacity: 0.2;
            cursor: no-drop;
            button
            {
                cursor: no-drop;
            }
        }
        .swiper
        {
            padding : 1rem;
        }
        .card
        {
            transition: 1s;
        }
        .card:hover
        {
            cursor: pointer;
            scale: 1.1;
        }
       .media {
        height: 150px;
        background-size :contain ;
        background-position: center center;
        }

    }
`