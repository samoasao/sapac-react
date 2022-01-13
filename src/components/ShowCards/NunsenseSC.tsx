import ShowCard from "../ShowCard";
import nunsenseLogo from "../../images/promos/nunsenseLogo.png";

const NunsenseSC = () => (
  <ShowCard
    image={nunsenseLogo}
    showInfoURL="/tickets"
    title="Nunsense"
    byline="Written by Dan Goggin"
    location={[
      "Desert View High School",
      "4101 E Valencia Rd.",
      "Tucson, AZ 85706",
    ]}
    performanceDate={[
      "September 24th - 26th",
      "October 1st - 3rd",
      "Fridays @ 7pm, Saturdays @ 2pm and 7pm, Sundays @ 2pm",
    ]}
  >
    <hr id="nunsense"></hr>
    <p>
      <em>Nunsense</em> is a hilarious spoof about the misadventures of five
      nuns trying to manage a fundraiser. Sadly, the rest of the sisterhood died
      from poisoning after eating vichyssoise prepared by Sister Julia Child of
      God. Thus, the remaining nuns – ballet-loving Sister Leo, street-wise
      Sister Robert Anne, befuddled Sister Mary Amnesia, the Mother Superior
      Sister Regina, and mistress of the novices Sister Mary Hubert – stage a
      talent show in order to raise the money to bury their dearly departed.
      With catchy songs and irreverent comedy and directed by MAC-winning
      director Samantha Cormier, <em>Nunsense</em> is sure to keep audiences
      rolling with laughter!
    </p>
  </ShowCard>
);

export default NunsenseSC;
