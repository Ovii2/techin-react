import "./index.css";
import "./dev-data/skills";

import Avatar from "./Components/Avatar.jsx";
import Data from "./Components/Data.jsx";
import Skills from "./Components/Skills.jsx";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Data />
        <Skills />
      </div>
    </div>
  );
}

export default App;
