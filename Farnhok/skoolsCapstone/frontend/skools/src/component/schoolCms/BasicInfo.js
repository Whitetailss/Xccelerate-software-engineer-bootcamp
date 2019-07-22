import React, { Component } from 'react';
import "../../assets/css/CmsDetails/BasicInfo.css";
import { Container, Row, Col } from 'reactstrap';

export class BasicInfo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: null,
            address: null,
            location: null,
            contactNumber: null,
            website: null,
            email: null,
         }
         this.handleAll = this.handleAll.bind(this)

        }


    handleAll = e => {
        this.setState({
            [e.target.name]: e.target.value,
    

        })
    }

    render() { 
        return ( 

            
            <div>
                <div className="basicInfo">
                <Container >
                <Row>
            <Col > <h3> School name:</h3> 
            <input type="text" name="name" placeholder="School name" value={this.state.name} onChange={this.handleAll}/>
        </Col>
            <Col >  <h3> School address:</h3> 
             <input type="text" name="address" placeholder="address" value={this.state.address} onChange={this.handleAll}/>
            </Col>
            </Row>
            
            <Row>
                <Col>
            <h3> Location:</h3>
           
            <input type="text" name="location" placeholder="location" value={this.state.location} onChange={this.handleAll}/>
           </Col> 

           <Col>
            <h3> Contact number:</h3>
            <input type="number" name="contactNumber" placeholder="contact number" value={this.state.contactNumber} onChange={this.handleAll}/>
            </Col>
            </Row>

            <Row>
                <Col>
            <h3> Website:</h3>
            <input type="text" name="website" placeholder="website" value={this.state.website} onChange={this.handleAll}/>
            </Col>

            <Col>
            <h3> Email:</h3>
            <input type="email" name="email" placeholder="email" value={this.state.email} onChange={this.handleAll}/>
            </Col>
        
            </Row>
</Container>
            </div> 
        
            </div> 
         );
    }
}
