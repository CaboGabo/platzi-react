import React from "react";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import PageLoading from "../components/PageLoading";

import confLogo from "../images/platziconf-logo.svg";
import api from "../api";

import "./styles/BadgeNew.css";

class BadgeNew extends React.Component {
  state = {
    loading: false,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    }
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });

      this.props.history.push("/badges");
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      });
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    if (this.state.loading) {
      return <PageLoading />;
    }
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img
            className="img-fluid BadgeNew__hero-image"
            src={confLogo}
            alt="Logo"
          />
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                firstName={this.state.form.firstName || "First_name"}
                lastName={this.state.form.lastName || "Last_name"}
                twitter={this.state.form.twitter || "twitter"}
                jobTitle={this.state.form.jobTitle || "Job_title"}
                email={this.state.form.email || "email"}
              />
            </div>

            <div className="col-6">
              <h1>New Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                onSubmit={this.handleSubmit}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
