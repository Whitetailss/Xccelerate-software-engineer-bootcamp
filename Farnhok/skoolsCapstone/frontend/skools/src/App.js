import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { NavBar } from './component/navBar';
import { Router } from './Router';
import { connect } from 'react-redux';
import { checkLogin } from './redux/auth/actions';
import { checkCmsLogin } from './redux/cmsAuth/actions';
import './assets/css/font.css'
import Footer from './component/footer';

class PureApp extends React.Component {

  componentDidMount() {
    this.props.checkCmsLogin()
    this.props.checkLogin()
  }

  render() {
    return(
      <div>
          <BrowserRouter>
            <NavBar/>
            <Router/>
            <Footer />
          </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      isAuthenticated: state.auth.isAuthenticated
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
      checkLogin: () => {
          dispatch(checkLogin())
      },
      checkCmsLogin: () => {
        dispatch(checkCmsLogin())
    }
  }
};

export const App = connect(mapStateToProps, mapDispatchToProps)(PureApp)
