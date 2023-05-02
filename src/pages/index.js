import Link from "next/link";
import tw from "tailwind-styled-components";
import Map from "./components/Map";
import Konoha from "./konoha.jpg";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Gaben O'Neal</Name>
            <UserImage src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png" />
          </Profile>
        </Header>

        <ActionButtons>
          <ActionButton>
            <Link href="/search">
              <ActionImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
              Ride
            </Link>
          </ActionButton>
          <ActionButton>
            <ActionImage src="https://i.ibb.co/5RjchBg/bike.png" />
            Deal
          </ActionButton>
          <ActionButton>
            <ActionImage src="https://i.ibb.co/n776JLm/uberschedule.png" />
            Bike
          </ActionButton>
        </ActionButtons>

        <InputButton>Where To?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ActionItems = tw.div`
  flex-1 p-4
`;
const Header = tw.div`
  flex justify-between items-center
`;
const UberLogo = tw.img`
  h-28
`;
const Profile = tw.div`
  flex items-center
`;
const Name = tw.div`
  mr-2 w-20 text-sm
`;
const UserImage = tw.img`
  h-12 w-12 rounded-full border-gray-200 p-px
`;
const ActionButtons = tw.div`
  flex 
`;
const ActionButton = tw.div`
  bg-gray-200 flex-1 m-1 h-32 flex items-center flex-col justify-center font-bold rounded-lg transform hover:scale-105 transition text-xl
`;
const ActionImage = tw.img`
  h-3/5
`;
const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`;

