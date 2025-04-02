const UserFeedCard = (userData) => {
  console.log(userData);

  const { firstName, lastName, photoURL, skills, description, age, gender } =
    userData?.user;

  return (
    <div className="card  bg-base-300 my-20 mx-auto w-96 shadow-lg">
      <figure className="px-10 pt-10">
        <img src={photoURL} alt={firstName + "photo"} className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{firstName + " " + lastName}</h2>
        {skills && <p>{skills}</p>}
        <p>
          {age} - {gender}
        </p>
        {description && <p>{description}</p>}
        <div className="card-actions">
          <button className="btn bg-primary">Ignore</button>
          <button className="btn  bg-secondary">Interested</button>
        </div>
      </div>
    </div>
  );
};

export default UserFeedCard;
