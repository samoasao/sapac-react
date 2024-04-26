import ShowCard from "../ShowCard";
import gutenbergLogo from "../../images/promos/gutenbergGMH.jpeg";
import { Link } from "react-router-dom";

const GutenbergSC = () => (
  <ShowCard
    image={gutenbergLogo}
    showInfoURL="/plaid"
    title="Gutenberg! The Musical!"
    byline="by Anthony King and Scott Brown"
    location={[
      "Gaslight Music Hall of Oro Valley",
      "13005 N Oracle Rd #165",
      "Tucson, AZ 85739",
    ]}
    performanceDate={['ONE NIGHT ONLY', "July 11th, 2024 @ 6pm"]}
  >
    <a
      href="https://gaslightmusichall.csstix.com/event-details.php?e=756"
      target="_blank"
      className="btn btn-info btn-lg"
    >
      Tickets
    </a>
    <hr></hr>
    <p>
      Back by popular demand for ONE NIGHT ONLY after being nominated for a{" "}
      <a
        href="https://tucson.com/entertainment/the-best-of-the-year-on-tucson-stages/article_a76e8a91-1936-5a24-85ea-09447583c6d1.html"
        target="_blank"
        rel="noreferrer"
      >
        MAC Award
      </a>{" "}
      in 2018, this production of the hit two-man musical spoof is a special
      add-on event to our regular full season of musical productions. Two
      desperate (and bravely untalented) songwriters perform a backers' audition
      for their new musical about Gutenberg, the inventor of the printing press.
      With an unending supply of enthusiasm, Bud Davenport and Doug Simon
      (portrayed by real-life brothers{" "}
      
        Carson and Tyler Wright
     
      ) sing all the songs and play all the parts in their hilarious historical
      epic. Called “A smashing success” by the New York Times,{" "}
      <span style={{ fontWeight: "bold", fontStyle: "italic" }}>
        Gutenberg! The Musical!
      </span>
      went on to receive Lucille Lortel Award and Outer Critics Circle Award
      nominations for Outstanding Musical.
    </p>
  </ShowCard>
);

export default GutenbergSC;
