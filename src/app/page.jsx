// src/app/page.js
'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://consumet-90tlp0wdo-ms-projects-bf21d06f.vercel.app/anime/gogoanime/popular')
      .then(response => {
        setData(response.data.results);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Popular Anime</h1>
      <ul>
        {data.map(anime => (
          <li key={anime.id}>
            <h2>{anime.title}</h2>
            <p>Release Date: {anime.releaseDate}</p>
            <img src={anime.image} alt={anime.title} width="200" />
            <p><a href={anime.url}>More Info</a></p>
          </li>
        ))}
      </ul>
    </div>
  );
}
