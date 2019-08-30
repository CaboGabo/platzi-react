import React from "react";
import { Link } from "react-router-dom";
import BadgeDetail from "./BadgeDetail";

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <React.Fragment>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </React.Fragment>
      );
    }
    return (
      <ul className="list-unstyled">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}/edit`}
              >
                <BadgeDetail
                  firstName={badge.firstName}
                  lastName={badge.lastName}
                  twitter={badge.twitter}
                  avatar={badge.avatarUrl}
                  jobTitle={badge.jobTitle}
                  email={badge.email}
                />
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
