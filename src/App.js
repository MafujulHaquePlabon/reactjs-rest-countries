/* import logo from "./logo.svg"; */ 
import "./App.css";
import Countries from "./components/Countries/Countries";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div>
        <Header></Header>
        <Countries></Countries>
        <Footer></Footer>

        {/* <LoadCountries></LoadCountries> */}
      </div>
    </div>
  );
}

/* function LoadCountries(){
  const [countries,setCountries]=useState([])
  useEffect(()=>{
    fetch("https://restcountries.com/v2/all")
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])
  return (
    <div>
      <h1>Visiting Every Country of the world!!!!!</h1>
      <h3>Available Countries:{countries.length}</h3>
     {
       countries.map(country=><Country name={country}></Country>)
     }
    </div>
  )
}
function Country(props){
  console.log(props.name.population)
  return(
    <div>
      <h2>Country Name:{props.name.name}</h2>
      <h4>Population:{props.name.population}</h4>
    </div>
  )
}
  */
export default App;
