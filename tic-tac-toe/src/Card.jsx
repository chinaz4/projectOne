

function Card({title, description, buttonText}){
    return(
        <div className="max-w-4xl w-2/3 grid gap-3 lg:grid-cols-3 lg:items-center bg-amber-400 rounded-2xl py-5 px-10" >
        <h1 className="text-xl font-bold text-gray-800 mb-3">{title}</h1>
        <p className="text-gray-600 text-sm leading-relaxed italic ">{description}</p>
        <button className="mt-6 lg:mt-0 w-full bg-gray-400 text-black py-2 rounded-lg font-medium hover:bg-gray-500 transition-colors duration-300  ">{buttonText}</button>
        </div>
    )
} 


export default Card;