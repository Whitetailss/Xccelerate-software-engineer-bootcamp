import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from './pages/HomePage';
import HomePageLogin from './pages/HomePageLogin';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import SearchPage from './pages/SearchPage';
import ComparePage from './pages/ComparePage';
import ProfilePage from './pages/ProfilePage';
import SchoolDetailPage from './pages/SchoolDetailPage';
import SettingProfilePage from './pages/SettingProfilePage';
import SettingPasswordPage from './pages/SettingPasswordPage';
import SettingOthersPage from './pages/SettingOthersPage';
import SchoolAuthPage from './pages/SchoolAuthPage';
import { CmsDetailsPage } from './pages/CmsDetailsPage';
import CmsEventPage from './pages/CmsEventPage';
import CmsSocialPage from './pages/CmsSocialPage';
import SocialPage from './pages/ViewSocial';


class PureRouter extends React.Component {

    render() {
        return (
            // style={{paddingTop: '8.5vh'}}
            <div>
                {this.props.isAuthenticated ? (
                    <div>
                        <Switch>
                            <Route exact path='/' component={HomePageLogin} />
                            <Route exact path='/profile' component={ProfilePage} />
                            <Route exact path='/setting' component={SettingProfilePage} />
                            <Route exact path='/search' component={SearchPage} />
                            <Route exact path='/compare' component={ComparePage} />
                            <Route path='/detail' component={SchoolDetailPage} />
                            <Route exact path='/setting' component={SettingProfilePage} />
                            <Route exact path='/setting/password' component={SettingPasswordPage} />
                            <Route exact path='/setting/others' component={SettingOthersPage} />
                            <Route component={HomePageLogin} />
                        </Switch>
                    </div>
                    ) : 
                    //testing version
                    // (<div>
                    //     <Switch>
                    //         <Route exact path='/cms/school_details' component={CmsDetailsPage} />
                    //         <Route exact path='/cms/events' component={CmsEventPage} />
                    //         <Route exact path='/cms/social' component={CmsSocialPage} />
                    //         <Route exact path='/cmsAuth' component={SchoolAuthPage}/>
                    //         <Route component={HomePage} />
                    //         <Route component={CmsDetailsPage} />
                    //         </Switch>
                    //         </div>)
                    
                    
                    // +++++++++++++++++++++++++++Finalized version+++++++++++++++++++++
                    
                    this.props.isSchoolAuthenticated ? (
                    <div>
                        <Switch>
                            <Route exact path='/cms/school_details' component={CmsDetailsPage} />
                            <Route exact path='/cms/events' component={CmsEventPage} />
                            <Route exact path='/cms/social' component={CmsSocialPage} />
                            <Route exact path='/cms/socialTest/6' component={SocialPage} />
                            <Route component={CmsDetailsPage} />
                        </Switch>
                    </div>
                    ) : (
                    <div>
                        <Switch>
                        <Route exact path='/cms/school_details' component={CmsDetailsPage} />

                        {/* <Route exact path='/cms/eventmodal' component={EventModal} /> */}
                        {/* <Route exact path='/cms/showevents' component={CmsShowEvents} /> */}

                        <Route exact path='/cms/events' component={CmsEventPage} />

                            <Route exact path='/' component={HomePage} />
                            <Route exact path='/login' component={LoginPage} />
                            <Route exact path='/signup' component={SignUpPage} />
                            <Route exact path='/search' component={SearchPage} />
                            <Route exact path='/compare' component={ComparePage} />
                            <Route path='/detail' component={SchoolDetailPage} />
                            <Route exact path='/cmsAuth' component={SchoolAuthPage}/>
                            <Route component={LoginPage} />
                        </Switch>
                    </div>
                    )
                    }
            
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isSchoolAuthenticated: state.cmsAuth.isSchoolAuthenticated
    }
};

export const Router = connect(mapStateToProps)(PureRouter)