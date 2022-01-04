import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from "react-router-dom"

const ProductDetail = ({match}) => {
          const moviesList = useSelector(state => state.movieReducer.movies)
          const movie=moviesList.find(elt =>elt.id.toString() === match.params.id)
          return (
                    <div>
                              <h1>{movie.description}</h1>
                             <Link to="/"> <button>Go back</button></Link>
                    </div>
          )
}

export default ProductDetail
