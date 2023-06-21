import React, { useEffect, useState } from "react"
import { AnimeType } from "../../App"
import { HiBookmarkSlash, HiBookmark } from "react-icons/hi2"
import { motion, AnimatePresence } from "framer-motion"

interface Props {
  name: string
  image: string
  animelist: AnimeType[]
  setAnimeList: React.Dispatch<React.SetStateAction<AnimeType[]>>
}

const animation = {
  initial: {
    x: 25,
    opacity: 0,
  },
  animate: {
    x: -32,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    x: 25,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
}

function Anime({ name, image, animelist, setAnimeList }: Props) {
  const [exist, setExist] = useState(
    animelist.filter(anime => anime.name === name)
  )

  useEffect(() => {
    setExist(animelist.filter(anime => anime.name === name))
  }, [animelist])

  const [showSave, setShowSave] = useState(false)
  return (
    <div
      className="relative w-32 h-48"
      onMouseEnter={() => setShowSave(true)}
      onMouseLeave={() => setShowSave(false)}
    >
      <img src={image} alt={name} className="absolute -z-10" />
      <AnimatePresence initial={true} onExitComplete={() => null}>
        {showSave && (
          <motion.button
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            className={`w-8 bg-rose-500 h-12 flex items-center justify-center text-white`}
            onClick={() =>
              exist.length === 0
                ? setAnimeList(prev => [...prev, { name, image }])
                : setAnimeList(prev =>
                    prev.filter(anime => anime.name !== name)
                  )
            }
          >
            {exist.length === 0 ? <HiBookmark /> : <HiBookmarkSlash />}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Anime
