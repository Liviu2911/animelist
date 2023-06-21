import Button from "../components/button"

export default {
  title: "Button",
  component: Button,
}

export const ButtonStory = () => (
  <Button name="Anime List" action={() => null} active={true} />
)
