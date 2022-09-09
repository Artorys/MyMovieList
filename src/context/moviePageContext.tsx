import { createContext, useContext, useEffect, useState } from "react";
import {
  IReponseCredits,
  IReponseSimilarMovie,
  IResponseDetailMovie,
} from "../interfaces/axiosReponseApiTmdb";
import { apiTMDb } from "../services/api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { apiFake } from "../services/api";
import {
  IDirector,
  IDataComenter,
  IDataRating,
  IDataRatingAll,
  IMovieContext,
  IMovieContextProps,
} from "../interfaces/moviePage/moviePageInterface";
import { AuthContext } from "./authContext";
import { getVideo } from "./playContext";

export const MovieContext = createContext<IMovieContext>({} as IMovieContext);

export function MovieContextProvider({ children }: IMovieContextProps) {
  const { movie_id, setMovie_Id } = useContext(AuthContext);
  const [att, setAtt] = useState<Array<number>>([]);
  const [movie, setMovie] = useState<IResponseDetailMovie>(
    {} as IResponseDetailMovie
  );
  const [movieCredits, setMovieCredits] = useState<IReponseCredits>(
    {} as IReponseCredits
  );
  const [movieSimilar, setMovieSimilar] = useState<IReponseSimilarMovie>(
    {} as IReponseSimilarMovie
  );
  const [loadingMovie, setLoadingMovie] = useState(true);
  const [post, setPost] = useState<IDataComenter>({} as IDataComenter);
  const [postLive, setPostLive] = useState<Array<IDataComenter>>(
    [] as Array<IDataComenter>
  );
  const [avatar, setAvatar] = useState("");
  const [ratingValue, setRatingValue] = useState(0);
  const [rating, setRating] = useState<IDataRating>({} as IDataRating);
  const [allRating, setAllRating] = useState<IDataRatingAll[]>(
    {} as IDataRatingAll[]
  );
  const [itemRating, setItemRating] = useState<IDataRatingAll | undefined>(
    {} as IDataRatingAll
  );
  const [video, setVideo] = useState('')
  const name = localStorage.getItem("@nameUser") as string
  const [cont, setCont] = useState(0)
  const [director, setDirector] = useState<IDirector[]>([] as IDirector[])

  useEffect(() => {
    setCont(0)
    filterDirector([])
    
    apiTMDb.get(`/movie/${movie_id}/credits`).then((res: IReponseCredits) => {
      setMovieCredits(res);
      filterDirector(res.data.crew)
    })

    apiTMDb
      .get(`/movie/${movie_id}/similar`)
      .then((res) => setMovieSimilar(res.data));

    apiFake
      .get("/rating", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@token")}`,
        },
      })
      .then((res) => {
        vericRating(res.data)
        setAllRating(res.data)
      })

    const videoAwait = async () => {
      getVideo(movie_id).then((res) => setVideo(res))
    }

    videoAwait()
    

    movieCredits &&
      apiTMDb
        .get(`/movie/${movie_id}`)
        .then((res: IResponseDetailMovie) => {
          setMovie(res);
        })
        .catch((err) => console.log(err))
        .finally(() => {
          setTimeout(() => {
            setLoadingMovie(false);
          }, 400);
        });
  }, [movie_id]);

  useEffect(() => {
    apiFake
      .get(`640/comments`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@token")}`,
        },
      })
      .then(async (res) => {
        setPostLive(res.data);
        setAvatar(await userAvatar(Number(localStorage.getItem("@idUser"))));
      });
  }, [att]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      apiFake
        .get(`640/comments`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@token")}`,
          },
        })
        .then(async (res) => {
          setPostLive(res.data);
          setAvatar(await userAvatar(Number(localStorage.getItem("@idUser"))));
        });
    }, 2500);

    return () => clearInterval(intervalId);
  }, [useState]);

  useEffect(() => {
    postComments(post);
  }, [post]);

  useEffect(() => {
    feedbackPost(rating);
  }, [rating]);

  useEffect(() => {
    if (allRating.length === undefined) {
      return;
    }

    vericRating(allRating);
  }, [allRating]);

  useEffect(() => {
    itemRating ? setRatingValue(itemRating.rating) : setRatingValue(0);
  }, [itemRating]);

  useEffect(() => {
    apiFake
    .get("/rating", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("@token")}`,
      },
    })
    .then((res) => {
      vericRating(res.data)
      setAllRating(res.data)
    })
  }, [rating])


  const postComments = (data: IDataComenter) => {
    if (data.userId === undefined) {
      return;
    }
    toast.promise(
      apiFake
        .post("/comments", data, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("@token")}`,
          },
        })
        .then(() => {
          setAtt((oldIn) => [...oldIn, 1]);
        }),
      {
        pending: "Waiting...",
        success: "Create post",
        error: "Error",
      }
    );
  };

  const userAvatar = async (id: number) => {
    return apiFake
      .get(`users/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("@token")}`,
        },
      })
      .then((res) => res.data.avatar); 
  };

  const handleSubmit = (
    evt: React.FormEvent<HTMLFormElement>,
    data: string
  ) => {
    evt.preventDefault();
    setPost({
      id_Movie: movie_id,
      comments: data,
      userId: Number(localStorage.getItem("@idUser")),
      avatar: avatar,
      name: name
    });
  };

  const feedbackPost = (data: IDataRating) => {
    
    if (data.userId === undefined) {
      return;
    }
    vericRating(allRating)
    setCont(1)
    
    itemRating !== undefined
      ? toast.promise(
          apiFake.patch(`/rating/${itemRating.id}`, data, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("@token")}`,
            },
          }).then(res => {console.log(itemRating)
            console.log(res)
          }).catch(res => console.log(res.data)),
          {
            pending: "Waiting...",
            success: "You updated to feedback",
            error: "Error",
          }
        )
      : 
      cont == 0 &&
      toast.promise(
          apiFake.post("/rating", data, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("@token")}`,
            },
          }).then(() => {
            vericRating(allRating)
          }),
          {
            pending: "Waiting...",
            success: "Avaliead",
            error: "Error",
          }
        );
        setItemRating(data)
  };

  const vericRating = (data: IDataRatingAll[]) => {
    const item = data.find((elem) => {
      if (
        elem.id_Movie == movie_id &&
        elem.userId == Number(localStorage.getItem("@idUser"))
      ) {
        return elem;
      }
    });

    setItemRating(item);

    return item;
  };

  const handleSubmitRating = (data: number) => {
    vericRating(allRating);

    setRating({
      id_Movie: movie_id,
      rating: Number(data),
      userId: Number(localStorage.getItem("@idUser")),
      avatar: avatar,
      name: name,
    });
  };

  const filterDirector = (data : IDirector[]) => {
    data.map((elem) => {
        return elem.job.includes("Director") && 
        elem.profile_path != null && setDirector(old => [...old, elem])
    })
  }

  return (
    <MovieContext.Provider
      value={{
        movie,
        movieCredits,
        setMovie_Id,
        handleSubmit,
        postLive,
        handleSubmitRating,
        movie_id,
        loadingMovie,
        movieSimilar,
        ratingValue,
        setRatingValue,
        video,
        director
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
