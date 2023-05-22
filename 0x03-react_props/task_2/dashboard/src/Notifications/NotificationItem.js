import React from 'react';

export default function NotificationItem(props) {
    if (!props.html) {
        return (<li data-priority={props.type}>{props.value}</li>);
    } else {
        return (<li data-priority={props.type}
            dangerouslySetInnerHTML={{ __html: props.html }}></li>
        );
    }
}