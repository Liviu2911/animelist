import React from "react"
import TopAnime from "./topanime"
import { AnimeType } from "../../App"

interface Props {
  animelist: AnimeType[]
}

function Home({ animelist }: Props) {
  return (
    <>
      <TopAnime animelist={animelist} />
    </>
  )
}

export default Home
