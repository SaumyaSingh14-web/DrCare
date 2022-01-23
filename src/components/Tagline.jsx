function Tagline(props){
    return(
        <div className={`${props.className}`}>
            <div className="text-6xl font-sans font-bold text-black">{props.tagLine}</div>
            <div className="uppercase text-sm text-gray-400 ">{props.tagLine2}</div>
        </div>

    );

}

export default Tagline;