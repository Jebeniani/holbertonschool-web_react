import React from 'react';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css'
import { getLatestNotification } from '../utils/utils.js';

export default function Notifications() {
    return (
        <div className='Notifications'>
            <p>Here is the list of notifications</p>
            <ul className='notification-list'>
                <li data-priority='default'>New course available</li>
                <li data-priority='urgent'>New resume available</li>
                <li
                    data-priority='urgent'
                    dangerouslySetInnerHTML={{ __html: getLatestNotification() }}
                >
                </li>
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
                <img src={closeIcon} alt='closeIcon' style={{ width: '20px', height: '20px', }} />
            </button>
        </div>
    );
}