import React, { Component } from 'react';
import { ContainerType } from '../types'

const Container = (props: ContainerType) => {
    const { width, height, children } = props
    return (
        <div style={{ width, height }} className="sk-container">
            {children}
        </div>
    )
}
export default Container;
