import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        console.log('getDerivedStateFromError', error);
        return { hasError: true };
    }

    render() {
        const { hasError } = this.state;
        const { children, location } = this.props;

        if (hasError) {
            if (location === "sidebar") {
                return <div className="sidebar">Error in sidebar</div>
            }
            return <div className="error-screen">
                <i className="fas fa-bug" />
                <h1>Error appeared</h1>
                <h2>Try again later please</h2>
            </div>
        }

        return children;
    }
}

export default ErrorBoundary;