const Card = ({ name, ability, hp }) => {
  return (
    <div className="max-w-max">
      <div className="flex flex-col p-6 border border-solid border-blue-400">
        <div className="object-cover object-center">
          <img
            src="https://picsum.photos/200"
            alt="Pokemon img"
            className="w-full object-cover object-center"
          />
        </div>
        <div className="flex flex-wrap">
          <p className="w-full">Name :</p>
          <p className="w-full">Name :</p>
          <p className="w-full">Name :</p>
          <p className="w-full">Name :</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
