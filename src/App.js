import "./styles.css";

export default function App() {
  function createObject(first, last, school, gradYear, color) {
    return {
      first: first,
      last: last,
      school: school,
      gradYear: gradYear,
      color: color
    };
  }

  let classRoster = [{ first: "Traci" }, { first: "Enjun" }, { first: "Kyle" }];

  return (
    <div className="App">
      <h1>Class list</h1>
      <h2>Table will go here</h2>
    </div>
  );
}
