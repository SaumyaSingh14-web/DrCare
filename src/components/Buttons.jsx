function Buttons(props){
    return(
        <div>
            <li>
                {props.btns && <button className="bg-amber-500 text-white text-sm font-semibold p-3 mt-1 mb-1 rounded-full hover:bg-yellow-600">{props.btns}</button>}
            </li>
        </div>
    );
}

export default Buttons; 