import React, { Component } from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils.js';
import NotificationItem from './NotificationItem';

class Notifications extends Component {
    markAsRead = (id) => {
        console.log(`Notification ${id} has been marked as read`);
    };

    render() {
        const { displayDrawer } = this.props;

        return (
            <React.Fragment>
                <div className="menuItem">Your Notifications</div>
                {displayDrawer ? (
                    <div className="Notifications" display={displayDrawer}>
                        <p>Here is the list of notifications</p>
                        <ul className="notification-list">
                            <NotificationItem type="default" value="New course available" />
                            <NotificationItem type="urgent" value="New resume available" />
                            <NotificationItem
                                type="urgent"
                                html={{ __html: getLatestNotification() }}
                                markAsRead={this.markAsRead}
                            />
                        </ul>
                        <button
                            aria-label="Close"
                            onClick={() => {
                                console.log('Close button has been clicked');
                            }}
                            style={{
                                position: 'absolute',
                                right: '20px',
                                top: '15px',
                                width: '20px',
                                height: '20px',
                                background: 'none',
                                border: 'none'
                            }}
                        >
                            <img
                                src={closeIcon}
                                alt="closeIcon"
                                style={{ width: '20px', height: '20px' }}
                            />
                        </button>
                    </div>
                ) : (
                    <></>
                )}
            </React.Fragment>
        );
    }
}

Notifications.propTypes = {
    displayDrawer: PropTypes.bool
};

Notifications.defaultProps = {
    displayDrawer: false
};

export default Notifications;
