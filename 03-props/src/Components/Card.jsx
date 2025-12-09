function Card(props) {
  return (
    <div className="card">
      <img src={props.img} alt="Nature img"></img>
      <h2> {props.user}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit non</p>
      <button> View Profile</button>
    </div>
  );
}

export default Card;
