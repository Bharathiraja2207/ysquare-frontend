import { useState } from "react";

export function ThirdPage() {
    const car3 = [{
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
    const[vissable,setvissable]=useState(2)
    const loadmore=()=>{
        setvissable((prevcount)=>prevcount+2)
    }
    return (
      <div className="card-container">
        {car3.slice(0,vissable).map((car, index) => <ThirdPageCards car={car} key={index} />)}
        <button onClick={loadmore}>loadmore</button>
      </div>
    );
  }
  function ThirdPageCards({ car }) {
  
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
      </div>
    );
  }
  