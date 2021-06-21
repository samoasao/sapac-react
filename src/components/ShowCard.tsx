import React from "react";
import TicketButton from "../components/TicketButton";
import { Link } from "react-router-dom";

type ShowCardProps = {
  image: string;
  title: string;
  byline: string;
  location: string | string[];
  performanceDate: string | string[];
  ticketURL?: string;
  showInfoURL?: string;
};

class ShowCard extends React.Component<ShowCardProps> {
  getList(locations: string | string[], className: string) {
    if (typeof locations === "string") {
      return <p className={className}>{locations}</p>;
    } else {
      return (
        <p className={className}>
          {locations.map((location) => {
            return (
              <span key={"key-" + location} className={className}>
                {location}
                <br />
              </span>
            );
          })}
        </p>
      );
    }
  }

  getLink(content: any) {
    if (this.props.showInfoURL) {
      return (
        <Link to={this.props.showInfoURL ? this.props.showInfoURL : ""}>
          {content}
        </Link>
      );
    } else {
      return content;
    }
  }

  render() {
    return (
      <div className="event-item row my-5 py-0" id="1776">
        <div className="col-md-5 ml-0 pl-0 py-0 my-0 ">
          {this.getLink(
            <img
              className=" my-0 py-0 img-fluid"
              src={this.props.image}
              alt={this.props.title}
            />
          )}
        </div>
        <div className="col-md-7 py-2">
          <h2 className="mt-0 pt-2">{this.getLink(this.props.title)}</h2>
          <p className="byline">{this.props.byline}</p>
          {this.getList(this.props.location, "location")}
          {this.getList(this.props.performanceDate, "performance-date")}

          {this.props.children}

          {this.props.ticketURL ? (
            <TicketButton ticketURL={this.props.ticketURL} text="Buy Tickets" />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
export default ShowCard;
