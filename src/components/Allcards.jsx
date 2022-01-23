import Cards from "./Cards";

function Allcards(){
    return(
        <div className="md:flex md:ml-12 md:mr-12 bg-local">
        <Cards title= "Qualified Doctors" description = "even all-powerful pointing has no control about the blind texts it is almost an unorthoraphic." className = "bg-blue-400"/>
        <Cards title= "Emergency Care" description = "even all-powerful pointing has no control about the blind texts it is almost an unorthoraphic."/>
        <Cards title= "Outdoor Checkup" description = "even all-powerful pointing has no control about the blind texts it is almost an unorthoraphic." className = "bg-blue-400"/>
        <Cards title= "24 Hours Service" description = "even all-powerful pointing has no control about the blind texts it is almost an unorthoraphic."/>
        </div>
    );
}

export default Allcards;