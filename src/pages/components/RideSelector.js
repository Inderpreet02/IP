import tw from "tailwind-styled-components";
import React, { useState, useEffect } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db } from "@/firebase";

const Cars = [
  {
    key: 1,
    src: "https://i.ibb.co/cyvcpfF/uberx.png",
    title: "Uber",
    time: "10 mins away",
    price: 2,
  },
  {
    key: 2,
    src: "https://i.ibb.co/cyvcpfF/uberx.png",
    title: "Uber",
    time: "20 mins away",
    price: 0.5,
  },
  {
    key: 3,
    src: "https://i.ibb.co/cyvcpfF/uberx.png",
    title: "Uber",
    time: "30 mins away",
    price: 1,
  },
  {
    key: 4,
    src: "https://i.ibb.co/cyvcpfF/uberx.png",
    title: "Uber",
    time: "40 mins away",
    price: 1.2,
  },
  {
    key: 5,
    src: "https://i.ibb.co/cyvcpfF/uberx.png",
    title: "Uber",
    time: "50 mins away",
    price: 1,
  },
  {
    key: 6,
    src: "https://i.ibb.co/cyvcpfF/uberx.png",
    title: "Uber",
    time: "50 mins away",
    price: 4,
  },
  {
    key: 7,
    src: "https://i.ibb.co/cyvcpfF/uberx.png",
    title: "Uber",
    time: "50 mins away",
    price: 1,
  },
];

const RideSelector = ({
  pickupCoordinates,
  dropoffCoordinates,
  pickup,
  dropoff,
}) => {
  const [rideDuration, setRideDuration] = useState(0);

  useEffect(() => {
    const getCoordinates = () =>
      fetch(
        `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?access_token=pk.eyJ1IjoiaXRzanVzdGJsdWUiLCJhIjoiY2xnc2JwZzY5MGpsazNncXZ0bzhzZGtlbSJ9.C2MABRa1vlZb0j5FksReXA`
      )
        .then((res) => res.json())
        .then((data) => {
          setRideDuration(data.routes[0].duration / 8);
        });

    if (pickupCoordinates[0] != 0) {
      getCoordinates();
    }
  }, [pickupCoordinates, dropoffCoordinates]);

  const createRide = async (pickup, dropoff) => {
    try {
      db.collection(pickup).add({
        dropoff: dropoff,
        created: serverTimestamp(),
      })
    } catch (error) {
      console.log("Error in createRide", error);
    }
  };
  useEffect(() => {
    createRide(pickup, dropoff)
  }, [pickup, dropoff]);
  return (
    <Wrapper>
      <Title>Choose a Ride</Title>

      <CarList>
        {Cars.map((car) => (
          <Car key={car.key}>
            <CarImage src={car.src} />
            <CarDetails>
              <Service>{car.title}</Service>
              <Time>{car.time}</Time>
            </CarDetails>
            <Price>{`Rs. ${(car.price * rideDuration).toFixed(2)}`}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const Wrapper = tw.div`
    flex-1 overflow-y-scroll
`;
const Title = tw.div`
    text-gray-500 text-center text-sm py-2 border-b 
`;
const CarList = tw.div`
  overflow-y-scroll
`;

const Car = tw.div`
    flex p-4 items-center text-xl
`;
const CarImage = tw.img`
    h-14 mr-2
`;
const CarDetails = tw.div`
    flex-1
`;
const Service = tw.div`
    font-bold
`;
const Time = tw.div`
    text-sm text-blue-400
`;
const Price = tw.div`
    text-sm font-bold
`;

const Temp = tw.div`
`;
