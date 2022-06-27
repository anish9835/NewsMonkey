import React from 'react'
import { useEffect, useState } from 'react'

export const GoTop = (props) => {
    const [goToTop, setGoToTop] = useState(false)
    const [display, setDisplay] = useState('none')
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                setGoToTop(true)
                setDisplay('block')
            } else {
                setGoToTop(true)
                setDisplay('none')
            }
        })
    }, [])
    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }
    return (
        <div>
            {goToTop && (<button
                type="button"
                className="btn btn-dark btn-floating btn-lg"
                id="btn-back-to-top" style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: '2222',
                    opacity: '0.8',
                    borderRadius: '100px',
                    display: display
                }}
                onClick={scrollUp}>
                <i className="fas fa-arrow-up"></i>
            </button>)
            }
        </div >
    )
}

