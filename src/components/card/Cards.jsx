import Card from "./Card";
import "./Cards.css";
import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

// our information of cards :
const cards = [
  // first card :
  {
    id: 1,
    title: "React js",
    icon: <FaReact />,
  },
  // second card :
  {
    id: 2,
    title: "Node js",
    icon: <FaNodeJs />,
  },
  // third card :
  {
    id: 3,
    title: "Tailwind css",
    icon: <RiTailwindCssFill />,
  },
  // forth card :
  {
    id: 4,
    title: "Bootstrap css",
    icon: <FaBootstrap />,
  },
];

function Cards({ theme }) {
  return (
    <div className="cards">
      {cards.map((card) => (
        <Card key={card.id} {...card} theme={theme} />
      ))}
    </div>
  );
}

export default Cards;
