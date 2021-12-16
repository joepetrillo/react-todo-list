import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>My Pets</h1>
      <Pet name="Carly" animal="Dog" breed="Black Lab" />
      <Pet name="Lucas" animal="Cat" breed="House Cat" />
      <Pet name="Gibby" animal="Fish" breed="Goldfish" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
