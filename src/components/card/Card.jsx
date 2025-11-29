import "./Card.css";

function Card({ theme, title, icon }) {
  return (
    <div className={`card ${theme}`}>
      <p className="icon">{icon}</p>
      <h2>{title}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
        laudantium ipsa ullam a modi, similique id sequi neque, voluptatum
        nesciunt numquam. Facilis eius odio et tenetur reprehenderit. Doloribus,
        voluptatem vel! Ea unde totam est consectetur aliquid nesciunt odit
        reiciendis itaque.
      </p>
    </div>
  );
}

export default Card;
