import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import service from "../lib/auth-service";
import axios from "axios";



 class OfferCrewDetail extends Component {
    constructor(props){
        super(props);
        this.state = {};
      }
    

      getSingleOffer = () => {
        const { params } = this.props.match;
        // console.log(params, "kkkkkkkkkkkkkkkkkkkkk")
        axios.get(`http://localhost:4000/offers/crew/${params.id}`)
        .then( crewDetails =>{
          const theCrewDetails = crewDetails.data;
          console.log(theCrewDetails, "wwwwwwwwwwwwwww")
          this.setState(theCrewDetails);
        })
        .catch((err)=>{
            console.log(err)
        })
      }

      componentDidMount(){
        this.getSingleOffer();
      }

    render() {
        
        return (
            <div>
                <h1>holaaa</h1>
                <p>Nombre de usuario: {this.state.username} </p>
                <p>Disponibilidad: {this.state.disponibility} </p>
                <p>Experiencia: {this.state.experience} </p>
            </div>
        )
    }
}


export default withAuth(OfferCrewDetail);