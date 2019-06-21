import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import './style.scss';

const menuItems = [
    {
        title: "Profile",
        iconName: "fas fa-user",
        path: "/dashboard/profile",
    }, {
        title: "Likes",
        iconName: "fas fa-share-alt",
        path: "/dashboard/likes",
    }, {
        title: "Logout",
        iconName: "fas fa-sign-out-alt",
        path: "/dashboard/profile",
    },
]

const modalRoot = document.getElementById('modal-root');
const modalElement = document.createElement('div');
const bodyClass = document.getElementsByTagName('body')[0].classList;

const Modal = ({ visible, logout, setVisible }) => {

    useEffect(() => {
        modalRoot.appendChild(modalElement);
    }, []);

    useEffect(() => {
        if (visible) {
            modalRoot.appendChild(modalElement);
            bodyClass.add('freeze')
            window.scrollTo(0, 0)
        } else {
            modalRoot.removeChild(modalElement);
            bodyClass.remove('freeze')
        }
    }, [visible]);

    return createPortal(
        <div className="modal-container">
            <div className="modal-content">
                <div className="info">
                    <label className="title">Logout</label>
                    <label className="subtitle">
                        Are you sure you want to log out?
                    </label>
                </div>

                <div className="buttons">
                    <button onClick={() => setVisible(false)}>Cancel</button>
                    <button onClick={logout}>Log out</button>
                </div>
            </div>
        </div>,
        modalElement
    )
}

const Sidebar = ({ history, user, logout, location }) => {
    const [logoutModalVisible, setLogoutModalVisible] = useState(false)

    useEffect(() => {
        console.log('useEffect');

    }, []);

    return (
        <>
            <Modal visible={logoutModalVisible}
                logout={logout}
                setVisible={setLogoutModalVisible}
            />

            <div className="sidebar">
                <div className="profile-preview">
                    <img alt="avatar" src={user.picture.data.url} className="avatar" />

                    <div className="profile-info">
                        <label className="name">{user.name}</label>
                        <label>Registered</label>
                    </div>
                </div>

                <div className="menu">
                    {menuItems.map((item, idx) => (
                        <div key={idx} className={`menu-item ${location.pathname === item.path && 'active'}`}
                            onClick={() => {
                                item.title === "Logout" && setLogoutModalVisible(true);
                                history.push(item.path)
                            }}>
                            <i className={item.iconName} />
                            <label>{item.title}</label>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

const mapState = state => ({
    user: state.session.user
})

const mapDispatch = dispatch => ({
    logout: () => dispatch.session.logout()
});

export default withRouter(connect(
    mapState,
    mapDispatch
)(Sidebar));