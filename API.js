import React, { useState } from "react";
import axios from "axios";

function MovieSearch() {
  const [searchText, setSearchText] = useState("");
  const [movies, setMovies] = useState([]);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSearchClick = () => {
    axios
      .get(
        `https://openapi.naver.com/v1/search/movie.json?query=${searchText}`,
        {
          headers: {
            "X-Naver-Client-Id": "네이버 API 클라이언트 아이디",
            "X-Naver-Client-Secret": "네이버 API 클라이언트 시크릿",
          },
        }
      )
      .then((response) => {
        setMovies(response.data.items);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleSearchClick}>검색</button>
      <ul>
        {movies.map((movie) => (
          <li key={movie.link}>
            <img src={movie.image} alt={movie.title} />
            <p>{movie.title}</p>
            <p>{movie.actor}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MovieSearch;
