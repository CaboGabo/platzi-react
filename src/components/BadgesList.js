import React from "react";
import { Link } from "react-router-dom";
import BadgeItem from "./BadgeItem";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState("");

  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter(badge =>
      `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <React.Fragment>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            onChange={e => setQuery(e.target.value)}
            type="text"
            className="form-control"
            value={query}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </React.Fragment>
    );
  }
  return (
    <div className="BadgesList">
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          onChange={e => setQuery(e.target.value)}
          type="text"
          className="form-control"
          value={query}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map(badge => {
          return (
            <li key={badge.id}>
              <Link
                className="text-reset text-decoration-none"
                to={`/badges/${badge.id}`}
              >
                <BadgeItem
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
    </div>
  );
}

export default BadgesList;
