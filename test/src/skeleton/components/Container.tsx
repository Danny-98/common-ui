import React, { Component } from 'react';
import { ContainerType } from '../types'
class Container extends Component<ContainerType> {
    
    render() {
        const {width, height,children} = this.props
        return (
            <svg width={width} height={height}>
                {children}
            </svg>
        );
    }
}

export default Container;