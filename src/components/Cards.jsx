function Cards(props){
    return(
        <div className="bg-blue-500 h-min p-2 md:h-min">
            <div className="text-white font-semibold mt-4 p-2">{props.title}</div>
            <div className="text-white text-sm p-2">{props.description}</div>
        </div>
    );
}

export default Cards;