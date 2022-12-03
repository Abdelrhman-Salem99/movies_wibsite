import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import {
  APIKEY,
  BASEURL,
  IMAGE_BASE_URL,
  TRENDING_MOVIES,
  TRENDING_TVSHOWS,
} from "../../data/apis";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const [movies, setMoves] = useState([]);

  const [tvShows, setTvShows] = useState([]);

  const [moviesRequest, moviesData] = useFetch({
    url: TRENDING_MOVIES,
    method: "get",
  });

  const [tvShowRequest, tvShowData] = useFetch({
    url: TRENDING_TVSHOWS,
    method: "get",
  });

  useEffect(() => {
    moviesRequest({
      params: { api_key: APIKEY },
      onSuccess: (res) => {
        // console.log(res.data.results);
        setMoves(res.data.results);
      },
    });

    tvShowRequest({
      params: { api_key: APIKEY },
      onSuccess: (res) => {
        // console.log(res.data.results);
        setTvShows(res.data.results);
      },
    });
  }, []);

  console.log(tvShows);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Container maxWidth="xl" sx={{ paddingBlock: "50px" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {/************  Movies Box  *************/}
          <Box>
            <Grid container spacing={3}>
              {/* Header of content */}
              <Grid xs={2} sm={4} md={4} lg={4} xl={4}>
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ width: "100%" }}>
                    <Box
                      sx={{
                        width: "25%",
                        borderBlock: "1px solid #a8a8a83d",
                      }}
                    ></Box>

                    <Box
                      sx={{
                        width: "100%",
                        paddingBlock: 2,
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h1"
                          sx={{
                            color: "#fff",
                            fontSize: "5rem",
                            fontFamily: "Montserrat Alternates",
                          }}
                        >
                          Trending
                        </Typography>

                        <Typography
                          variant="h1"
                          sx={{
                            color: "#fff",
                            fontSize: "5rem",
                            fontFamily: "Montserrat Alternates",
                          }}
                        >
                          Movies
                        </Typography>
                        <Typography
                          variant="h1"
                          sx={{
                            color: "#fff",
                            fontSize: "5rem",
                            fontFamily: "Montserrat Alternates",
                          }}
                        >
                          to watch now
                        </Typography>
                      </Box>
                      <Typography
                        variant="p"
                        sx={{
                          color: "#949cb0",
                          fontSize: "2rem",
                          fontFamily: "Montserrat Alternates",
                        }}
                      >
                        Most watched movies by days
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width: "100%",

                        borderBlock: "1px solid #a8a8a83d",
                      }}
                    ></Box>
                  </Box>
                </Box>
              </Grid>

              {/* Movies Content */}
              {movies.map(
                (movie, index) =>
                  index < 10 && (
                    <Grid xs={12} sm={10} md={2} lg={2} xl={2} key={movie.id}>
                      <Box
                        sx={{
                          width: "100%",
                          height: "35vh",
                          cursor: "pointer",
                          marginBottom: "50px",

                          position: "relative",
                        }}
                      >
                        <Box
                          sx={{
                            width: "32px",
                            height: "40px",
                            position: "absolute",
                            bgcolor: "#24baef",
                            top: "0",
                            right: "0",

                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography variant="p" sx={{ color: "#fff" }}>
                            {Math.round(movie.vote_average)}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url(${IMAGE_BASE_URL}${movie.poster_path})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100% 100%",
                            backgroundPosition: "center",
                          }}
                        ></Box>

                        <Box sx={{ width: "100%", paddingTop: "10px" }}>
                          <Typography
                            variant="h5"
                            sx={{
                              color: "#fff",
                              fontFamily: "Montserrat Alternates",
                            }}
                          >
                            {movie.title}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  )
              )}
            </Grid>
          </Box>
          {/************  Tv Shows Box  *************/}
          <Box>
            <Grid container spacing={3}>
              {/* Header of content */}
              <Grid xs={2} sm={4} md={4} lg={4} xl={4}>
                <Box sx={{ width: "100%" }}>
                  <Box sx={{ width: "100%" }}>
                    <Box
                      sx={{
                        width: "25%",
                        borderBlock: "1px solid #a8a8a83d",
                      }}
                    ></Box>

                    <Box
                      sx={{
                        width: "100%",
                        paddingBlock: 2,
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h1"
                          sx={{
                            color: "#fff",
                            fontSize: "5rem",
                            fontFamily: "Montserrat Alternates",
                          }}
                        >
                          Trending
                        </Typography>

                        <Typography
                          variant="h1"
                          sx={{
                            color: "#fff",
                            fontSize: "5rem",
                            fontFamily: "Montserrat Alternates",
                          }}
                        >
                          TV
                        </Typography>
                        <Typography
                          variant="h1"
                          sx={{
                            color: "#fff",
                            fontSize: "5rem",
                            fontFamily: "Montserrat Alternates",
                          }}
                        >
                          to watch now
                        </Typography>
                      </Box>
                      <Typography
                        variant="p"
                        sx={{
                          color: "#949cb0",
                          fontSize: "2rem",
                          fontFamily: "Montserrat Alternates",
                        }}
                      >
                        Most watched movies by days
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        width: "100%",

                        borderBlock: "1px solid #a8a8a83d",
                      }}
                    ></Box>
                  </Box>
                </Box>
              </Grid>

              {/* Tv Shows Content */}
              {tvShows.map(
                (tvShow, index) =>
                  index < 10 && (
                    <Grid xs={12} sm={10} md={2} lg={2} xl={2} key={index}>
                      <Box
                        sx={{
                          width: "100%",
                          height: "35vh",
                          cursor: "pointer",
                          marginBottom: "50px",

                          position: "relative",
                        }}
                      >
                        <Box
                          sx={{
                            width: "32px",
                            height: "40px",
                            position: "absolute",
                            bgcolor: "#24baef",
                            top: "0",
                            right: "0",

                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <Typography variant="p" sx={{ color: "#fff" }}>
                            {Math.round(tvShow.vote_average)}
                          </Typography>
                        </Box>

                        <Box
                          sx={{
                            width: "100%",
                            height: "100%",
                            backgroundImage: `url(${IMAGE_BASE_URL}${tvShow.poster_path})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100% 100%",
                            backgroundPosition: "center",
                          }}
                        ></Box>

                        <Box sx={{ width: "100%", paddingTop: "10px" }}>
                          <Typography
                            variant="h5"
                            sx={{
                              color: "#fff",
                              fontFamily: "Montserrat Alternates",
                            }}
                          >
                            {tvShow.name}
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  )
              )}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
