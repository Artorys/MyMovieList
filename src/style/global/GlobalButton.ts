import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    width: string,
    maxWidth?: string,
    minWidth?: string,
    height?: string,
    maxHeight?: string,
    backGroundColor?: string,
    color?: string,
    borderRadius?: string,
    fontSize?: string,
}

const GlobalButton = styled.button`
    width: ${(props: IButtonProps) => props.width? props.width: 'auto'};
    max-width: ${(props: IButtonProps) => props.maxWidth? props.maxWidth: 'auto'};
    min-width: ${(props: IButtonProps) => props.minWidth? props.minWidth: '20px'};
    height: ${(props: IButtonProps) => props.height? props.height: 'auto'};
    max-height: ${(props: IButtonProps) => props.maxHeight? props.maxHeight: 'auto'};

    color: ${(props: IButtonProps) => props.color? props.color: 'white'};
    background-color: ${(props: IButtonProps) => props.backGroundColor? props.backGroundColor : '#e89005'};
    border-style: none;
    border-radius: ${(props: IButtonProps) => props.borderRadius? props.borderRadius : '18px'};
    font-weight: 800;
    font-size: ${(props: IButtonProps) => props.fontSize? props.fontSize : '14px'};
    cursor: pointer;
`

export const HoverButton = styled(GlobalButton)`

    border: 2px solid transparent;

    transition: 250ms;

    :hover {
        background-color: transparent;
        border:2px solid #e89005;
        color: #e89005;
    }
`



export {GlobalButton}

