function Summary({ img, title, description }) {
  return (
    <div className="flex flex-col items-center">
      <img src={img} alt="" className="max-h-[170px]" />
      <div className="flex flex-col items-center gap-[10px]">
        <h1 className="font-poppins font-medium text-xl text-orange-500">
          {title}
        </h1>
        <p className="font-poppins text-xs text-center text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}

export default Summary;
