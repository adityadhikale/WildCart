/**
 * The above code is a React component that renders a spinner for displaying a loading state.
 * 
 * Returns:
 *   The Spinner component is returning a div element that contains a spinner animation. The spinner
 * animation is created using the spinner-border class from Bootstrap and has a text saying
 * "Loading..." for visually impaired users.
 */
import React from 'react'

const Spinner = () => {
  return (
    <div>
       <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
    </div>
  )
}

export default Spinner
