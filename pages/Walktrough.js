import { Box } from "../styles/styledComponents";
import { StyledDesktTextGrad } from "../styles/StyledText";
import WalkCard from "../components/WalkCard";
import workingPerson from "../assets/walkthrough/workingPerson.png";
import rocketMan from "../assets/walkthrough/rocketMan.png";
import hands from "../assets/walkthrough/hands.png";
import compass from "../assets/icons/compass.png";
import arrow from "../assets/icons/arrow.png";
import stars from "../assets/icons/stars.png";
//src, alt, icon, iconAlt, heading, description, rotate
function Walkthrough() {
  return (
    <Box>
      <Box className="cardsWrapper" justifyContent="center" bg="red" p="0">
        <WalkCard
          src={rocketMan}
          alt="rocketMan"
          icon={compass}
          iconAlt="compass"
          heading="1—browse"
          description="Browse our tech catalog with more than 20 top tech products"
          rotate="-3deg"
          overflow="hidden"
        />
        <WalkCard
          src={hands}
          alt="hands"
          icon={arrow}
          iconAlt="arrow"
          heading="2—choose"
          description="Exchange your hard earned AeroPoints for the item you want"
          overflow="hidden"
        />
        <WalkCard
          src={workingPerson}
          alt="working person"
          icon={stars}
          iconAlt="stars logo"
          heading="3—enjoy!"
          description="All done, you can relax! We’ll take care of delivery of your tech item!"
          rotate="3deg"
          overflow="hidden"
        />
      </Box>
    </Box>
  );
}

export default Walkthrough;
