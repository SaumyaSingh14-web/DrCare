import Navbar from "./components/Navbar";
import bgimage from "./images/img1.jpg";
import Buttons from "./components/Buttons";
import Allcards from "./components/Allcards";
import Tagline from "./components/Tagline";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto md:hidden">
        <img src={bgimage} />
      </div>

      <div className="bg-[url('./images/img1.jpg')] hidden md:flex min-w-full min-h-screen bg-no-repeat bg-cover px-20">
        <Tagline tagLine="Helping Your" />
        <Tagline tagLine="Stay Happy One" className="text-blue-400" />
        <Tagline tagLine2="One Everyday we bring hope and smile to the patient we serve" />
        <Buttons btns="View our works" />
      </div>
      <Allcards />
    </div>
  );
}

export default App;
