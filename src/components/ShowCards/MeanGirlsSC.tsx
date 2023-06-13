import ShowCard from "../ShowCard";
import meanGirlsLogo from "../../images/promos/MeanGirlsTix.png";
import { Link } from "react-router-dom";

const MeanGirlsSC = () => (
  <ShowCard
    image={meanGirlsLogo}
    title="Mean Girls:  The Musical (High School Version)"
    byline={[
      "Book by Tina Fey",
      "Music by Jeff Richmond",
      "Lyrics by Neil Benjamin",
      "",
      "Directed by Kaitlin Bertenshaw",
      "Music Direction by Nicky Manlove",
    ]}
    location={[
      "Berger Performing Arts Center",
      "1200 W Speedway Blvd.",
      "Tucson, AZ 85745",
    ]}
    performanceDate={[
      "July 14th at 6:30pm",
      "July 15th at 1:30pm and 6:30pm",
      "July 16th at 1:30pm",
      "July 16th at 6:30pm (special understudy showcase)",
    ]}
  >
    <div className="py-1" id="meangirls" />

    <Link to="/tickets" className="btn btn-info btn-lg">
      Buy Tickets
    </Link>
    <hr></hr>
    <p>
      Cady Heron may have grown up on an African savanna, but nothing prepared
      her for the wild and vicious ways of her strange new home: suburban
      Illinois. How will this naïve newbie rise to the top of the popularity
      pecking order? By taking on The Plastics, a trio of lionized frenemies led
      by the charming but ruthless Regina George. But when Cady and her friends
      devise a "Revenge Party" to end Regina's reign, she learns the hard way
      that you can't cross a Queen Bee without getting stung.
    </p>
    <p>
      Adapted from Fey's hit 2004 film, Mean Girls was nominated for a
      staggering 12 Tony Awards. This queen-bee took Broadway by storm and has
      joined the musical in-crowd.
    </p>
    <p>
      This summer you will see the Tucson Premiere of "Mean Girls: The Musical
      (High School Version)". What could be more fetch?
    </p>
    <p>
      This production is the final presentation of the first Musical Theater
      Summer Camp between Southern Arizona Performing Arts Company and The Inner
      Voice Studio. These high schoolers will blow you away!
    </p>
  </ShowCard>
);

export default MeanGirlsSC;
