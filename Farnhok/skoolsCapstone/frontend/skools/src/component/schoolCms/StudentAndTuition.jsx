import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export class StudentAndTuition extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isAM: false,
            isPM: false,
            isFullDay: false,
            isLongFullDay: false,
            number_of_AMstudent: null,
            tuition_AMfee: null,
            number_of_PMstudent: null,
            tuition_PMfee: null,
            number_of_FullDaystudent: null,
            tuition_Fulldayfee: null,
            number_of_LongFullDaystudent: null,
            tuition_LongFullDayfee: null,
            hasSubsidy: false,
            subsidyAmount: null
         }

         this.handleAll = this.handleAll.bind(this)
         this.isAM = this.isAM.bind(this)
         this.isPM = this.isPM.bind(this)
         this.isFullDay = this.isFullDay.bind(this)
         this.isLongFullDay = this.isLongFullDay.bind(this)
         this.hasSubsidy = this.hasSubsidy.bind(this)
        }

    handleAll = e => {
        this.setState({
            [e.target.am_student]: e.target.value
        })
    }

    isAM =() => {
        this.setState(prevState => ({

           isAM:!prevState.isAM
        }))
    }

    isPM =() => {
        this.setState(prevState => ({

           isPM:!prevState.isPM
        }))
    }

    isFullDay =() => {
        this.setState(prevState => ({

           isFullDay:!prevState.isFullDay
        }))
    }

    isLongFullDay =() => {
        this.setState(prevState => ({

           isLongFullDay:!prevState.isLongFullDay
        }))
    }

    hasSubsidy = () => {
        this.setState(prevState => ({
            hasSubsidy: !prevState.hasSubsidy
        }))
    }


    render() { 
        return ( 
            <div>

                <Container>

                    <Row>

                        <Col>

                        <div className="classesInput">

            <h3> classes </h3>

            <Row>

            <input type="checkbox" id="has_am" name="has_am" onClick={this.isAM}/>
            <label for="has_am"> has am </label> 

            </Row>

            <Row>

            <input type="checkbox" id="has_pm" name="has_pm" onClick={this.isPM}/>
            <label for="has_pm"> has pm </label> 

            </Row>

            <Row>

            <input type="checkbox" id="has_full_day" name="has_full_day" onClick={this.isFullDay}/>
            <label for="has_pm"> has full day </label> 

            </Row>

            <Row>

            <input type="checkbox" id="has_long_full_day" name="has_long_full_day" onClick={this.isLongFullDay}/>
            <label for="has_pm"> has long full day </label> 

            </Row>

            {/* <h3> student:</h3>
            <input type="number" name="number_of_student" placeholder="number_of_student" value={this.state.number_of_student} onChange={this.handleAll}/>

             <h3> Tuition fee:</h3>
             <input type="number" name="Tuition fee" placeholder="Tuition fee" value={this.state.tuition_fee} onChange={this.handleAll}/> */}

            <div id="ClassesOptions">

                <Row>

            {this.state.isAM ? (
                <div>
                   
            <h6> AM student:</h6>
            <input type="number" name="number_of_AMstudent" placeholder="number of student" value={this.state.number_of_AMstudent} onChange={this.handleAll}/>

             <h6> AM Tuition fee:</h6>
             <input type="number" name="Tuition fee" placeholder="Tuition fee" value={this.state.tuition_AMfee} onChange={this.handleAll}/>

                </div>
            ) : (
                <div> </div>
            )}

            {this.state.isPM ? (
                <div>
                   
            <h6> PM student:</h6>
            <input type="number" name="number_of_PMstudent" placeholder="number of student" value={this.state.number_of_PMstudent} onChange={this.handleAll}/>

             <h6> PM tuition fee:</h6>
             <input type="number" name="Tuition fee" placeholder="Tuition fee" value={this.state.tuition_PMfee} onChange={this.handleAll}/>

                </div>
            ) : (
                <div> </div>
            )} 

            {this.state.isFullDay ? (
                <div>
                   
            <h6> Full day student:</h6>
            <input type="number" name="number of student" placeholder="number of student" value={this.state.number_of_FullDaystudent} onChange={this.handleAll}/>

             <h6> Full day tuition fee:</h6>
             <input type="number" name="Tuition fee" placeholder="Tuition fee" value={this.state.tuition_Fulldayfee} onChange={this.handleAll}/>

                </div>
            ) : (
                <div> </div> 
            )} 

            {this.state.isLongFullDay? (
                <div>
                   
            <h6> Long full day student:</h6>
            <input type="number" name="number of student" placeholder="number of student" value={this.state.number_of_LongFullDaystudent} onChange={this.handleAll}/>

             <h6> Long full day tuition fee:</h6>
             <input type="number" name="Tuition fee" placeholder="Tuition fee" value={this.state.tuition_LongFullDayfee} onChange={this.handleAll}/>

                </div>
            ) : (
               <div> </div>
            )} 

            </Row>

            </div>

            </div>

            </Col>

            </Row>

            <Row>

                <Col>

            <h3> Subsidy</h3>

            <input type="checkbox" name="has subsidy" onClick={this.hasSubsidy}/>
            <label for="has subsidy"> has subsidy </label>

        {this.state.hasSubsidy ? (

            <div>

            <h3> Subsidy amount :</h3>
            <input type="number" name="subsidy amount" placeholder="subsidy amount" value={this.state.subsidyAmount} onChange={this.handleAll}/> 

            </div>
        ) : (
            <div> </div>
        )
        
        }

        </Col>

        </Row>


        </Container>

            </div> 
         );
    }

}
 
