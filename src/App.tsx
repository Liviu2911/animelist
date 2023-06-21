import { useQuery } from "@tanstack/react-query"
import { useState } from "react"
import Button from "./components/button"

type Anime = {
  name: string
}

type Manga = {
  name: string
}

export default function App() {
  const [anime, setAnime] = useState(false)
  const [manga, setManga] = useState(false)
  const [home, setHome] = useState(true)

  const [animeList, setAnimeList] = useState<Anime[]>([])
  const [mangaList, setMangaList] = useState<Manga[]>([])

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
    setManga(false)
    setHome(false)
  }
  const showMangaList = () => {
    setManga(true)
    setAnime(false)
    setHome(false)
  }
  const goHome = () => {
    setManga(false)
    setAnime(false)
    setHome(true)
  }

  if (isLoading) return <p className="text-white">Loading...</p>
  else if (error) return <p className="text-white">{error.message}</p>
  console.log(data.data)
  return (
    <>
      <div className="w-full flex gap-4 mt-10 justify-center">
        <Button name="Anime List" action={showAnimeList} active={anime} />
        <Button name="Manga List" action={showMangaList} active={manga} />
        <Button name="Home" action={goHome} active={home} />
      </div>
    </>
  )
}
