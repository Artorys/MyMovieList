import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import { MovieContext } from "../../context/moviePageContext";
import { base_ImageUrl } from "../../services/api";
import ReactStars from "react-stars";
import { BackDropContainer } from "../../style/moviePageStyles/backDropContainer";
import { MoviePageContainer } from "../../style/moviePageStyles/moviePageContainer";
import { MainContainer } from "../../style/moviePageStyles/mainInfoContainer";
import { HoverButton } from "../../style/global/GlobalButton";

import Footer from "../../components/Footer";
import CardItem from "../../components/CardItem";
import { Skeleton } from "@mui/material";
import { getVideo } from "../../context/playContext";
import ReactPlayer from 'react-player/youtube'


export function MoviePage() {
  
  const {
    setMovie_Id,
    movie,
    handleSubmit,
    handleSubmitRating,
    postLive,
    movie_id,
    loadingMovie,
    movieCredits,
    movieSimilar,
    ratingValue,
    setRatingValue,
    video,
    director
  } = useContext(MovieContext);
  
  const {id} = useParams()
  const navigate = useNavigate();
  
  useEffect(()=>
  {
    setMovie_Id(id)
    console.log(movie_id)
  },[id])
  if (
    localStorage.getItem("@token") === undefined ||
    localStorage.getItem("@token") == null
  ) {
    navigate("/", { replace: true });
  }


  const [input, setInput] = useState("");
  const [pageMax, setPageMax] = useState(10);
  const [pageCastMax, setPageCastMax] = useState(5);
  const ratingChanged = (newRating: number) => {
    setRatingValue(newRating);
    handleSubmitRating(newRating);
  };

  return (
    <>
      <Header />
      {!loadingMovie? (
        <MoviePageContainer>
          <BackDropContainer url={`${base_ImageUrl}${movie.data.backdrop_path}`}></BackDropContainer>
          
          <MainContainer>

            <div className="mainTop">
              <div className='mainTitle'>
                <div className="titleContainer">
                  <h2>{movie.data.title}</h2>


                  <div className='directorsContainer'>
                      {director.map((elem, i) => {
                        return (
                          i <= 1 &&
                            <div key={elem.id} className='directorInfo'>
                              <img
                                src={`${base_ImageUrl}${elem.profile_path}`}
                                alt="Cast"
                              />
                              <p>{elem.name}</p>
                            </div>
                        )
                      })}
                  </div>

                  
                
                  <div className='mainSubTitle'>
                    <div className='ratingContainer'>
                      <>
                        <ReactStars
                          count={5}
                          onChange={ratingChanged}
                          value={ratingValue}
                          size={42}
                          color2={'#e89005'} 
                        />
                      </>
                    </div>
                    
                    <span className='averageRating'>{movie.data.vote_average.toFixed(2)} Rating</span>
                  </div>
                </div>

                <div className="mainOverview">
                  <h3>Synopsis</h3>
                  <p>{movie.data.overview}</p>
                  <p>
                    <span>Duration</span> {movie.data.runtime} Min
                  </p>
                </div>
              </div>

              <img 
                className='mainPoster' 
                src={`${base_ImageUrl}${movie.data.poster_path}`} 
                alt="movie poster"
              />
            </div>

            <div className="subContainer">
              <div className='subContainerDivided'>
                <div className='subContainerLeft'>
                  <h4>Cast</h4>

                  <div className="mainCastContainer">
                    <div className="mainCast">
                      {
                        movieCredits.data.cast.map((elem, i) => {
                          return(
                            i <= pageCastMax &&
                              elem.profile_path != null &&
                            <div className="castCard" key={elem.id}>
                              <img src={`${base_ImageUrl}${elem.profile_path}`} alt="Cast" />
                              <p>{elem.name}</p>
                            </div>
                          )                  
                        })
                      }
                    </div>

                    <HoverButton 
                      width='77px'
                      minWidth='55px' 
                      height='33px' 
                      borderRadius="5px"
                      color='#000' 
                      onClick={() => setPageCastMax(pageCastMax + 3)}
                    >
                      More
                    </HoverButton>
                  </div>

                  <h4>Trailer</h4>

                  <div className="trailerContainer">  
                    <ReactPlayer width='100%' height='100%' url={video}></ReactPlayer>
                  </div>
                  
                  <h4>Genres</h4>
                  
                  <div className='genresContainer'>
                    {movie.data.genres.map((elem) => {
                      return <div
                      onClick={()=>
                        {
                          navigate(`/extend/${elem.name}`)
                        }}                                
                                key={elem.id}                                
                                className='genreCard'
                              >
                                {elem.name}
                                
                              </div>;
                    })}
                  </div>
                  
                </div>

                <div className='subContainerRight'>
                  <h4>Companies</h4>

                  <div className='platformsContainer'> 
                    {movie.data.production_companies.map((elem) => {
                      return (
                        elem.logo_path !== null && (
                          <div key={elem.id}>
                            <img
                              src={`${base_ImageUrl}${elem.logo_path}`}
                              alt="company logo"
                            />
                          </div>
                        )
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <section className="commentSection">
              <h4>Comments</h4>
              <div className='commentsContainer'>    
                {
                  postLive.map((elem, i) => {
                      return(
                        elem.id_Movie == movie_id &&
                          i >= postLive.length - pageMax &&
                          <div key={elem.id} className='commentCard'>
                            <div className='userInfo'>
                              <img src={`${elem.avatar}`} alt="user avatar"/>
                              <h5>{elem.name}</h5>
                            </div>

                            <p>{elem.comments}</p>
                          </div>
                      )
                  })
                }

                <HoverButton
                  borderRadius='5px'
                  color='#000'
                  height='33px'
                  width='77px'
                  onClick={() => setPageMax(pageMax + 5)} 
                >
                  More
                </HoverButton>
              </div>

              <form className='commentInputContainer' onSubmit={(evt) => handleSubmit(evt, input)}>
                  <textarea className='commentArea' placeholder="Comment" onChange={(evt) => setInput(evt.target.value)}/>
                  <HoverButton
                    width='13%'
                    minWidth='77px'
                    borderRadius='5px'
                    height='42px'
                    fontSize='17px'
                    color='#000' 
                    type="submit"
                  >
                    Post
                  </HoverButton>
              </form>
            </section>

            <div className='similarMoviesContainer'>
              {movieSimilar.results.map((elem) => {
                return <CardItem key={elem.id} movies={elem}></CardItem>;
              })}
            </div>
          <Footer />  
          </MainContainer>   
        </MoviePageContainer>
      ): (<Skeleton></Skeleton>)}

    </>
  );
}
