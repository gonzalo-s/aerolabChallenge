import { Box } from "../styles/styledComponents";
import {
  WalkthroughVrImg,
  WalkthroughBgGradient,
  WalkthroughWrapper,
  WalkthroughRelativeWrapper,
} from "../styles/styledWalktrough";
import Image from "next/image";
import WalkCard from "../components/WalkCard";
import workingPerson from "../assets/walkthrough/workingPerson.png";
import rocketMan from "../assets/walkthrough/rocketMan.png";
import hands from "../assets/walkthrough/hands.png";
import compass from "../assets/icons/compass.png";
import arrow from "../assets/icons/arrow.png";
import stars from "../assets/icons/stars.png";
import HeroImage from "../assets/heroImage912.png";

//src, alt, icon, iconAlt, heading, description, rotate
function Walkthrough() {
  return (
    <WalkthroughWrapper>
      <WalkthroughRelativeWrapper>
        <WalkthroughVrImg>
          <Image src={HeroImage} alt="tech zone hero image" />
        </WalkthroughVrImg>
        <WalkthroughBgGradient>
          <WalkCard
            src={rocketMan}
            alt="rocketMan"
            icon={compass}
            iconAlt="compass"
            heading="1—browse"
            description="Browse our tech catalog with more than 20 top tech products"
            rotate="-3deg"
            m="0 0 0 0"
          />
          <WalkCard
            src={hands}
            alt="hands"
            icon={arrow}
            iconAlt="arrow"
            heading="2—choose"
            description="Exchange your hard earned AeroPoints for the item you want"
            zIndex="5"
            m="-5rem 0 0 -5rem"
          />
          <WalkCard
            src={workingPerson}
            alt="working person"
            icon={stars}
            iconAlt="stars logo"
            heading="3—enjoy!"
            description="All done, you can relax! We’ll take care of delivery of your tech item!"
            rotate="3deg"
            zIndex="10"
            m="0 0 0 -5rem"
          />
        </WalkthroughBgGradient>
      </WalkthroughRelativeWrapper>
    </WalkthroughWrapper>
  );
}

export default Walkthrough;
