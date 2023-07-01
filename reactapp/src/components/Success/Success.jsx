import React from 'react'

function Success(props) {
    return (
        <>
            {props.booking ? (
                <div className="container mt-3">
                    <div className="jumbotron">
                        <h1 className="display-4">Booking Successful!!</h1>
                        <p className="lead">Your Booking ID is {props.id}</p>
                        <hr className="my-4" />
                        <p>For more Bookings..</p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" href="#" role="button">Back to Home</a>
                        </p>
                    </div></div>
            ) : (
                <div className="container mt-3">
                    <div className="jumbotron">
                        <h1 className="display-4">Booking failed!!</h1>
                        <p className="lead">Please try again later!!!...</p>
                        <hr className="my-4" />
                        {/* <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p> */}
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" href="#" role="button">Back to Home</a>
                        </p>
                    </div></div>
            )}
        </>
    )
}

export default Success



