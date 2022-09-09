import { useEffect, useState } from "react";
import { apiTMDb } from "../../services/api";
import Lottie  from "react-lottie";
import noMovies from "./noMovies.json";
import { IGenres } from "./interfaces";
import { DivGeneral } from "./style";

export const UserProfile = () => {

  const nameUser = localStorage.getItem("@nameUser");
  const emailUser = localStorage.getItem("@emailUser");
  const avatarUser = localStorage.getItem("@avatarlUser") as string;

  const [genres, setGenres] = useState<IGenres[]>([]);
  const [watchedMovies, setWatchedMovies] = useState<any[]>([]);
  const [buttonStatus, setButtonStatus] = useState(true);
  const [buttonColor, setButtonColor] = useState(true);

  useEffect(() => {
          apiTMDb
          .get("/genre/movie/list?language=en-US")
          .then(response => setGenres(response.data.genres))
  }, []);

  const toggleButton = () => {
    setButtonColor(!buttonColor);
    setButtonStatus(!buttonStatus);
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: noMovies,
  };

  return (
    <DivGeneral>
      <div className="div-user">
        <div className="div-container-infos-user">
        <img className="div-avatar"src={avatarUser} alt="avatar" />
        <div className="div-infos-user">
            <p>{nameUser}</p>
            <p>{emailUser}</p>
        </div>
        <div className="arrow">{'>'}</div>
        </div>
        <div className="div-container-input">
          <input 
          type="text" 
          placeholder="Search"
          className="input-search"
          />
        </div>
        <div className="div-container-genres">
          <div className="div-genres">
            <>
            {
             genres.map((genre => 
              <button style={{backgroundColor: buttonColor ? "#141414" : "#F5C600"}} onClick={toggleButton} key={genre.id}>{genre.name}
              <span>{buttonStatus ? "+" : "✓"} </span>
              </button>
             ))
            }
           </>
          </div>
        </div>
        <div className="div-title-favorites"><p className="header-favorite">Favorites</p>See all {'>'}</div>
        <div className="div-container-favorites">
          <div>
          <p className="movie-star">⭐ 7.9</p>
          </div>
          <div className="favorite-bottom">
            <button className="button-watch">Watch now</button>
            <button className="button-add-movie">+</button>
          </div>
        </div>
      </div>
      <div className="div-movies">
        <>
        {
          watchedMovies.length <= 0 ?
          <div className="div-empty">
            <Lottie
              options={defaultOptions}
              isPaused={false}
              isStopped={false}
              direction={1}
              height={480}
              width={480}
              isClickToPauseDisabled={true}
            />
          </div>
          :
          <div>Renderizar algo</div>
        }
        </>
      </div>
    </DivGeneral>
  )
}