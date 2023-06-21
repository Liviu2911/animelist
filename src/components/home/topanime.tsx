import React from "react"
import { useQuery } from "@tanstack/react-query"
import Anime from "./anime"
import { AnimeType } from "../../App"

interface Props {
  animelist: AnimeType[]
}

function TopAnime({ animelist }: Props) {
  const getAnime = async () => {
    const res = await fetch("https://api.jikan.moe/v4/top/anime")
    return res.json()
  }
  const { data, isLoading } = useQuery(["topanime"], getAnime)
  if (isLoading) return <p>Loading...</p>

  return (
    <>
      <h1 className="text-yellow-500 ml-64 text-2xl">Top Anime</h1>
      <div className="grid grid-cols-10 gap-10 w-[85%] ml-[7.5%] mt-10">
        {data.data.map((anime: any) => (
          <Anime
            key={anime.title}
            name={anime.title}
            image={anime.images.jpg.image_url}
            animelist={animelist}
          />
        ))}
      </div>
    </>
  )
}

export default TopAnime
