import * as React from 'react';
import { connect } from 'react-redux';
import '../../assets/css/setting/editProfile.css';


class PureSettingOthers extends React.Component {

    render() {
        return (
            <div id='settingEditProfileContainer'>
                <div id='settingEditProfileHeader' className='settingEditProfilePadding'>
                    <h5>Other Setting</h5>
                </div>
                <div>
                    <div className='settingEditProfilePadding'>
                        <label>In Progress</label>
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

export const SettingOthers = connect(mapStateToProps, mapDispatchToProps)(PureSettingOthers)