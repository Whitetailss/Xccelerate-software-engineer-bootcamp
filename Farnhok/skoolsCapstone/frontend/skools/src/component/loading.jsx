import React from 'react';
import '../assets/css/loading.css'

export default class Loading extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            timer: 1,
            loading1: 'homeRecommedArticleLoading1',
            loading2: 'homeRecommedArticleLoading2',
            loading3: 'homeRecommedArticleLoading3',
        }
    }

    loadColor() {
        var sec = this.state.timer + 1;
        this.setState({
            timer: sec
        })
        if (this.state.timer % 3 === 2) {
            this.setState({
                loading1: 'homeRecommedArticleLoading3',
                loading2: 'homeRecommedArticleLoading1',
                loading3: 'homeRecommedArticleLoading2',
            })
        } else if (this.state.timer % 3 === 0) {
            this.setState({
                loading1: 'homeRecommedArticleLoading2',
                loading2: 'homeRecommedArticleLoading3',
                loading3: 'homeRecommedArticleLoading1',
            })
        } else {
            this.setState({
                loading1: 'homeRecommedArticleLoading1',
                loading2: 'homeRecommedArticleLoading2',
                loading3: 'homeRecommedArticleLoading3',
            })
        }
    }

    componentDidMount() {
        setInterval(()=>this.loadColor(), 200)
    }

    render() {
        return (
            <div className='homeRecommedArticleLoadingbox'>
                <div className='homeRecommedArticleLoading' id={this.state.loading1}></div>
                <div className='homeRecommedArticleLoading' id={this.state.loading2}></div>
                <div className='homeRecommedArticleLoading' id={this.state.loading3}></div>
            </div>
        )
    }
}