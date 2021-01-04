import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialIcon = props => (
    <a href={props.url} ariaLabel={props.label}>
        {props.text} <FontAwesomeIcon icon={props.icon} />
    </a>
)

export default SocialIcon;

