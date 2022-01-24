function Tagline(props){
    return(
        <div>
            <div className={`sm:text-lg md:text-5xl font-sans font-bold text-black ${props.className}`}>{props.tagLine}</div>
            <div className={`uppercase sm:text-xs font-semibold md:my-4 md:text-sm text-gray-500 ${props.className}`}>{props.tagLine2}</div>
        </div>

    );

}

export default Tagline;