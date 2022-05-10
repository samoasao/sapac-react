import ShowCard from "../ShowCard";
import funHomeLogo from "../../images/promos/FunHomeWeb.jpeg";
import { Link } from "react-router-dom";

const FunHomeSC = () => (
  <ShowCard
    image={funHomeLogo}
    title="Fun Home"
    byline={[
      "Music by Jeanine Tesori",
      "Book and Lyrics by Lisa Kron",
      "Based on the graphic novel by Alison Bechdel",
    ]}
    location={[
      "Pima Community College",
      "Black Box Theatre",
      "2202 W. Anklam Road",
      "Tucson, AZ 85709",
    ]}
    performanceDate={[
      "August 5- 14 2022",
    ]}
  >
    <div className="py-1" />
    <p>We are currently looking for 3 child actors for this production</p>
    <a
              className="btn btn-lg btn-danger"
              href="https://docs.google.com/forms/d/1z7P7aKQX3TAGKl9y40rT8qU2LrBhcyXSTByK2bRUMkA/"
              target="blank"
            >
             Audition Information
            </a>
    {/* <Link to="#" className="btn btn-info btn-lg">
      Tickets On Sale Soon
    </Link> */}
    <hr></hr>
    <p>
    When her father dies unexpectedly, graphic novelist Alison dives deep into her past to tell the story of the volatile, brilliant, one-of-a-kind man whose temperament and secrets defined her family and her life. Moving between past and present, Alison relives her unique childhood playing at the family’s Bechdel Funeral Home, her growing understanding of her own sexuality, and the looming, unanswerable questions about her father’s hidden desires. Fun Home is a refreshingly honest, wholly original musical about seeing your parents through grown-up eyes.
    </p>
  </ShowCard>
);

export default FunHomeSC;
