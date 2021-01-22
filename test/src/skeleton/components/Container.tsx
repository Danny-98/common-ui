import React, { Component } from 'react';
import { ContainerType } from '../types'
class Container extends Component<ContainerType> {

    render() {
        const { width, height, children, minX = 0, minY = 0 } = this.props
        return (
            <svg width={width} height={height} viewBox={`${minX} ${minY} ${width} ${height}`}>
                {children}
            </svg>
        );
    }
}

export default Container;