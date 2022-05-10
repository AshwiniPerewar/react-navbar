import logo from "./logo.svg";
import hello from "./components/Answer.js";

function App
()
{
  let info=[
      { name:"Ash", place:"India"},
      {name : "Sneha", place:"USA"},
      {name: "pu", place:"Russia"},
  ];

  return
  (
      <div className="App">
          <Hello></Hello>
          (info.map(use)=>
          {
              <div><Answer{...user}/>
              </div>
          })
      </div>
  );
}

export default App;