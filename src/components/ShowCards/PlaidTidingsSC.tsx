import ShowCard from "../ShowCard";
import plaidTidingsLogo from "../../images/promos/PlaidTidingsLogo.png";
import { Link } from "react-router-dom";

const PlaidTidingsSC = () => (
  <ShowCard
    image={plaidTidingsLogo}
    showInfoURL="/plaidTidings"
    title="Forever Plaid: Plaid Tidings"
    byline="Written by Stuart Ross"
    location={[
      "Cabaret Theatre at Arizona Theatre Company",
      "330 S Scott Ave.",
      "Tucson, AZ 85701",
      " ",
      "CPAC",
      "1250 W Continental Rd",
      "Green Valley, AZ 85622",
    ]}
    performanceDate={[
      "Cabaret Theatre at Arizona Theatre Company:",
      "December 4th, 2021 @ 3pm & 7pm",
      "December 5th, 2021 @ 3pm ",
      " ",
      "CPAC:",
      "December 17th, 2021 @ 3pm & 7pm",
      "December 18th, 2021 @ 3pm & 7pm",
    ]}
  >
    <div className="py-1" />
    <Link to="/plaidTidings" className="btn btn-info btn-lg">
      Cast and Creative Team
    </Link>
    <hr></hr>
    <p>
      <em>Forever Plaid: Plaid Tidings</em> is a brand new show that offers the
      best of Forever Plaid, tied up in a nifty package with a big Christmas bow
      on top! Filled with Christmas standards that have all been "Plaid-erized,"
      our boys are back to do their Christmas Special.
    </p>
    <p>
      At first, Frankie, Jinx, Smudge and Sparky aren't sure why they've
      returned to Earth for another posthumous performance, but a phone call
      from the heavenly Rosemary Clooney lets them know that they're needed to
      put a little harmony into a discordant world. Sprinkled among the
      Christmas offerings are audience favorites, like their riotous
      three-minute-and-eleven-second version of The Ed Sullivan Show – this
      time, featuring the Rockettes, the Chipmunks and The Vienna Boys Choir, as
      well as a Plaid Caribbean Christmas that puts the "Day-O" in Excelsis!
    </p>
    <p>
      This truly "heaven-sent" holiday treat will lift audiences' spirits and
      fill them with nostalgia for a bygone era of classic music sung in perfect
      harmony.
    </p>
    <p>
      The cast includes the original productions' very talented cast of Xander
      Mason, Topher Esguerra, Liam Boyd and Danny Fapp.
    </p>
    <p>
      Put yourself in the holiday mood and see this show that will fill your
      hearts with joy, laughter and music!
    </p>
    <p>
      Directed by Xander Mason
      <br />
      Music Direction by Alexis Burrows
      <br />
      Choreography by Liam Boyd
    </p>
  </ShowCard>
);

export default PlaidTidingsSC;
