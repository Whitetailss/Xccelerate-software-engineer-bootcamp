import React from 'react';
import '../../assets/css/home/recommend.css';
import {withRouter} from 'react-router-dom';

const item = [
    {
        src: 'https://scontent.fhkg3-1.fna.fbcdn.net/v/t31.0-8/15110355_187051528423689_5044838082769033789_o.jpg?_nc_cat=100&_nc_oc=AQkPS4oKC8FUFvLKGur2gGJq3mdPBnMtXeKOU5eEMCSzD1c4sF3sVCe4XpmxWCgAni4&_nc_ht=scontent.fhkg3-1.fna&oh=76d02505b1af937c03f8b9afdbe63cb3&oe=5D844EF2',
        altText: 'Slide 2',
        caption: 'Harrow School'
    }
];

class FeaturedSchool extends React.Component {
    constructor(props) {
        super(props)
    }
    
    pushLink = () => {
        this.props.history.push('/detail')
    }

    render() {
        return (
            <div id='homeFeaturedSchool' onClick={() => this.pushLink()}>
                <img id='homeFeaturedSchoolImage' src={item[0].src} alt={item.altText}/>
                <div id='homeFeaturedSchoolText'>
                    <h5>Featured Kindergarten</h5>
                    <h4>Harrow International School Hong Kong</h4> 
                    <p>- Leadership for a better world</p>
                    <p className='homeFeaturedSchoolTextBold'>Learn more ></p>
                </div>
            </div>
        )
    }
}

export default FeaturedSchool = withRouter(FeaturedSchool);