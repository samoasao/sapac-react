import ShowCard from "../ShowCard";
import aliceLogo from "../../images/promos/AliceByHeart.jpg";
import { Link } from "react-router-dom";

const AliceSC = () => (
  <ShowCard
    image={aliceLogo}
    title="Alice By Heart"
    byline={[
      "Book by Steven Sater and Jesse Nelson",
      "Music by Duncan Sheik  ",
      "Lyrics by Steven Sater",
      "",
      "Produced by Kaitlin Bertenshaw",
      "Directed by Samantha Beemer",
      "Music Direction by Samantha Sierra Feldman",
    ]}
    location={[
      "3330 E Speedway Blvd. (Formerly Bookman's)",
      "Tucson, AZ 85716",
    ]}
    performanceDate={[
      "All performances will include a tea-party starting 1 hour before the performance which will act as a pre-show discussion before being transported to Wonderland!",
      "",
      "FRI, JAN 19th, 6:30pm Pre-Show Tea Party, Performance at 7:30pm",
      "SAT, JAN 20th, 6:30pm Pre-Show Tea Party, Performance at 7:30pm",
      "SUN, JAN 21st, 5:00pm Pre-Show Tea Party, Performance at 6:00pm",
      "FRI, JAN 26th,6:30pm Pre-Show Tea Party, Performance at 7:30pm",
      "SAT, JAN 27th, 6:30pm Pre-Show Tea Party, Performance at 7:30pm",
      "SUN, JAN 28th, 5:00pm Pre-Show Tea Party, Performance at 6:00pm ",
    ]}
  >
    <div className="py-1" id="meangirls" />

    <Link to="/tickets" className="btn btn-info btn-lg">
      Buy Tickets
    </Link>
    <hr></hr>
    <p>
      <em>Alice by Heart</em> is a stirring indie-folk musical inspired by “Alice in
      Wonderland", that asks serious questions about the purpose of art in hard
      times, escapism and grief.
    </p>
    <p>
      In <em>Alice by Heart</em>, teens are taking shelter in an underground train
      station during the London bombing blitz of 1941. In order to distract
      themselves, they take on familiar characters, including the White Rabbit,
      the Mad Hatter, Caterpillar, Cheshire Cat and Queen of Hearts and use
      found objects as props. As they travel through the tale, the actors
      explore the poignancy of first love, coming to terms with loss, and
      finding the courage to move forward. This musical encourages us all to
      celebrate the transformational power of the imagination, even in the
      harshest of times.
    </p>
    <p>
      The show runs 105 minutes with no intermission. There will be haze,
      theatrical lighting, and bomb sound effects. The space is accessibility
      friendly in accordance with ADA.
    </p>
    <p>
      This piece is so evocative and moving, so we found the most amazing
      unconventional space, the vacant Bookmans at <strong>3330 E Speedway Blvd</strong> that has
      exposed brick and an industrial look with exposed ceilings. The space is
      reminiscent of the London Subway and will immediately bring the audience
      into the world the actors are creating. There will be moving scaffolding
      that the actors can climb with a live band. The feel is that of an
      underground rock concert as the actors go back and forth between the
      escape of imagination and the bleak real world of war.
    </p>
  </ShowCard>
);

export default AliceSC;
