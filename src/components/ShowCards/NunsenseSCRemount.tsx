import ShowCard from "../ShowCard";
import nunsenseLogo from "../../images/promos/nunsenseRmLogo.jpeg";
import { Link } from "react-router-dom";

const NunsenseSCRemount = () => (
  <div id="nunsense">
    <ShowCard
      image={nunsenseLogo}
      showInfoURL="/tickets"
      title="Nunsense"
      byline="Written by Dan Goggin"
      location={[
        "The Gaslight Music Hall",
        "13005 N Oracle Rd.",
        "Tucson, AZ 85739",
      ]}
      performanceDate={["June 5th - 6pm"]}
    >
      <hr></hr>

      <p>
        <em>Nunsense</em> is a hilarious spoof about the misadventures of five
        nuns trying to manage a fundraiser. Sadly, the rest of the sisterhood
        died from poisoning after eating vichyssoise prepared by Sister Julia
        Child of God. Thus, the remaining nuns – ballet-loving Sister Leo,
        street-wise Sister Robert Anne, befuddled Sister Mary Amnesia, the
        Mother Superior Sister Regina, and mistress of the novices Sister Mary
        Hubert – stage a talent show in order to raise the money to bury their
        dearly departed. With catchy songs and irreverent comedy and directed by
        MAC-winning director Samantha Cormier, <em>Nunsense</em> is sure to keep
        audiences rolling with laughter!
      </p>
      {/* <Link to="/tickets" className="btn btn-info btn-lg">
        Buy Tickets Here
      </Link> */}
    </ShowCard>
  </div>
);

export default NunsenseSCRemount;
