import * as React from 'react';
import { connect } from 'react-redux';
import userBlue from '../../assets/image/userBlue.svg'
import '../../assets/css/setting/editProfile.css';


class PureSettingEditProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            userPicture: null
        }
    }

    componentDidMount() {
        const userPicture = localStorage.getItem('userPicture')
        if (userPicture) {
            this.setState({
                userPicture: userPicture
            })
        }
    }

    render() {
        return (
            <div id='settingEditProfileContainer'>
                <div id='settingEditProfileHeader' className='settingEditProfilePadding'>
                    <h5>Edit Profile</h5>
                </div>
                <div>
                    <div id='settingEditProfilePhoto' className='settingEditProfilePadding'>
                        <div>
                            {this.state.userPicture !== null ?
                                <img id='settingEditProfileIcon' src={this.state.userPicture} alt='empty' />
                                :
                                <img id='settingEditProfileIcon' src={userBlue} alt='' />
                            }
                        </div>
                        {this.state.userPicture !== null ? (
                            <div id='settingEditProfilePhotoMargin'>
                                <p>Profile photo is an important way for users and schools to learn about each other. Be sure to use a photo that doesn’t include any personal or sensitive info you’d rather not have users and schools to see. (You can only edit the profile picture in your Facebook)</p>
                            </div>
                        ) : (
                            <div id='settingEditProfilePhotoMargin'>
                                <p>Profile photo is an important way for users and schools to learn about each other. Be sure to use a photo that doesn’t include any personal or sensitive info you’d rather not have users and schools to see.</p>
                                <button className='settingEditProfileButtonUpload'>Upload a photo</button>
                            </div>
                        )}
                    </div>
                    <div className='settingEditProfilePadding'>
                        <label>First Name</label>
                        <input className='searchSearchInput' type="text" name="name" placeholder="enter your first name" />
                        <label>Last Name</label>
                        <input className='searchSearchInput' type="text" name="name" placeholder="enter your last name" />
                    </div>
                    <div className='settingEditProfilePadding'>
                        <button className='settingEditProfileButtonSave' onClick={this.onSearch}>Save</button>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        userPicture: null
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export const SettingEditProfile = connect(mapStateToProps, mapDispatchToProps)(PureSettingEditProfile)