import ShowCard from "../ShowCard";
import plaidLogo from "../../images/promos/PlaidMusicHall.jpeg";
import { Link } from "react-router-dom";

const PlaidSC = () => (
  <ShowCard
    image={plaidLogo}
    showInfoURL="/plaid"
    title="Forever Plaid"
    byline="Written by Stuart Ross"
    location={[
      "Gasslight Music Hall of Oro Valley",
      "13005 N Oracle Rd #165",
      "Tucson, AZ 85739",
    ]}
    performanceDate={[
      "May 23rd and 24th, 2021 @ 6pm",
    ]}
  >
    <a href="https://www.gaslightmusichall.com/post/5-23-5-24-forever-plaid-sapac" target="_blank" className="btn btn-info btn-lg">
      Tickets
    </a>
    <hr></hr>
    <p>
      <em>Forever Plaid</em> is one of the most popular and successful musicals
      in recent memory. This deliciously fun revue is chock-full of classic
      barbershop quartet harmonies and pitch-perfect melodies! Directed by Chach
      Snook who was on the National Tour of the show as well as Music Directed
      by Matthew Holter who is a founder of the doo-wop group The 4GENTS, this
      show will be sure to delight and move audiences!
    </p>
    <p>
      Once upon a time, there were four guys (Sparky, Smudge, Jinx and Frankie)
      who discovered that they shared a love for music and then got together to
      become their idols – The Four Freshman, The Hi-Lo&#39;s and The Crew Cuts.
      Rehearsing in the basement of Smudge&#39;s family&#39;s plumbing supply
      company, they became &quot;Forever Plaid&quot;. On the way to their first
      big gig, the &quot;Plaids&quot; are broadsided by a school bus and killed
      instantly. It is at the moment when their careers and lives end that the
      story of <em>Forever Plaid</em> begins....
    </p>
    <p>
      Singing in close harmony, squabbling boyishly over the smallest
      intonations and executing their charmingly outlandish choreography with
      overzealous precision, the &quot;Plaids&quot; are a guaranteed smash, with
      a program of beloved songs and delightful patter that keeps audiences
      rolling in the aisles when they&#39;re not humming along to some of the
      great nostalgic pop hits of the 1950s.
    </p>
  </ShowCard>
);

export default PlaidSC;
