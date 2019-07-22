import React from 'react';
import { withRouter} from 'react-router-dom';
import {connect} from 'react-redux'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "../../assets/css/CmsEvent/EventModal.css"
import { Container, Row, Col } from 'reactstrap';
import { addEventName } from "../../redux/event/action";
import axios from 'axios';

class EventModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      event_name: null,
      date: null,
      startTime: null,
      venue: null,
      description: null,
      amount: null,
      isNotFree: false,
      price: null
    };
    this.handleAll = this.handleAll.bind(this)
    this.isNotFree = this.isNotFree.bind(this)
    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }



  isNotFree =() => {
    this.setState(prevState => ({

       isNotFree:!prevState.isNotFree
    }))
}


handleAll = e => {
    this.setState ({
        [e.target.name]: e.target.value
    })
}

handleSubmit = () => {
  // dispatch
  this.toggle () 

  console.log("COMIN THROUGH")
  this.props.addEventName(this.state)

  const event = {
    data: {abc:this.state},
   
  }

  console.log(event)

  axios.post(`https://localhost:8080/cms/events`, {event})
  .then(res => {
    console.log (res)
  
  })

}

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}> Add event</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add event</ModalHeader>
          <ModalBody>
          <div>



<div className='mainContent'>

<Container> 

<h6> Event name: </h6>
<input type="text" name="event_name" placeholder="Enter event name" value={this.state.event_name}  onChange={this.handleAll} />

<h6> Date and start time: </h6>
<input type="date" name="date" value={this.state.date} onChange={this.handleAll}/>
<input type="text" name="time" placeholder="Enter start time" value={this.state.startTime} onChange={this.handleAll}/>

<h6> Venue: </h6>
<input type="text" name="venue" placeholder="Enter venue" value={this.state.venue} onChange={this.handleAll}/>

<h6> Is it free? </h6>

<div className="not">

<input type="checkbox" id="free" name="free"/>
<label for="has_am">  Yes </label> 

<input type="checkbox" id="notFree" name="notFree" onClick={this.isNotFree}/>
<label for="notFree">  No </label> 

{this.state.isNotFree ? (

<div>   
<h6> Price :</h6>
<input type="number" name="Price" placeholder="Enter price" value={this.state.price} onChange={this.handleAll}/>
</div>

) : (
<div> </div>
)}

</div>


<h6> Description: </h6>

<textarea type="text" name="description" placeholder="Enter description" value={this.state.description} onChange={this.handleAll}> </textarea>

{/* <div id="allButtons"> */}

</Container>


<div className="saveEditDeleteButton">

{/* </div> */}
</div>



</div>
</div>
          </ModalBody>
          <ModalFooter>
            <button className="submitButton" onClick={this.handleSubmit}>Submit</button>

            {/* {this.props.result ? 
            (<div>{this.props.result.event_name}</div>) : (console.log("event name did not load"))
          } */}


            <button className="cancelButton" onClick={this.toggle}>Cancel</button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    result: state.EventModal
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addEventName: (result) => {
      dispatch(addEventName(result))
    },
  }
}

export const EventModalSpecial = withRouter (connect(mapStateToProps, mapDispatchToProps)(EventModal))

