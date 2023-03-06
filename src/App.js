import './App.css';
import MercerdesImg from "./assets/classS.jpg";
import PanameraImg from "./assets/pana.jpg"
import BmwImg from "./assets/bmw.jpg"
import CarsList from './components/CarsList';
// import Proptypes from "prop-types"

function App(props) {
const carsList = [
  {
    id:0,
    title:"mercedes class s",
    carImg:MercerdesImg,
    price:`250 000$`
  },
  {
    id:1,
    title:"Porsche Panamera",
    carImg:PanameraImg,
    price:`150 000$`
  },
  {
    id:2,
    title:"BMW i8",
    carImg:BmwImg,
    price:`200 000$`
  }
];

  const PriceFunc = (title , price)=> alert(`you need to pay ${price} to buy ${title}` )
  const callBackFunc = (name)=>{
    // console.log(`this is callback function ${name}`)
    alert(`this is callback function ${name}`)
  }

  return (
    <div>
      <CarsList x={carsList} PriceFunc={PriceFunc} callBackFunc={callBackFunc} />
    </div>
  );
}

// App.defaultProps={
//   catName: "Sandy",    
//   eyeColor: "deepblue",    
//   age: 120
// }

// App.propTypes ={
//   catName : Proptypes.bool,
//   eyeColor: Proptypes.array,
//   age: Proptypes.number
// }

export default App;
