import axios from 'axios';
import React, { Component } from 'react';
import { storage } from '../../firebase';
import {Input, Button, Progress} from 'reactstrap';
import { connect } from 'react-redux';
import {uploadMedia} from '../../redux/cmsDetails/action'
import './../../../src/assets/css/cms/cmsDetails.css';

class PureUploader extends Component {
   constructor(props) {
       super(props);
       this.state = {
           image: '',
           progress: 0,
           caption: null,
           errMsg: ''
       }

       this.handleChange = this.handleChange.bind(this);
       this.handleUpload = this.handleUpload.bind(this);
       this.handleInput = this.handleInput.bind(this);
       this.clearInput = this.clearInput.bind(this)
   }


   handleInput = e => {
    this.setState({
        [e.target.name]: e.target.value,
    })
}


   handleChange = e => {
       let file = e.target.files[0];
       console.log(file)
           this.setState(
               {image:file});

       }
   

    handleUpload = async (e) => {
        const { image } = this.state;
        let uploaderName = e.target.name;
        let caption = this.state.caption;
  console.log( e.target.name, this.state.caption)

        if((uploaderName === 'teacher' || uploaderName === 'facility') && caption === null){
            this.setState({errMsg:'Do not leave caption/description blank'})
        } else {

            let uploadTask = storage.ref(`image/${image.name}`).put(image);

            uploadTask.on('state_changed',
                (snapshot) => {
                    console.log('snapshot')
                    const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                    this.setState({ progress })
                } //progress function .....
                , (error) => { //error function
                    console.log(error);
                }, () => {
                    storage.ref('image').child(image.name).getDownloadURL().then(
                        async (url) => {
                        
                        if(uploaderName==='teacher'){
                            console.log('uploading teacher')
                            let photoOptions = {
                                method: 'POST',
                                url: `http://localhost:8080/school/`,
                                data: {url: url, caption:caption, photo_category:'teacher'},
                                headers: {
                                    'Authorization': 'Bearer ' + localStorage.getItem('cmsToken')
                                    }
                                }
                           let teacherPhoto = await axios(photoOptions) 
                        }
                            
                        
                        else if(uploaderName === 'facility'){

                            console.log('uploading facility')
                            let photoOptions = {
                                method: 'POST',
                                url: `http://localhost:8080/school/`,
                                data: {url: url, caption:caption, photo_category:'facility'},
                                headers: {
                                    'Authorization': 'Bearer ' + localStorage.getItem('cmsToken')
                                }
                            }
                            let facilityPhoto = await axios(photoOptions)

                        }    

                        this.props.uploadMedia(url, caption, uploaderName)
                        }

                        )  // define image name
                    })
                
            
            };
        }
    
    clearInput = e => {
        e.preventDefault();
        this.setState({
            image:'',
            caption: '',
            progress:0
        })
    }


   render() {

        return (
            <div style={this.props.style}>
                <h1>{this.props.text}</h1>
                <div className='uploadBar'>
                    <div>
                        <Input type='file' onChange={e => this.handleChange(e)} />
                    </div>
                    <div >
                        <Input id='captionInput'
                        className={this.props.hasCaption}
                        type='textarea' 
                        name='caption' 
                        placeholder='Caption/Description' 
                        value={this.state.caption} 
                        onChange={this.handleInput}/>
                    </div>
                    
                    <div>
                        <Button name={this.props.uploaderName} onClick={this.handleUpload}>Upload</Button>
                        <br />
                    </div>
                </div>
                <div className='progressBar'>
                    <div>
                        <Progress bar value={this.state.progress} max='100'> LOADING </Progress>
                        <br/>
                    </div>
                    <div>{this.state.errMsg}</div>
                    <div>
                        <Button className={this.props.hasClear} color='primary' onClick={this.clearInput}>Add Another</Button>
                    </div>
                </div>
                    
                
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        uploadMedia: (url, caption, uploaderName) => {
            dispatch(uploadMedia(url, caption, uploaderName))
     }
}
}
export const Uploader = connect(null, mapDispatchToProps)(PureUploader);
