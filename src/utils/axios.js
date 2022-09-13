import axios from "axios";

export const axiosTMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    KEY: process.env.TMDB_API_KEY,
  },
});
