import React, { Component } from 'react'
import loader from './FadingLines.gif'
export class Spinner extends Component {
    render() {
        return (
            <div className="d-flex justify-content-center text-center">
                <img className='my-4' src={loader} alt="loading" style={{ width: '35px' }} />
            </div>
        )
    }
}

