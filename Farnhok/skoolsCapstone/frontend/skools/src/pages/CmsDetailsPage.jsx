import React from 'react';
import {Uploader} from '../component/schoolCms/singleUploader';
import {DetailsInput} from '../component/schoolCms/contactInfo';
import {OtherDetails} from '../component/schoolCms/cmsInput';
import './../assets/css/cms/cmsDetails.css';
import {Col, Row, Button} from 'reactstrap';
import {TeacherInfoDisplay, FacilityInfoDisplay} from '../component/schoolCms/mixInputList'
import {submitCmsContent, submitCmsMedia} from '../redux/cmsDetails/action'

import { connect } from 'react-redux';


class PureCmsDetailsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    };


    submitInfo = e =>{
        e.preventDefault();
        let bannerImg = this.props.bannerUrl;
        let mainVideo = this.props.videoUrl;
        let contactInfo = this.props.contactInfo;
        let moreDetails = this.props.moreDetails

        console.log(bannerImg, contactInfo, mainVideo, moreDetails)

        this.props.submitCmsContent(bannerImg, mainVideo, contactInfo, moreDetails)

    }

    submitMedia = e =>{
        e.preventDefault();      
        let facility = this.props.facility;
        let teacher = this.props.teacher;


        console.log(facility, teacher)

        this.props.submitCmsMedia(facility, teacher)

    }

    render() {

        let bannerUploader = {
            style: {
                backgroundColor: '#d1cfcf',
                minHeight: '400px',
                padding: '10px',
                width: '100vw',
            },
            text: 'School Banner'

        }

        let smallUploader = {
            style: {
                backgroundColor: '#d1cfcf88',
                minHeight: '300px',
                padding: '10px',
                width: '45vw',
            },
            text: 'Teachers Team',
            text1: 'Principal Video',
            text2: 'Facility Photos'
        }

//view the uploaded banner to the box
        let style = bannerUploader.style;
        let bannerImg = this.props.bannerUrl;
        style.backgroundImage = `url(${bannerImg})`;
//view the uploaded video to the box 


        return (
            <div>
                <div className='cmsButtonNav'>

                    <Button color='warning' className='cmsBtn' onClick={this.submitInfo}>Save this section</Button>

                   {/* <Button color='secondary' className='cmsBtn'>Publish</Button>*/}

                </div>
                <Uploader style={bannerUploader.style} text={bannerUploader.text} hasCaption='hide' hasClear='hide' uploaderName='banner'/>
              

                <Row style={{padding:'3vw'}}>
                    <Col xs="6">
                        <DetailsInput />
                        <OtherDetails/>
                    </Col>
                    <Col xs="6">
                    <div id='video-box' style={{position: 'relative'}}>
                    <div id='video_overlays'>
                    <Uploader style={smallUploader.style} text={smallUploader.text1} uploaderName='mainVideo' hasCaption='hide' hasClear='hide'/></div>
                    
                    <video style={{position:'absolute', left:'0', width: '45vw', minHeight:'300px', maxHeight:'300px'}} controls
                     src = {this.props.videoUrl} type='video/mp4'>
                   </video>
                   </div>
                    </Col>
                    
                </Row>
                
                {/*<div className='cmsButtonNav'>

                    <Button color='warning' className='cmsBtn' onClick={this.submitMedia}>Save this section</Button>

        </div>*/}

                <Row  style={{padding:'3vw'}}>
                    <Col xs="6">
                        <Uploader style={smallUploader.style} text={smallUploader.text}  hasCaption='show' hasClear='show' uploaderName='teacher'/>
                    </Col>
                    <Col xs="6">
                        <TeacherInfoDisplay />
                    </Col>
                </Row>

                <Row  style={{padding:'3vw'}}>
                    <Col xs="6">
                        <Uploader style={smallUploader.style} text={smallUploader.text2}  hasCaption='show' hasClear='show' uploaderName='facility' />
                    </Col>
                    <Col xs="6">
                        <FacilityInfoDisplay/>
                    </Col>
                </Row>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        bannerUrl: state.cmsDetail.bannerImgUrl,
        videoUrl: state.cmsDetail.mainVideoUrl,
        contactInfo: state.cmsDetail.contactInfo,
        facility: state.cmsDetail.facility,
        teacher: state.cmsDetail.teacher,
        moreDetails: state.cmsDetail.moreDetails
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        submitCmsContent: (bannerImg, mainVideo, contactInfo, moreDetails)=>{
            dispatch(submitCmsContent(bannerImg, mainVideo, contactInfo, moreDetails))
        }
        // submitCmsMedia: (facility, teacher)=>{
        //     dispatch(submitCmsMedia(facility, teacher))
        // }
    }
}
export const CmsDetailsPage = connect(mapStateToProps, mapDispatchToProps)(PureCmsDetailsPage)