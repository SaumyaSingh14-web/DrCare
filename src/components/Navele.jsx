function Navele(props){
    return(
        <div>
        <div>
            <li className="font-semibold text-sm max-w-screen-lg p-4 hover:text-blue-400 uppercase">{props.naveleName}</li>
        </div>

        <div className="flex justify-items-end">
            {props.buttons && <button className="bg-amber-500 text-white text-sm p-2 rounded-full">{props.buttons}</button>}
        </div>
        </div>
    );
}

export default Navele;