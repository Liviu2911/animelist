import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import Button from "./components/button"
import Home from "./components/home"
import AnimeList from "./components/animelist"

export type AnimeType = {
  name: string
  image: string
}

export default function App() {
  const [anime, setAnime] = useState(false)
  const [home, setHome] = useState(true)

  const [animeList, setAnimeList] = useState<AnimeType[]>([])

  useEffect(() => {
    console.log(animeList)
  }, [animeList])

  const getData = async () => {
    const res = await fetch("https://api.jikan.moe/v4/top/anime")
    return res.json()
  }

  const { data, isLoading, error } = useQuery<any, Error>(
    ["get anime"],
    getData
  )

  const showAnimeList = () => {
    setAnime(true)
    setHome(false)
  }
  const goHome = () => {
    setAnime(false)
    setHome(true)
  }

  if (isLoading) return <p className="text-white">Loading...</p>
  else if (error) return <p className="text-white">{error.message}</p>
  return (
    <>
      <div className="w-full flex gap-4 mt-10 justify-center">
        <Button name="Anime List" action={showAnimeList} active={anime} />
        <Button name="Home" action={goHome} active={home} />
      </div>

      {home && <Home setAnimeList={setAnimeList} animelist={animeList} />}
      {anime && <AnimeList animeList={animeList} setAnimeList={setAnimeList} />}
    </>
  )
}
