import "./../index.css"

interface Props {
  name: string
  active: boolean
  action: () => void
}

function Button({ name, active, action }: Props) {
  return (
    <button
      className={`py-1 px-4 outline-none rounded bg-white bg-opacity-10 text-white ${
        !active && "opacity-80 hover:opacity-100 transition-3"
      }`}
      onClick={action}
    >
      {name}
    </button>
  )
}

export default Button
