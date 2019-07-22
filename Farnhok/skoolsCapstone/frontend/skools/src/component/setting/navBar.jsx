import * as React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/css/setting/navBar.css';


export class SettingNavBar extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            noStyle: 'settingProfileNavTextAdd',
            style: 'settingProfileNavText',
        }
    }

    render() {
        return (
            <div id='settingAccountContainer'>
                <div>
                    {window.location.pathname === '/setting' ? (
                        <NavLink className={this.state.noStyle} to="/setting">Edit Profile</NavLink>
                    ) : (
                        <NavLink className={this.state.style} to="/setting">Edit Profile</NavLink>
                    )}
                </div>
                <div>
                    {window.location.pathname === '/setting/password' ? (
                        <NavLink className={this.state.noStyle} to="/setting/password">Change Password</NavLink>
                    ) : (
                        <NavLink className={this.state.style} to="/setting/password">Change Password</NavLink>
                    )}                
                </div>
                <div>
                    {window.location.pathname === '/setting/others' ? (
                        <NavLink className={this.state.noStyle} to="/setting/others">Other Settings</NavLink>
                    ) : (
                        <NavLink className={this.state.style} to="/setting/others">Other Settings</NavLink>
                    )}        
                </div>
            </div>
        )
    }
};

