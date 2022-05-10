import './App.css';
import Logo from './components/nav';
import Links from './components/links';
import Btn from './components/button';


function App() {
  let links=[
    {l:"Services"},
    {l:"Projects"},
    {l:"About"},
  ];
  return (
    <div className="App">
      <Logo/>
      {links.map((user)=>
      (
        <div>
          <Links {...user}/>
          </div>
      ))
      }
      <Btn/>
    </div>
  );
}

export default App;
