import { createTheme, Typography, useMediaQuery } from "@mui/material";
import { BiMovie } from "react-icons/bi";
import { MdWeb } from "react-icons/md";
import { FooterDiv } from "./style";
import { ThemedProps } from "@mui/material";

const theme = createTheme()

export default function Footer() {
    const mediaMobile = useMediaQuery(theme.breakpoints.down("sm"))
    return (
        <FooterDiv>
            {mediaMobile ? <span className="text">2022 Ⓒ IMovieList. All rights reserved</span> :
            <div className="footer__container">
                <div>
                    <Typography color={`${theme.palette.grey[400]}`} variant = "body2">MyMovieList</Typography>
                    <BiMovie size={15} color={`${theme.palette.grey[400]}`}/>
                </div>
                    <Typography color={`${theme.palette.grey[400]}`} variant = "body2">2022 Ⓒ IMovieList. All rights reserved</Typography>
                <div>
                    <a style={{color : theme.palette.grey[800] }} href="https://www.themoviedb.org/about/logos-attribution">
                        <div className="footerReferences">
                            <Typography color={`${theme.palette.grey[400]}`} variant = "body2">References</Typography>
                            <MdWeb size={15} color={`${theme.palette.grey[400]}`}/>
                        </div>
                    </a>
                </div>
            </div> }
    </FooterDiv>
    )
}