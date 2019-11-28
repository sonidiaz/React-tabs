import React from 'react';
import PropsTypes from 'prop-types'


const Header = ({children = 'dqwdqw'}) => {

    return (
        <h1>{children}</h1>
    )
}

Header.propsTypes = {
    children: PropsTypes.symbol
}

export {Header}