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

      <div className="bg-[url('./images/img1.jpg')] hidden md:flex flex-col min-w-full min-h-screen bg-no-repeat bg-cover md:p-28">
        <Tagline tagLine="Helping Your" className="text-blue-500" />
        <Tagline tagLine="Stay Happy One" />
        <Tagline tagLine2="One Everyday we bring hope and smile to the patient we serve" />
        <Buttons btns="View our works" />
      </div>
      <Allcards />
    </div>
  );
}

export default App;
