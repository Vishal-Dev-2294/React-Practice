function Card(props) {
  console.log(props.images);

  return (
    <>
      <div className="Card">
        <div>
          <div className="Top">
            <img src={props.images} alt="Amazone logo" />
            <button>Save</button>
          </div>
          <div className="Center">
            <h3>
              {props.company} <span>{props.datepost}</span>
            </h3>
            <h2> {props.posts}</h2>
            <div className="Tag">
              <h4> {props.tag1} </h4>
              <h4> {props.tag2}</h4>
            </div>
          </div>
        </div>
        <div className="Bottom">
          <div>
            <h3> {props.pay} </h3>
            <p> {props.location} </p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
    </>
  );
}

export default Card;
