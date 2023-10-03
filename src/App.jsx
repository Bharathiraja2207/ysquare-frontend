import { useState } from 'react'
import './App.css'
import { Routes, Route, useNavigate } from "react-router-dom";
import { FirstPage } from './FirstPage';
import { ThirdPage } from './thirdpage';
import { SecondPage } from './SecondPage';

export default function App() {
  const [search, setsearch] = useState("");
  const car = [
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVpx5BTyDSa0lQcVi814TXTr_INyAFcYzBQ&usqp=CAU",
      "carName": "Toyota RAV4",
      "model": "2021",
      "person": "4",
      "fuel": "Hybrid",
      "mileage": "6.1km/1-litre",
      "gearType": "Automatic",
      "price": "$620"

    },
    {
      "image": "data:image/jpeg;base64,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",
      "carName": "BMW 3 Series",
      "model": "2019",
      "person": "4",
      "fuel": "Gasoline",
      "mileage": "8.2km/1-litre",
      "gearType": "Automatic",
      "price": "$350"

    },
    {
      "image": "data:image/jpeg;base64,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",
      "carName": "Volkawagwn T-Cross",
      "model": "2020",
      "person": "4",
      "fuel": "Gasoline",
      "mileage": "5.3km/1-litre",
      "gearType": "Automatic",
      "price": "$400"

    },
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVpx5BTyDSa0lQcVi814TXTr_INyAFcYzBQ&usqp=CAU",
      "carName": "Toyota RAV4",
      "model": "2021",
      "person": "4",
      "fuel": "Hybrid",
      "mileage": "6.1km/1-litre",
      "gearType": "Automatic",
      "price": "$620"

    },
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVpx5BTyDSa0lQcVi814TXTr_INyAFcYzBQ&usqp=CAU",
      "carName": "Toyota RAV4",
      "model": "2021",
      "person": "4",
      "fuel": "Hybrid",
      "mileage": "6.1km/1-litre",
      "gearType": "Automatic",
      "price": "$620"

    },
    {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVpx5BTyDSa0lQcVi814TXTr_INyAFcYzBQ&usqp=CAU",
      "carName": "Toyota RAV4",
      "model": "2021",
      "person": "4",
      "fuel": "Hybrid",
      "mileage": "6.1km/1-litre",
      "gearType": "Automatic",
      "price": "$620"

    }]
    const car1 = [{
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVpx5BTyDSa0lQcVi814TXTr_INyAFcYzBQ&usqp=CAU",
      "carName": "Toyota RAV4",
      "model": "2021",
      "person": "4",
      "fuel": "Hybrid",
      "mileage": "6.1km/1-litre",
      "gearType": "Automatic",
      "price": "$620"
  },
  {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVpx5BTyDSa0lQcVi814TXTr_INyAFcYzBQ&usqp=CAU",
      "carName": "bmw",
      "model": "2021",
      "person": "4",
      "fuel": "Hybrid",
      "mileage": "6.1km/1-litre",
      "gearType": "Automatic",
      "price": "$620"
  },
  {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVpx5BTyDSa0lQcVi814TXTr_INyAFcYzBQ&usqp=CAU",
      "carName": "audi",
      "model": "2021",
      "person": "4",
      "fuel": "Hybrid",
      "mileage": "6.1km/1-litre",
      "gearType": "Automatic",
      "price": "$620"
  },
  {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVpx5BTyDSa0lQcVi814TXTr_INyAFcYzBQ&usqp=CAU",
      "carName": "Toyota RAV4",
      "model": "2021",
      "person": "4",
      "fuel": "Hybrid",
      "mileage": "6.1km/1-litre",
      "gearType": "Automatic",
      "price": "$620"
  },
  {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVpx5BTyDSa0lQcVi814TXTr_INyAFcYzBQ&usqp=CAU",
      "carName": "Toyota RAV4",
      "model": "2021",
      "person": "4",
      "fuel": "Hybrid",
      "mileage": "6.1km/1-litre",
      "gearType": "Automatic",
      "price": "$620"
  },
  {
      "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVpx5BTyDSa0lQcVi814TXTr_INyAFcYzBQ&usqp=CAU",
      "carName": "Toyota RAV4",
      "model": "2021",
      "person": "4",
      "fuel": "Hybrid",
      "mileage": "6.1km/1-litre",
      "gearType": "Automatic",
      "price": "$620"
  }];
  const car2 = [{
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVpx5BTyDSa0lQcVi814TXTr_INyAFcYzBQ&usqp=CAU",
    "carName": "Toyota RAV4",
    "model": "2021",
    "person": "4",
    "fuel": "Hybrid",
    "mileage": "6.1km/1-litre",
    "gearType": "Automatic",
    "price": "$620"
},
{
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVpx5BTyDSa0lQcVi814TXTr_INyAFcYzBQ&usqp=CAU",
    "carName": "bmw",
    "model": "2021",
    "person": "4",
    "fuel": "Hybrid",
    "mileage": "6.1km/1-litre",
    "gearType": "Automatic",
    "price": "$620"
},
{
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVpx5BTyDSa0lQcVi814TXTr_INyAFcYzBQ&usqp=CAU",
    "carName": "benz",
    "model": "2021",
    "person": "4",
    "fuel": "Hybrid",
    "mileage": "6.1km/1-litre",
    "gearType": "Automatic",
    "price": "$620"
},
{
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVpx5BTyDSa0lQcVi814TXTr_INyAFcYzBQ&usqp=CAU",
    "carName": "Toyota RAV4",
    "model": "2021",
    "person": "4",
    "fuel": "Hybrid",
    "mileage": "6.1km/1-litre",
    "gearType": "Automatic",
    "price": "$620"
},
{
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVpx5BTyDSa0lQcVi814TXTr_INyAFcYzBQ&usqp=CAU",
    "carName": "Toyota RAV4",
    "model": "2021",
    "person": "4",
    "fuel": "Hybrid",
    "mileage": "6.1km/1-litre",
    "gearType": "Automatic",
    "price": "$620"
},
{
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsVpx5BTyDSa0lQcVi814TXTr_INyAFcYzBQ&usqp=CAU",
    "carName": "Toyota RAV4",
    "model": "2021",
    "person": "4",
    "fuel": "Hybrid",
    "mileage": "6.1km/1-litre",
    "gearType": "Automatic",
    "price": "$620"
}];
  return (
    <div class="App">
      <Navbar car={car} search={search} setsearch={setsearch}/>
      <Routes>
        <Route path="/" element={<CardCont car={car} search={search} setsearch={setsearch}/>} />
        <Route path="/1" element={<FirstPage car1={car1} search={search} setsearch={setsearch}/>} />
        <Route path="/2" element={<SecondPage car2={car2} search={search} setsearch={setsearch}/>} />
         <Route path="/3" element={<ThirdPage />} />
        {/* <Route path="/4" element={<FourthPage />} />
        <Route path="/5" element={<FifthPage />} />
        <Route path="/6" element={<SixthPage />} />
        <Route path="/7" element={<SeventhPage />} />
        <Route path="/8" element={<EightPage />} />
        <Route path="/9" element={<NinethPage />} />
        <Route path="/10" element={<TenthPage />} />  */}
      </Routes>

      <Pagination />
    </div>
  )
}

function Navbar({car,search,setsearch}) {
 
console.log(search)
  return (
    <div className="navbar">
      <input type="text" onChange={(event) => setsearch(event.target.value)} />
      <p>Relevance <i class="bi bi-chevron-down"></i></p>
      <p>All brands <i class="bi bi-chevron-down"></i></p>
    </div>
  )
}

function CardCont({car,search,setsearch}) {
  
  return (
    <div className="card-container">
      {car.filter((mv) => {
          if (search === "") {
            return mv;
          } else if (mv.carName.toLowerCase().includes(search.toLowerCase())) {
            return mv;
          }
        }).map((car,index) => <Card car={car} key={index} />)}
      {/* {car.map((car, index) => <Card car={car} key={index} />)} */}
    </div>
  )
}
function Card({ car }) {

  return (
    <div className="card">
      <div className="card-content">
        <img className="car-image" src={car.image} />
        <div className="carName">
          <h3>{car.carName}</h3>
          <p className="model">{car.model}</p>
        </div>
        <div className="car-content">
          <p><i class="bi bi-people"></i>{car.person} People</p>
          <p><i class="bi bi-fuel-pump"></i>{car.fuel}</p>

        </div>
        <div className="car-content">

          <p><i class="bi bi-speedometer"></i>{car.mileage}</p>
          <p><i class="fa-solid fa-steering-wheel"></i>{car.gearType}</p>
        </div>
        <div className="car-price">
          <h2>{car.price}/month</h2>
          <div className="rent-button">
            <span><i class="bi bi-suit-heart"></i></span>
            <button class="btn btn-primary">Rent Now</button>
          </div>
        </div>
      </div>
    </div >
  )
}

function Pagination() {
  const navigate = useNavigate()
  return (
    <div className="pagination">
      <span onClick={() => navigate(-1)}><i class="bi bi-chevron-left"></i></span>
      <span onClick={() => navigate("/1")}>1</span>
      <span onClick={() => navigate("/2")}>2</span>
      <span onClick={() => navigate("/1")}>3</span>
      <span onClick={() => navigate("/1")}>4</span>
      <span onClick={() => navigate("/1")}>5</span>
      <span onClick={() => navigate("/1")}>6</span>
      <span onClick={() => navigate("/1")}>7</span>
      <span onClick={() => navigate("/1")}>8</span>
      <span onClick={() => navigate("/1")}>9</span>
      <span onClick={() => navigate("/1")}>10</span>
      <span onClick={() => navigate(+1)}><i class="bi bi-chevron-right"></i></span>
    </div>
  )
}