import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import RideSelector from "./components/RideSelector";

const confirm = () => {
  const router = useRouter();
  const { pickup, dropoff, username } = router.query;

  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

  const getPickupCoordinates = (pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiaXRzanVzdGJsdWUiLCJhIjoiY2xnc2JwZzY5MGpsazNncXZ0bzhzZGtlbSJ9.C2MABRa1vlZb0j5FksReXA",
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = (dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoiaXRzanVzdGJsdWUiLCJhIjoiY2xnc2JwZzY5MGpsazNncXZ0bzhzZGtlbSJ9.C2MABRa1vlZb0j5FksReXA",
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <BackButton>
        <Link href="/search">
          <Black src="https://img.icons8.com/ios-filled/50/000000/left.png"/>
        </Link>
      </BackButton>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />
      <RideContainer>
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
          pickup={pickup}
          dropoff={dropoff}
          username={username}
        />
        <ComfirmButtonContainer>
          <Link href="/final">
            <ConfirmButton>Confirm Ride</ConfirmButton>
          </Link>
        </ComfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default confirm;

const Wrapper = tw.div`
    flex h-screen flex-col
`;
const RideContainer = tw.div`
    flex-1 flex flex-col h-1/2
`;

const ComfirmButtonContainer = tw.div`
`;
const ConfirmButton = tw.div`
    bg-black text-white my-4 mx-4 py-4 text-center text-xl
    
`;
const BackButton = tw.div`
  rounded-full absolute top-4 left-4 z-10 bg-white shandow-md cursor-pointer
`;
const Black = tw.img`
  h-full object-contain
`;
