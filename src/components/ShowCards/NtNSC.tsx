import ShowCard from "../ShowCard";
import ntnLogo from "../../images/promos/nextToNormalLogo.png";
import { Link } from "react-router-dom";

const NtNSC = () => (
  <ShowCard
    image={ntnLogo}
    title="Next To Normal"
    byline={[
      "Book and Lyrics by Brian Yorkey",
      "Music by Tom Kitt",
      "",
      "Directed by Annette Hillman",
      "Music Direction by Elizabeth Spencer",
    ]}
    location={["Scoundral and Scamp"]}
    performanceDate={["August 20th - 29th"]}
  >
    <div className="py-1" id="ntn" />

    <Link to="/ntn" className="btn btn-info btn-lg">
      More Info
    </Link>

    <hr></hr>
    <p>
      <em>Next to Normal</em>, with book and lyrics by Brian Yorkey and music by
      Tom Kitt, explores how one suburban household copes with crisis and mental
      illness. Winner of three 2009 Tony Awards, including Best Musical Score
      and the 2010 Pulitzer Prize, Next to Normal was also chosen as "one of the
      year's ten best shows" by critics around the country, including The Los
      Angeles Times, The Washington Post, Rolling Stone and The New York Times.
    </p>
    <p>
      {" "}
      Dad's an architect; Mom rushes to pack lunches and pour cereal; their
      daughter and son are bright, wise-cracking teens, appearing to be a
      typical American family. And yet their lives are anything but normal
      because the mother has been battling manic depression for 16 years.{" "}
      <em>Next to Normal</em> takes audiences into the minds and hearts of each
      character, presenting their family's story with love, sympathy and heart.
    </p>
    <p>
      {" "}
      This deeply moving piece of theatre provides a wonderful opportunity for
      performers to explore dramatic material and showcase vocal talents with an
      energetic pop/rock score. <em>Next to Normal</em> is an emotional
      powerhouse that addresses such issues as grieving a loss, ethics in modern
      psychiatry, and suburban life.
    </p>
    <p>Directed by MAC award winning director, Annette Hillman.</p>
    <p className="font-weight-bold">
      Some scenes use flashing lights or strobing effect that may affect
      photosensitive viewers.
    </p>
  </ShowCard>
);

export default NtNSC;
