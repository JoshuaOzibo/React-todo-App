
import "../UI/card.css"
const card = (props) => {
  const joint = "card " + props.className;
  return (
    <div className ={joint}>{props.children}</div>
  )
}

export default card