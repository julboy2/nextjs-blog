import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    // Define a state variable to track whether is an error or not
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  // 에러가 났을때 state  를 업데이트 하겠다.
  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    console.log(`getDerivedStateFromError : ${error}`);
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    // You can use your own error logging service here
    console.log(`componentDidCatch : ${(error, errorInfo)}`);
  }
  render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>Error occured!!</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    // Return children components in case of no error

    return this.props.children;
  }
}

export default ErrorBoundary;
