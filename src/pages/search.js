import Link from "next/link";
import React, {useState} from "react";
import tw from "tailwind-styled-components";

const Search = () => {

    const [pickup, setPickup] = useState("")
    const [dropoff, setDropoff] = useState("")
  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>

      <InputContainer>
        <FronToIcons>
          <Circle src="https://img.icons8.com/ios-filled/50/9CA3Af/filled-circle.png" />
          <Line src="https://img.icons8.com/ios/50/9CA3Af/vertical-line.png" />
          <Square></Square>
        </FronToIcons>
        <InputBoxes>
          <Input placeholder="Enter pickup location" onChange={(e) => setPickup(e.target.value)} value={pickup}/>
          <Input placeholder="Where to?" onChange={(e) => setDropoff(e.target.value)} value={dropoff}/>
        </InputBoxes>
        <Plus src="https://img.icons8.com/ios/50/9CA3Af/plus-math.png" />
      </InputContainer>
      <SavedPlaces>
        <StarIcon src="https://img.icons8.com/ios-filled/50/ffffff/star--v1.png" />
        Saved Places
      </SavedPlaces>
      <Link
        href={{
          pathname: "/confirm",
          query: {
            pickup: pickup,
            dropoff: dropoff,
          },
        }}
      >
        <ConfirmButtonContainer>Confirm Locations</ConfirmButtonContainer>
      </Link>
    </Wrapper>
  );
};

export default Search;

const Wrapper = tw.div`
    bg-gray-200 h-screen
`;
const ButtonContainer = tw.div`
    bg-white px-4
`;
const BackButton = tw.img`
    h-12
`;
const InputContainer = tw.div`
    bg-white flex items-center px-4 mb-2
`;
const FronToIcons = tw.div`
    w-10 flex flex-col mr-2 items-center
`;
const Circle = tw.img`
    h-2.5
`;
const Line = tw.img`
    h-10    
`;
const Plus = tw.img`
    h-10 w-10 bg-gray-200 rounded-full ml-3
`;
const Square = tw.div`
    h-2 w-2 bg-black m-1
`;
const InputBoxes = tw.div`
    flex flex-col flex-1
`;
const Input = tw.input`
h-10 bg-gray-200 my-2 rounded-2 p-2 outline-none border-none
`;

const SavedPlaces = tw.div`
    flex items-center bg-white px-4 py-2 font-bold
`;

const StarIcon = tw.img`
    bg-gray-400 w-10 h-10 p-2 rounded-full mr-2
`;
const ConfirmButtonContainer = tw.div`
    bg-black text-white text-center mt-2 mx-4 px-4 py-3 text-2xl cursor-pointer
`;
