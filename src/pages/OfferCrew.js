import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import axios from "axios";

class OfferCrew extends Component {
  constructor() {
    super();
    this.state = { listOffersCrew: [] };
  }

  getCrewOffers = () => {
    axios
      .get(`${process.env.REACT_APP_API_URI}/offers/crew`)
      .then((crewOffers) => {
        this.setState({
          listOffersCrew: crewOffers.data,
        });
      });
  };
  componentDidMount() {
    this.getCrewOffers();
  }
  render() {
    return (
      <div>
        <h1 class="title-offer"> List of Sailors</h1>
        <div className="cardContainer">
          {this.state.listOffersCrew.map((crew) => {
            return (
              <div key={crew._id}>
                <ul className="cardsoffers">
                  <li className="cardsoffers-item">
                    <div className="cardoffer">
                      <img
                        className="cardoffer-image"
                        src={crew.image}
                        alt="Foto"
                      />

                      <div className="cardoffer-content">
                        <div className="cardoffer-title">
                          <p>
                            <b>Name:</b> {crew.username}
                          </p>
                        </div>
                        <hr className="hr-bars" />
                        <p className="cardoffer-text">
                          <b>Country:</b> {crew.country}
                        </p>
                        <hr className="hr-bars" />
                        <p className="cardoffer-text">
                          <b>Disponibility:</b> {crew.disponibility}
                        </p>
                        <hr className="hr-bars" />
                        <a href="#" className="cardsoffer-button button-block">
                          <Link to={`/crewDetails/${crew._id}`}>Details</Link>
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default withAuth(OfferCrew);
