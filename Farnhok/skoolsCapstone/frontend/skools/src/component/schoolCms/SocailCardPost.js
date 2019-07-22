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



export class SocialCardPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [], photos: [], editValue: '', postValue: '', inputValue: '', image: [], url: [], modal: false
        };
        this.toggle = this.toggle.bind(this);
        this.handlePost = this.handlePost.bind(this);
        this.handlePostChange = this.handlePostChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    async componentDidMount() {
        let options = {
            method: 'GET',
            url: 'http://localhost:8080/school/card',
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('cmsToken')
            }
        }
        const { data: posts } = await axios(options)
        // console.log(posts)
        this.setState({ posts })

        let photoOptions = {
            method: 'GET',
            url: 'http://localhost:8080/school/card/photo',
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

    async toggle() {
       await this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handlePostChange(event) {
        this.setState({ postValue: event.target.value })
        console.log(this.state.postValue)
    }

    handleChange(event, id, allPost) {
        let i
        for (i = 0; i < allPost.length; i++) {
            if (allPost[i]['id'] == id) {
                allPost[i]['card_content'] = event.target.value
                this.setState({ posts: allPost });
            }
        }
    }

    handlePost = async (postValue) => {
        // console.log(postValue)

        let options = {
            method: 'POST',
            url: `http://localhost:8080/school/card/?card_content=${postValue}`,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('cmsToken')
            }
        }

        let posts = await axios(options)
        this.setState({ posts: posts.data })
    }

    handleUpdate = async (posts, id) => {
        let i
        for (i = 0; i < posts.length; i++) {
            if (posts[i]['id'] == id) {
                let editValue = posts[i]['card_content']

                let options = {
                    method: 'PUT',
                    url: `http://localhost:8080/school/card/${id}?card_content=${editValue}`,
                    headers: {
                        'Authorization': 'Bearer ' + localStorage.getItem('cmsToken')
                    }
                }

                await axios(options)
            }
        }

    }

    handleDelete = async id => {
        let options = {
            method: 'DELETE',
            url: `http://localhost:8080/school/card/?card_id=${id}`,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('cmsToken')
            }
        }
        let posts = await axios(options)
        this.setState({ posts: posts.data })
    }

    handleFileChange = e => {
        console.log('you must be there')
        var array = []
        console.log(e.target.files.length)
        if (e.target.files[0]) {
            var i
            for (i = 0; i < e.target.files.length; i++) {
                var image = e.target.files[i]
                array.push(image)
            }
            this.setState({ image: this.state.image.concat(array) });
            console.log(this.state.image)
        }
    }

    handleUpload = async (images,postValue) => {
        const { image } = this.state;

        let options = {
            method: 'POST',
            url: `http://localhost:8080/school/card/?card_content=${postValue}`,
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('cmsToken')
            }
        }
        let posts = await axios(options)
        this.setState({ posts: posts.data })

        for (let i = 0; i < this.state.image.length; i++) {
            console.log(image[i].name)

            const uploadTask = storage.ref(`social_card/${image[i].name}`).put(image[i]);

            uploadTask.on('state_changed', (snapshot) => {

            }, (error) => { console.log(error); },
                () => {
                    storage.ref('social_card').child(image[i].name).getDownloadURL().then(async (url) => {
                        console.log(url);

                        let id = posts.data[0]['id']
                        console.log(id)
                        let photoOptions = {
                            method: 'POST',
                            url: `http://localhost:8080/school/card/${id}`,
                            data: {url: url},
                            headers: {
                                'Authorization': 'Bearer ' + localStorage.getItem('cmsToken')
                            }
                        }
                        let photos = await axios(photoOptions

                        )

                        this.setState({photos: photos.data})

                    })
                }
            )
        }
    }



    render() {
        // const posts = [
        //     { id: 1, card_content: 'hello' },
        //     { id: 2, card_content: 'bye' }
        // ];
        const posts = this.state.posts
        const photos = this.state.photos
        console.log(posts)
        console.log(photos)

        // const posts = this.state.posts
        // console.log(`here is ${posts}`)
        const feedCard =

            posts.map((post, index) =>

                <div key={index}>
                    {/* {this.setState({inputValue: post.card_content})} */}
                    <Card id={post.id}>
                        <CardBody>
                            {/* <CardText>{post.card_content}</CardText> */}
                            <div>
                                {/* <label> */}
                                <input type="text" id="socialInput" value={post.card_content} onChange={(event) => this.handleChange(event, post.id, this.state.posts)} />
                                {photos.map((photo) =>
                                    <div id='imageDiv'>
                                        {post.id == photo.card_id ? <img id='postImage' src={photo.photo} hspace="20" /> : ''}
                                    </div>
                                    // <img src={photo.photo} />
                                )}
                                {/* </label> */}
                            </div>
                        </CardBody>
                        <CardFooter>
                            <Container>
                                <Row>
                                    <Col md="1.5"><Button onClick={() => this.handleUpdate(this.state.posts, post.id)} id={post.id}>Edit</Button></Col>
                                    <Col><Button onClick={() => this.handleDelete(post.id)} id={post.id}>Delete</Button></Col>
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
                            <Card className="gedf-card">
                                <div className="social_card_card-body py-2">
                                    <div className="d-flex">
                                        <Col>
                                            <Form action="">
                                                <FormGroup className="mb-0">
                                                    <Label className="sr-only" for="exampleFormControlTextarea1">Example textarea</Label>
                                                    <Input type="textarea" className="social_card_form-control border-0 textValue" id="exampleFormControlTextarea1"
                                                        rows="2" placeholder="Update Your Feed Here" onChange={this.handlePostChange} />
                                                </FormGroup>
                                            </Form>
                                        </Col>
                                    </div>
                                </div>
                                <CardFooter className="p-2">
                                    <div className="d-flex justify-content-between align-items-center">

                                        <Col>
                                            <Button type="button" className="socail_card_btn btn-fposts btn-block btn-sm" data-toggle="modal"
                                                data-target="#uploadImg" onClick={this.toggle}>
                                                image/video
                                            </Button>
                                            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                                <ModalHeader toggle={this.toggle}>Upload</ModalHeader>
                                                <ModalBody>
                                                    <Input type="file" multiple onChange={e => this.handleFileChange(e)} />
                                                    <Input type="text" placeholder="Cations" onChange={this.handlePostChange}/>
                                                </ModalBody>
                                                <ModalFooter>
                                                    <Button color="primary" onClick={()=>{this.handleUpload(this.state.image,this.state.postValue)}} >Upload</Button>
                                                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                                </ModalFooter>
                                            </Modal>
                                        </Col>
                                        <Col>
                                            <Button onClick={() => this.handlePost(this.state.postValue)} type="button" className="socail_card_btn btn-fposts btn-block btn-sm" id="post">Post</Button>
                                        </Col>
                                    </div>
                                </CardFooter>
                            </Card>
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