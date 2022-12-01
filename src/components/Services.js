import React, { useState } from "react";
import Transition from "./Transition";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

export const Services = () => {
    const [isWedding, showWedding] = useState(false);
    const [isEvent, showEvent] = useState(false);
    const [isHighlight, showHighlight] = useState(false);

    const handleShowWedding = () => {
        isWedding ? showWedding(false) : showWedding(true);
    }
    const handleShowEvent = () => {
        isEvent ? showEvent(false) : showEvent(true);
    }
    const handleShowHighlight = () => {
        isHighlight ? showHighlight(false) : showHighlight(true);
    }

    return (
        <>
            <Transition>

                <section className="hero is-fullheight-with-navbar">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="columns">
                                <div className="column">
                                    <h1 className="title has-text-white is-uppercase is-italic">Weddings</h1>
                                    <p className="subtitle is-italic has-text-weight-light has-text-primary"> From $1000 - $1500</p>
                                    <button className="button is-ghost has-text-white" onClick={handleShowWedding}><MoreHorizIcon fontSize="large"/></button>
                                    {isWedding ? 
                                        <>  
                                            <Transition>

                                                <p className="is-italic is-uppercase has-text-weight-semibold">Before Wedding Day Services</p>
                                                <ul className="has-text-primary">
                                                    <li>Consultation Sessions</li>
                                                </ul>
                                                <br/>

                                                <p className="is-italic is-uppercase has-text-weight-semibold">Wedding Day Services</p>
                                                <ul className="has-text-primary">
                                                    <li>Full Wedding Coverage</li>
                                                </ul>
                                                <br/>

                                                <p className="is-italic is-uppercase has-text-weight-semibold">Post Wedding Day Services</p>
                                                <ul className="has-text-primary">
                                                    <li>2 revisions</li>
                                                    <li>Color Grading</li>
                                                    <li>Sound Design and SFX</li>
                                                </ul>
                                                <br/>

                                                <p className="is-italic is-uppercase has-text-weight-semibold">Deliverables</p>
                                                <ul className="has-text-primary">
                                                    <li>30 Second Trailer Video</li>
                                                    <li>3-5 minute Highlight Video</li>
                                                    <li>Uncut Moments Video</li>
                                                </ul>
                                            </Transition>
                                        </> : ""
                                    }
                                    
                                </div>

                            <div className="column">
                                    <h1 className="title has-text-white is-uppercase is-italic">Event Recaps</h1>
                                    <p className="subtitle is-italic has-text-weight-light has-text-primary"> From $1000</p>
                                    <button className="button is-ghost has-text-white" onClick={handleShowEvent}><MoreHorizIcon fontSize="large"/></button>
                                    
                                    {isEvent ? 
                                        <>
                                            <Transition>
                                                <p className="is-italic is-uppercase has-text-weight-semibold">Before Event Services</p>
                                                <ul className="has-text-primary">
                                                    <li>Consultation Sessions</li>
                                                </ul>
                                                <br/>

                                                <p className="is-italic is-uppercase has-text-weight-semibold">Event Day Services</p>
                                                <ul className="has-text-primary">
                                                    <li>Full Event Coverage</li>
                                                </ul>
                                                <br/>

                                                <p className="is-italic is-uppercase has-text-weight-semibold">Post Event Day Services</p>
                                                <ul className="has-text-primary">
                                                    <li>2 revisions</li>
                                                    <li>Color Grading</li>
                                                    <li>Sound Design and SFX</li>
                                                </ul>
                                                <br/>

                                                <p className="is-italic is-uppercase has-text-weight-semibold">Deliverables</p>
                                                <ul className="has-text-primary">
                                                    <li>30 Second Trailer Video</li>
                                                    <li>3-5 minute Highlight Video</li>
                                                </ul>
                                            </Transition>
                                        </> : ""
                                    }

                                </div>

                                <div className="column">
                                    <h1 className="title has-text-white is-uppercase is-italic">Highlight Reels</h1>
                                    <p className="subtitle is-italic has-text-weight-light has-text-primary">From $300 - $800</p>
                                    <button className="button is-ghost has-text-white" onClick={handleShowHighlight}><MoreHorizIcon fontSize="large"/></button>
                                    
                                    {isHighlight ? 
                                        <>
                                            <Transition>

                                                <p className="is-italic is-uppercase has-text-weight-semibold">Before Shoot Services</p>
                                                <ul className="has-text-primary">
                                                    <li>Consultation Sessions</li>
                                                    <li>Idea Drafting</li>
                                                </ul>
                                                <br/>

                                                <p className="is-italic is-uppercase has-text-weight-semibold">During Shoot Services</p>
                                                <ul className="has-text-primary">
                                                    <li>Full Video Coverage</li>
                                                    <li>Active Consultation</li>
                                                </ul>
                                                <br/>

                                                <p className="is-italic is-uppercase has-text-weight-semibold"> Post Shoot Services</p>
                                                <ul className="has-text-primary">
                                                    <li>Unlimited Revisions</li>
                                                    <li>Color Grading</li>
                                                    <li>Sound Design and SFX</li>
                                                </ul>
                                                <br/>

                                                <p className="is-italic is-uppercase has-text-weight-semibold">Deliverables</p>
                                                <ul className="has-text-primary">
                                                    <li>30s - 2 minute Highlight Reel</li>
                                                </ul>
                                            </Transition>
                                        </> : ""
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                            <div className="hero-foot mb-5">
                                <p className="has-text-centered is-italic is-size-7">
                                    ***Please note that all prices and services are subject to change based on demand/negotiation <br/>
                                    The above services are typical serivces that I provide but does not restrict me from pursuing other creative projects***<br/>
                                </p>
                            </div>
                </section>
            </Transition>
        </>        
    );
}