import React from "react"
import { AnimeType } from "../../App"
import Anime from "../home/anime"

interface Props {
  animeList: AnimeType[]
  setAnimeList: React.Dispatch<React.SetStateAction<AnimeType[]>>
}

function AnimeList({ animeList, setAnimeList }: Props) {
  return (
    <div className="grid grid-cols-10 gap-10 w-[85%] ml-[7.5%] mt-10">
      {animeList.map(anime => (
        <Anime
          key={`list${anime.name}`}
          name={anime.name}
          image={anime.image}
          setAnimeList={setAnimeList}
          animelist={animeList}
        />
      ))}
    </div>
  )
}

export default AnimeList
