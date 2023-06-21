import React, { useEffect, useState } from "react"
import { AnimeType } from "../../App"
import { HiBookmarkSlash, HiBookmark } from "react-icons/hi2"
import { motion, AnimatePresence } from "framer-motion"

interface Props {
  name: string
  image: string
  animelist: AnimeType[]
}

const animation = {
  initial: {
    x: 100,
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    x: 100,
    transition: {
      duration: 0.5,
    },
  },
}

function Anime({ name, image, animelist }: Props) {
  const [exist, setExist] = useState(
    animelist.filter(anime => anime.name === name).length > 0
  )
  const [showSave, setShowSave] = useState(false)
  return (
    <div
      className="relative w-32 h-48"
      onMouseOver={() => setShowSave(true)}
      onMouseOut={() => setShowSave(false)}
    >
      <img src={image} alt={name} className="absolute" />
      <AnimatePresence initial={true} onExitComplete={() => null}>
        {showSave && (
          <motion.div
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-24 bg-rose-500 h-4"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Anime
