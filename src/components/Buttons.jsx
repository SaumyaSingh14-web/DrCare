function Buttons(props){
    return(
        <div>
            {props.btns && <button className={`bg-amber-500 text-white text-sm font-semibold p-3 mt-1 mb-1 rounded-full hover:bg-yellow-600 ${props.className}`}>{props.btns}</button>}
        </div>
    );
}

export default Buttons; 