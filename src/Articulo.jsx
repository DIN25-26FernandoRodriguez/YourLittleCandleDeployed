function Articulo(props) {
    const { image, name, price, description } = props;



  return (
     <article
      tabIndex={0}
      className="flex flex-col items-start gap-3 rounded-lg hover:shadow-lg focus:shadow-lg transition-shadow duration-300">

<div className="bg-white border-3 shadow-md overflow-hidden flex flex-col items-center text-left hover:shadow-lg transition-shadow duration-300 w-80 p-5 rounded-2xl">
        <figure className="w-full rounded-lg overflow-hidden">
      <img className=" w-fit object-cover rounded-2xl p-1" src={image} alt={name}/>
      <figcaption className="sr-only">{props.children}</figcaption>
      </figure>
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
        <h2 className="text-lg text-gray-700 mb-2">{price}</h2>
        <p>{description}</p>
      </div>
    </div>
    </article>

    
  );
}
export default Articulo;
