function Summary({ img, title, description }) {
  return (
    <div>
      <img src={img} alt="" />
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}
