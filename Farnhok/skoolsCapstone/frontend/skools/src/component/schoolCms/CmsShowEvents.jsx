import React, { Component } from 'react';
import { Card, Button, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import "../../assets/css/CmsEvent/CmsShowEvents.css"
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faClock, faLocationArrow, faStar, faCheck} from '@fortawesome/free-solid-svg-icons'





export class CmsShowEvents extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: "Name",
            date: "date",
            time: "time",
            venue: "venue",
            description: null,
            interested: null,
            going: null
         }

         this.handleAll = this.handleAll.bind(this)
    }

    handleAll = e => {
        this.setState ({
            [e.target.name]: e.target.value
        })
    }
    render() { 
        return ( 

            <div>

    

                <div className="eventContent">

       <Card body outline color="primary">

       <div className="name">
        <CardTitle onChange={this.handleAll}> Name: {this.state.name}</CardTitle>

        </div>

        <div className="subInfo">

        <Container>

            <Row>

                <div>
        <p> <FontAwesomeIcon  size="30px" color='black' icon={faCalendarAlt}  /> {this.state.date}</p>
        </div>

        <div>
        <p>  <FontAwesomeIcon  size="30px" color='black' icon={faClock} />{this.state.time} </p>
        </div>
       
        <div>
         <p>  <FontAwesomeIcon  size="30px" color='black' icon={faLocationArrow}/> {this.state.venue}</p>
         </div>

         </Row>

         </Container>

       

            
        
    

        </div>

        <div className="otherContent">

        <div className="description">

        <CardSubtitle> Description:</CardSubtitle>
        <CardText> {this.state.description} </CardText>

       </div>

       

        <h6> Interested {this.state.interested} <FontAwesomeIcon  size="30px" color='black' icon={faStar}/> </h6>
        <h6> Going {this.state.going} <FontAwesomeIcon  size="30px" color='black' icon={faCheck}/> </h6>

    

        </div>


        {/* <Button color="secondary">Button</Button> */}
      </Card>

    </div>

    </div>



         );
    }
}
 
