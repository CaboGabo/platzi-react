import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import Gravatar from "./Gravatar";

import "./styles/BadgeDetail.css";

class BadgeDetail extends React.Component {
  render() {
    const element = <FontAwesomeIcon icon={faTwitter} />;
    return (
      <div className="container__BadgeDetail">
        <Gravatar className="BadgeDetail__avatar" email={this.props.email} />
        <div className="BadgeDetail__info">
          <p className="BadgeDetail__name">
            {this.props.firstName} {this.props.lastName}
          </p>
          <p className="text-primary">
            {element} @{this.props.twitter}
          </p>
          <p>{this.props.jobTitle}</p>
        </div>
      </div>
    );
  }
}

export default BadgeDetail;
