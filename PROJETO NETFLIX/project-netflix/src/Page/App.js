import React, { useEffect, useState } from 'react';
import ControllerTmdb from '../services/ControllerTmdb';
import MovieRow from '../components/MovieRow/MovieRow';
import FeaturedMovie from '../components/FeatureMovie/FeaturedMovie';
import './App.css'
import Header from '../components/Header';
import { AiTwotoneHeart } from "react-icons/ai";
import loading from '../assets/loading.gif'

const App = () => {
  const [movieList, setMovieList] = useState([])
  const [featuredData, setFeaturedData] = useState(null)
  const [blackHeader, setBlackHeader] = useState(false)


  useEffect(() => {
    const loadAll = async () => {
      let list = await ControllerTmdb.getHomeList()
      console.log(list)
      setMovieList(list)
      let originals = list.filter(i => i.slug === 'originals')
      console.log(originals)
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1))
      let chosen = originals[0].items.results[randomChosen]
      if (chosen) {
        let chosenInfo = await ControllerTmdb.getMovieInfo(chosen.id, 'tv')
        setFeaturedData(chosenInfo)
      }
    }
    loadAll()
  }, [])

  useEffect(() => {
    const scroolListener = () => {
      if (window.scrollY > 25) {
        setBlackHeader(true)
      } else {
        setBlackHeader(false)
      }
    }
    window.addEventListener('scroll', scroolListener)

    return () => {
      window.removeEventListener('scroll', scroolListener)
    }
  }, [])

  return (
    <div>
      <Header blackHeader={blackHeader} />
      {movieList.length > 0 && <FeaturedMovie items={featuredData} /> }
      <section className='list'>
        {movieList?.map((item, key) => (
          <div key={key}>
            <MovieRow title={item.title} items={item.items} />
          </div>
        ))}
      </section>
        {movieList.length <= 0 &&
        <div className='loading'>
          <img src={loading} width="80"/>
        </div>}
      <footer>
        <span>Feito com
          <span role='img' aria-label='coração'> ❤ </span>
          pela Sabrina Pires
        </span>
        <span>
          Direitos de imagem para Netflix
        </span>
        <span>
          Dados pegos do site Themoviedb.org
        </span>
      </footer>
    
    </div>
  )
}

export default App