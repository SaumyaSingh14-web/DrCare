import Navbar from "./components/Navbar";
import bgimage from "./images/img1.jpg";
import Buttons from "./components/Buttons";
import Allcards from "./components/Allcards";

function App() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto md:hidden">
        <img src={bgimage} />
      </div>

      <div className="bg-[url('./images/img1.jpg')] hidden md:flex min-w-full min-h-screen bg-no-repeat bg-cover px-20">
        <div>
          Helping Your Stay Happy One Everyday we bring hope and smile to the
          patient we serve
          <Buttons btns="View our works" className="" />
        </div>
      </div>
      <Allcards />
    </div>
  );
}

export default App;
