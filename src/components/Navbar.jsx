import Navele from "./Navele";

function Navbar(){
    return(   
        <div>
            <ul className="bg-yellow-200 h-14 text-gray-500 flex">
                <Navele naveleName = "home" />
                <Navele naveleName = "about" />
                <Navele naveleName = "doctor" />
                <Navele naveleName = "departments" />
                <Navele naveleName = "prising" />
                <Navele naveleName = "blog" />
                <Navele naveleName = "contact" />
                <Navele buttons = "Make An Appointment" />
            </ul>
        </div>
    );
}

export default Navbar;