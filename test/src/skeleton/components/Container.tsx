import React, { Component } from 'react';
import { ContainerType } from '../types'
class Container extends Component<ContainerType> {

    render() {
        const { width, height, children, minX = 0, minY = 0 } = this.props
        return (
            <div style={{height,width}} className="card">
                {children}
            </div>
        );
    }
}

export default Container;