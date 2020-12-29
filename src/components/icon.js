import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'

const SocialIcon = props => (
    <Link to={props.url}>
        {props.text} <FontAwesomeIcon icon={props.icon} />
    </Link>
)

export default SocialIcon;

