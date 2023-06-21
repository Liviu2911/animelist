import React from "react"
import TopAnime from "./topanime"
import { AnimeType } from "../../App"

interface Props {
  animelist: AnimeType[]
  setAnimeList: React.Dispatch<React.SetStateAction<AnimeType[]>>
}

function Home({ animelist, setAnimeList }: Props) {
  return (
    <>
      <TopAnime setAnimeList={setAnimeList} animelist={animelist} />
    </>
  )
}

export default Home
