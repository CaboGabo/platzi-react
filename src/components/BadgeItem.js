import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import Gravatar from "./Gravatar";

import "./styles/BadgeItem.css";

class BadgeItem extends React.Component {
  render() {
    const element = <FontAwesomeIcon icon={faTwitter} />;
    return (
      <div className="container__BadgeItem">
        <Gravatar className="BadgeItem__avatar" email={this.props.email} />
        <div className="BadgeItem__info">
          <p className="BadgeItem__name">
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

export default BadgeItem;
