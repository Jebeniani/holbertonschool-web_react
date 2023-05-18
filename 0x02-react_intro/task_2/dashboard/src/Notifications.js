import React from 'react';
import './Notifications.css';
import getLatestNotification from './utils';
import closeIcon from './close-icon.png';



function Notifications() {
    const handleClick = () => {
        console.log('Close button has been clicked');
    };

    return (
        <div className="Notifications">
            <button
                style={{ float: 'right' }}
                aria-label="Close"
                onClick={handleClick}
            >
                <img src={closeIcon} alt="Close" />
            </button>

            <div className="Notifications">
                <p>Here is the list of notifications</p>
            </div>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li dangerouslySetInnerHTML={{ __html: getLatestNotification() }} />
            </ul>
        </div>
    );
}


export default Notifications;
