import { ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE } from "../types";


export const addMovie = (payload) => ({
          type: ADD_MOVIE,
          payload//newMovie={id,title,description,rate,posterUrl}
})

export const deleteMovie = (payload) => ({
          type: DELETE_MOVIE,
          payload//id
})

export const editMovie = (payload) => ({
          type: EDIT_MOVIE,
          payload//Movie:{id,title,description,rate,posterUrl}
})


