function ProfileCard({ title, handle, image, desceiption }) {
  console.log(title, handle, image, desceiption);
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="Alexa" />
        </figure>
      </div>
      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title} </p>
          <p className="subtitle is-6"> {handle}</p>
          <p className="subtitle is-6">{desceiption}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
