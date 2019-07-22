import * as React from 'react';
import { connect } from 'react-redux';
import '../../assets/css/setting/editProfile.css';


class PureSettingPassword extends React.Component {

    render() {
        return (
            <div id='settingEditProfileContainer'>
                <div id='settingEditProfileHeader' className='settingEditProfilePadding'>
                    <h5>Change Password</h5>
                </div>
                <div>
                    <div className='settingEditProfilePadding'>
                        <label>New Password</label>
                        <input className='searchSearchInput' type="text" name="name" placeholder="enter your first name"/>
                        <label>Re-enter New Password</label>
                        <input className='searchSearchInput' type="text" name="name" placeholder="enter your last name"/>
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
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

export const SettingPassword = connect(mapStateToProps, mapDispatchToProps)(PureSettingPassword)