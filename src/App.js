import Navbar from "./components/Navbar";
import bgimage from "./images/img1.jpg";
import Buttons from "./components/Buttons";
import Allcards from "./components/Allcards";

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <Allcards />
      </div>

      {/* <div>
        <div className="mx-auto">
          <img src={bgimage} alt="" />
        </div>

        <h1>Helping Your</h1>
        <h1>Stay Happy One</h1>
        <Buttons btns="View our works" />
      </div> */}
    </div>
  );
}

export default App;
