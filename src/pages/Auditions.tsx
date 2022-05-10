import { Fragment } from "react";
const Auditions = () => {
  return (
    <Fragment>
      <section className="about py-5 p-3 px-md-auto">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Auditions</h2>

            <p>
              We are currently accepting video auditions of children
              approximately ages 7-12 for our upcoming production of Fun Home.{" "}
            </p>
            <p>
              For more information or to submit an audition, please click below to fill out{" "}
              <a
                href="https://docs.google.com/forms/d/1z7P7aKQX3TAGKl9y40rT8qU2LrBhcyXSTByK2bRUMkA/"
                target="blank"
              >
                {" "}
                this google form{" "}
              </a>
            </p>

            <a
              className="btn btn-lg btn-dark"
              href="https://docs.google.com/forms/d/1z7P7aKQX3TAGKl9y40rT8qU2LrBhcyXSTByK2bRUMkA/"
              target="blank"
            >
              Sign up to Audition!
            </a>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default Auditions;
