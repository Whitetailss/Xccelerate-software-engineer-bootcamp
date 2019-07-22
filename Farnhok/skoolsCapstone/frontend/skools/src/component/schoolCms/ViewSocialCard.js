import React from 'react';
import axios from 'axios';
import {
    Container, Row, Card, CardHeader, CardBody, CardTitle, CardText, Col, Form, FormGroup, CardFooter, Button, Label, Input,
    ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap'
import '../../assets/css/cms/socialCard.css'
import { connect } from "react-redux"
import { async } from '@firebase/util';
import { storage } from '../../firebase';
// import {deleteThunk} from "../../redux/cmsSocial/"



export class ViewSocialCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [], photos: [], id: []
        };

    }


    async componentDidMount() {
        let url = window.location.pathname;
        let id = url.split("/").slice(-1)[0]
        let options = {
            method: 'GET',
            url: `http://localhost:8080/school/card?id=${id}`,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('cmsToken')
            }
        }
        const { data: posts } = await axios(options)
        // console.log(posts)
        this.setState({ posts })

        let photoOptions = {
            method: 'GET',
            url: `http://localhost:8080/school/card/photo?id=${id}`,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('cmsToken')
            }
        }

        const photo = await axios(photoOptions)
        // console.log(photo)
        let photos = photo.data
        this.setState({ photos })

        console.log(this.state.photos)

    }

    render() {
     
        const posts = this.state.posts
        const photos = this.state.photos
        console.log(posts)
        console.log(photos)

        


        const feedCard =

            posts.map((post, index) =>

                <div key={index}>
                  
                    <Card id={post.id}>
                        <CardBody>
                         
                            <div>
                               
                                <input type="text" id="socialInput" value={post.card_content}  />
                                {photos.map((photo) =>
                                    <div id='imageDiv'>
                                        {post.id == photo.card_id ? <img id='postImage' src={photo.photo} hspace="20" /> : ''}
                                    </div>
                                   
                                )}
                              
                            </div>
                        </CardBody>
                        <CardFooter>
                            <Container>
                                <Row>
                                  
                                </Row>
                            </Container>
                        </CardFooter>
                    </Card>
                    <br />
                    <br />
                </div>

            )



        return (
            <div id="socialCardBody">
                <Container>
                    <Row>
                        <Col md="3">

                        </Col>
                        <Col md="6">
                           
                            <br />
                            <br />
                            {feedCard}
                        </Col>
                        <Col md="3">
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }

}

// const mapDispatchToProps = (dispatch) => {
//     return {

//       deleteCard: function (id) {
//         console.log(id)
//         dispatch(deleteThunk(id))
//       }
//     }
//   }

//   export default connect(mapDispatchToProps)(SocialCardPost)