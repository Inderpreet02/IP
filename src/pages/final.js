import tw from "tailwind-styled-components";
import React from "react";
import Map from "./components/Map";
import { useRouter } from "next/router";

const Final = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;
  return (
    <Wrapper>
      <MapContainer>
        <Map pickupCoordinates={pickup} dropoffCoordinates={dropoff}/>
      </MapContainer>
    </Wrapper>
  );
};

export default Final;

const Wrapper = tw.div`
    flex h-screen flex-col
`;
const MapContainer = tw.div`
    flex h-screen flex-col
`;
const temp = tw.div`
`;
