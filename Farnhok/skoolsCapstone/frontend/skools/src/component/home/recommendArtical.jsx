import React from 'react';
import '../../assets/css/home/recommend.css'

const items = [
    {
        src: 'https://assets.babycenter.com/ims/2012/09/stk_expecting_PHP3073971_4x3.jpg?width=520',
        altText: 'Slide 2',
        article_name: '5 Reasons You Should Let Your Baby Cry',
        date: '2019-06-19'
    },
    {
        src: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F38%2F2015%2F07%2F12215923%2Fp_101703871.jpg&q=85',
        altText: 'Slide 2',
        article_name: '7 Ways to Raise a Well-Rounded Kid',
        date: '2019-06-15'
    }, {
        src: 'https://static01.nyt.com/images/2018/03/27/well/family/well-family-emotion/well-family-emotion-articleLarge.jpg?quality=75&auto=webp&disable=upscale',
        altText: 'Slide 2',
        article_name: '9 Steps to More Effective Parenting',
        date: '2019-06-14'
    }
];

export class RecommendArticle extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: false
        }
    }
    // componentDidMount() {
    //     document.addEventListener('scroll', this.recommendArticalHandleScroll);
    // }

    // componentWillUnmount() {
    //     document.removeEventListener('scroll', this.recommendArticalHandleScroll);
    // }

    // recommendArticalHandleScroll = () => {
    //     let body = document.documentElement;
    //     let height = body.scrollHeight - body.clientHeight
    //     if (window.scrollY === height && this.state.loading) {
    //         this.setState({
    //             loading: false
    //         });
    //     }
    // }


    render() {
        return (
            <div id='homeRecommendArticle'>
                {this.state.loading? null
                : (
                    <div>
                        <h5>Recommended Article</h5>
                        <div id='homeRecommendSchooContainer'>
                            <div className='homeRecommendArticleBox homeRecommendArticleBox0'>
                                <img id='homeRecommendArticleImage' src={items[0].src} alt={items[0].altText} />
                                <div id='homeRecommendArticleText'>
                                    <p className='homeRecommendArticleTextBold'>{items[0].article_name}</p>
                                    <div>
                                        <p>{items[0].date}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='homeRecommendArticleBox homeRecommendArticleBox1'>
                                <img id='homeRecommendArticleImage' src={items[1].src} alt={items[1].altText} />
                                <div id='homeRecommendArticleText'>
                                    <p className='homeRecommendArticleTextBold'>{items[1].article_name}</p>
                                    <div>
                                        <p>{items[1].date}</p>
                                    </div>
                                </div>
                            </div>

                            <div className='homeRecommendArticleBox homeRecommendArticleBox2'>
                                <img id='homeRecommendArticleImage' src={items[2].src} alt={items[2].altText} />
                                <div id='homeRecommendArticleText'>
                                    <p className='homeRecommendArticleTextBold'>{items[2].article_name}</p>
                                    <div>
                                        <p>{items[2].date}</p>
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

