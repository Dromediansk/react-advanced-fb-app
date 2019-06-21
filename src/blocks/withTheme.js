import React, { Component } from 'react';
import { ThemeConsumer } from './ThemeContext';

export default function withTheme(MyComponent) {
    return class WrappedComponent extends Component {
        render() {
            return (
                <ThemeConsumer>
                    {theme => <MyComponent theme={theme} {...this.props} />}
                </ThemeConsumer>
            )
        }
    }
}