import React from 'react';
import '../../assets/css/home/recommend.css'

const items = [
    {
        src: 'https://firebasestorage.googleapis.com/v0/b/capstone-project-83c20.appspot.com/o/kentville-k1-admission.jpg?alt=media&token=04156272-4d10-4a49-bcfd-a84318ba126c',
        altText: 'Slide 1',
        school_name: 'Kentville Kindergarten',
        location: 'Kowloon city'
    },
    {
        src: 'https://firebasestorage.googleapis.com/v0/b/capstone-project-83c20.appspot.com/o/soka.jpg?alt=media&token=33d3e698-d1b2-4de2-8909-faaecc090de2',
        altText: 'Slide 2',
        school_name: 'Hong Kong Soka Kindergarten',
        location: 'Kowloon city'
    },
    {
        src: 'https://firebasestorage.googleapis.com/v0/b/capstone-project-83c20.appspot.com/o/cannan-kindergarten-nursery.jpg?alt=media&token=df35c62b-0095-487e-a5ad-94a66bb33e39',
        altText: 'Slide 3',
        school_name: 'Cannan Kindergarten',
        location: 'Kowloon city'
    },
    {
        src: 'https://firebasestorage.googleapis.com/v0/b/capstone-project-83c20.appspot.com/o/munsang.jpg?alt=media&token=e8a720f4-32a2-46f3-a7e0-f5a3366e2396',
        altText: 'Slide 4',
        school_name: 'Munsang College Kindergarten',
        location: 'Kowloon city'
    }
];

export class RecommendSchool extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false
        }
    }
    // componentDidMount() {
    //     document.addEventListener('scroll', this.recommendSchoolHandleScroll);
    // }

    // componentWillUnmount() {
    //     document.removeEventListener('scroll', this.recommendSchoolHandleScroll);
    // }

    // recommendSchoolHandleScroll = () => {
    //     let body = document.documentElement;
    //     let height = body.scrollHeight - body.clientHeight
    //     console.log(height)
    //     console.log(window.scrollY - 100)
    //     if (window.scrollY  === height && this.state.loading) {
    //         this.setState({
    //             loading: false
    //         });
    //     }
    // }

    render() {
        return (
            <div id='homeRecommendSchool'>
                {this.state.loading ? null
                 : (
                    <div>
                        <h5>Recommended School</h5>
                        <div id='homeRecommendSchooContainer'>
                            <div className='homeRecommendSchoolBox homeRecommendSchoolBox0'>
                                <img id='homeRecommendSchoolImage' src={items[0].src} alt={items[0].altText} />
                                <div id='homeRecommendSchoolText'>
                                    <p className='homeRecommendSchoolTextBold'>{items[0].school_name}</p>
                                    <div>
                                        <p>{items[0].location}</p>
                                        <p>score: 4.8</p>
                                    </div>
                                </div>
                            </div>

                            <div className='homeRecommendSchoolBox homeRecommendSchoolBox1'>
                                <img id='homeRecommendSchoolImage' src={items[1].src} alt={items[1].altText} />
                                <div id='homeRecommendSchoolText'>
                                    <p className='homeRecommendSchoolTextBold'>{items[1].school_name}</p>
                                    <div>
                                        <p>{items[1].location}</p>
                                        <p>score: 4.7</p>
                                    </div>
                                </div>
                            </div>

                            <div className='homeRecommendSchoolBox homeRecommendSchoolBox2'>
                                <img id='homeRecommendSchoolImage' src={items[2].src} alt={items[2].altText} />
                                <div id='homeRecommendSchoolText'>
                                    <p className='homeRecommendSchoolTextBold'>{items[2].school_name}</p>
                                    <div>
                                        <p>{items[2].location}</p>
                                        <p>score: 4.5</p>
                                    </div>
                                </div>
                            </div>

                            <div className='homeRecommendSchoolBox homeRecommendSchoolBox3'>
                                <img id='homeRecommendSchoolImage' src={items[3].src} alt={items[3].altText} />
                                <div id='homeRecommendSchoolText'>
                                    <p className='homeRecommendSchoolTextBold'>{items[3].school_name}</p>
                                    <div>
                                        <p>{items[3].location}</p>
                                        <p>score: 4.6</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

