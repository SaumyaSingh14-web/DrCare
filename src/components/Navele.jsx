import Buttons from "./Buttons";
import NaveleName from "./NaveleName";

function Navele(){
    return(
        <div>
            <div className="md:flex">
                <NaveleName name = "home" />
                <NaveleName name = "about" />
                <NaveleName name = "doctor" />
                <NaveleName name = "departments" />
                <NaveleName name = "pricing"/>
                <NaveleName name = "blog" />
                <NaveleName name = "contact" />
                <Buttons btns = "Make An Appointment"/>
            </div>
            
        </div>
    );
}

export default Navele;