import { Fragment } from "react";
import { Link } from "react-router-dom";

import dv_google from "../../images/venues/desertView/Desert View Google.png";
import dv_highSchool from "../../images/venues/desertView/Desert View High School.png";
import dv_inside from "../../images/venues/desertView/Desert View Inside.jpg";
import dv_inside2 from "../../images/venues/desertView/Desert View Inside 2.jpg";
import dv_inside3 from "../../images/venues/desertView/Desert View Inside 3.jpg";

const ForeverPlaid = () => {
  return (
    <Fragment>
      <section className="plaid py-5 p-3 px-md-5 container-fluid">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">Desert View High School</h2>
            <div className="row">
              <div className="py-1 col-lg-10">
                <h4>Address</h4>
                <p>
                  <strong>Desert View High School</strong> <br />
                  4101 E Valencia Rd. <br />
                  Tucson, AZ 85706
                  <br />
                </p>
                <p className="font-weight-bold">
                  *Masks will be required to be worn for audience members.
                  Performers will not be masked. Every other row will be blocked
                  off to encourage social distancing.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="card-img m"
                      src={dv_inside}
                      alt="Desert View Inside"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="card-img m"
                      src={dv_inside2}
                      alt="Desert View Inside"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="card-img m"
                      src={dv_inside3}
                      alt="Desert View Inside"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="offset-md-2 col-md-8">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="card-img m"
                      src={dv_google}
                      alt="Desert View Inside"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="offset-md-2 col-md-8">
                <div className="card">
                  <div className="card-body">
                    <img
                      className="card-img m"
                      src={dv_highSchool}
                      alt="Desert View Inside"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};
export default ForeverPlaid;
