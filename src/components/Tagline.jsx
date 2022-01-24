function Tagline(props){
    return(
        <div>
            <div className={`text-lg md:text-5xl font-sans font-bold text-black ${props.className}`}>{props.tagLine}</div>
            <div className={`uppercase font-semibold my-4 text-sm text-gray-500 ${props.className}`}>{props.tagLine2}</div>
        </div>

    );

}

export default Tagline;