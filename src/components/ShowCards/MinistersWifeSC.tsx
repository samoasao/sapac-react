import ShowCard from "../ShowCard";
import amwLogo from "../../images/promos/AMW_Promo.png";
import { Link } from "react-router-dom";

const MinistersWifeSC = () => (
  <ShowCard
    image={amwLogo}
    title="A Minister's Wife"
    byline={[
      "Book by Austin Pendelton",
      "Music by Joshua Schmidt",
      "Lyrics by Jan Levy Tranen",
      "Based on the Play Candida by George Bernard Shaw",
    ]}
    location={[
      "Scoundrel & Scamp Theatre",
      "738 N. 5th Ave",
      "Sutie 131 in the Historic Y",
      "TUCSON, AZ 85705",
    ]}
    performanceDate={[
      "Saturday March 5th, 7pm",
      "Sunday March 6th, 2pm",
      "Friday March 11th, 7pm",
      "Saturday March 12th, 7pm",
      "Sunday March 13th, 2pm",
    ]}
  >
    <div className="py-1" />
    {/* <Link to="/tickets" className="btn btn-info btn-lg">
      Buy Tickets
    </Link> */}
    <hr></hr>
    <p>
      Hailed by the Associated Press as “a jewel of a musical” and by The Wall
      Street Journal as “the most important new musical to come to New York
      since The Light in the Piazza,” A MINISTER'S WIFE is a true hidden gem in
      the musical theater repertoire.
    </p>
    <p>
      Based on a 1898 version of George Bernard Shaw's Candida A MINISTER'S WIFE
      explores the fires burning beneath the surface of a seemingly ordinary
      marriage; the Revered James Morell and his wife, Candida, are happily
      married - or at least they think - until a romantic young poet,
      Marchbanks, enters their life. Featuring music by Joshua Schmidt, lyrics
      by Jan Levy Tranen and a book by Austin Pendleton, A MINISTER'S WIFE is
      rich, romantic and daring. Its finale is one of the best pieces of music
      in the repertoire that will leave you breathless.
    </p>
    <p>
      Starring local Tucson favorites Jodi Darling (Candida), Jeremy Vega
      (Eugene Marshbanks), Dennis Tamblyn (James Morrel) and Kate Scally (Prossy
      Garnett) along with Tucson new-comer Steven Wright (Lexy Mill), this
      beautiful show is directed by Susan Stokes with musical direction by
      Elizabeth Spencer.
    </p>
    <p>
    </p>
  </ShowCard>
);

export default MinistersWifeSC;
