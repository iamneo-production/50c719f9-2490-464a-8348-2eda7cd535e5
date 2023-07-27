import React from 'react'
import { Link } from 'react-router-dom'

function Pay(props) {
    return (
        <>
            <section style={{backgroundColor: "#eee", height:"90vh"}}>
                <div class="container py-5">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-8 col-lg-6 col-xl-4">
                            <div class="card rounded-3">
                                <div class="card-body mx-1 my-2">
                                    <div class="d-flex align-items-center">
                                        <div>
                                            <i class="fab fa-cc-visa fa-4x text-black pe-3"></i>
                                        </div>
                                        <div>
                                            <p class="d-flex flex-column mb-0">
                                                <b>{props.username}</b><span class="small text-muted">{props.card}</span>
                                            </p>
                                        </div>
                                    </div>

                                    <div class="pt-3">
                                        <div class="d-flex flex-row pb-3">
                                            <div class="rounded border border-primary border-2 d-flex w-100 p-3 align-items-center"
                                                style={{backgroundColor: "rgba(18, 101, 241, 0.07)"}}>
                                                <div class="d-flex align-items-center pe-3">
                                                    <input class="form-check-input" type="radio" name="radioNoLabelX" id="radioNoLabel11"
                                                        value="" aria-label="..." checked />
                                                </div>
                                                <div class="d-flex flex-column">
                                                    <p class="mb-1 small text-primary">Total amount due</p>
                                                    <h6 class="mb-0 text-primary">${props.price}</h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="d-flex flex-row pb-3">
                                            <div class="rounded border d-flex w-100 px-3 py-2 align-items-center">
                                                <div class="d-flex align-items-center pe-3">
                                                    <input class="form-check-input" type="radio" name="radioNoLabelX" id="radioNoLabel22"
                                                        value="" aria-label="..." />
                                                </div>
                                                <div class="d-flex flex-column py-1">
                                                    <p class="mb-1 small text-primary">Other amount</p>
                                                    <div class="d-flex flex-row align-items-center">
                                                        <h6 class="mb-0 text-primary pe-1">$</h6>
                                                        <input type="text" class="form-control form-control-sm" id="numberExample"
                                                            style={{width: "55px"}} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex justify-content-between align-items-center pb-1">
                                        <Link to="/payment" class="text-muted">Go back</Link>
                                        <button type="button" class="btn btn-primary btn-lg">Pay amount</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Pay