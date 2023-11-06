import React, { useState } from "react";
import Transition from "./Transition";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Helmet } from "react-helmet-async";

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
            <Helmet>
                <title>Services</title>
                <meta name="description" content="Check out the services I provide: Weddings, Business Marketing, and Photography."/>
                <link rel="canonical" href="/services"/>
            </Helmet>
            <Transition>
                
                <section className="hero is-fullheight-with-navbar">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div className="columns">
                                <div className="column">
                                    <h1 className="title has-text-white is-uppercase is-italic">Weddings</h1>
                                    <p className="subtitle is-italic has-text-weight-light has-text-primary"> Starting at $2000</p>
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

                                                <p className="is-italic is-uppercase has-text-weight-semibold">Deliverables</p>
                                                <ul className="has-text-primary">
                                                    <li>30 Second Trailer Video</li>
                                                    <li>3-5 minute Highlight Video</li>
                                                    <li>Uncut Moments Video</li>
                                                    <li>USB Drive of Videos</li>
                                                </ul>
                                            </Transition>
                                        </> : <p><i>Click for more info</i></p>
                                    }
                                    
                                </div>

                                <div className="column">
                                    <h1 className="title has-text-white is-uppercase is-italic">Business Marketing</h1>
                                    <p className="subtitle is-italic has-text-weight-light has-text-primary"> Starting at $2000</p>
                                    <button className="button is-ghost has-text-white" onClick={handleShowHighlight}><MoreHorizIcon fontSize="large"/></button>
                                    
                                    {isHighlight ? 
                                        <>
                                            <Transition>
                                                <p className="is-italic is-uppercase has-text-weight-semibold">Before Production Services</p>
                                                <ul className="has-text-primary">
                                                    <li>Consultation Sessions</li>
                                                </ul>
                                                <br/>

                                                <p className="is-italic is-uppercase has-text-weight-semibold">Production Day Services</p>
                                                <ul className="has-text-primary">
                                                    <li>2-hour production</li>
                                                </ul>
                                                <br/>

                                                <p className="is-italic is-uppercase has-text-weight-semibold">Deliverables</p>
                                                <ul className="has-text-primary">
                                                    <li>10 highlight reels {'('}5-15 seconds per reel{')'}</li>
                                                    <li>10 product pictures</li>
                                                </ul>
                                            </Transition>
                                        </> :  <p><i>Click for more info</i></p>
                                    }
                                </div> 
                                <div className="column">
                                    <h1 className="title has-text-white is-uppercase is-italic">Photography</h1>
                                    <p className="subtitle is-italic has-text-weight-light has-text-primary"> Starting at $125 per hour</p>
                                    <button className="button is-ghost has-text-white" onClick={handleShowEvent}><MoreHorizIcon fontSize="large"/></button>
                                    
                                    {isEvent ? 
                                        <>
                                            <Transition>
                                                <p className="is-italic is-uppercase has-text-weight-semibold">Before Session Services</p>
                                                <ul className="has-text-primary">
                                                    <li>Consultation Sessions</li>
                                                    <li>Location Scouting</li>
                                                </ul>
                                                <br/>

                                                <p className="is-italic is-uppercase has-text-weight-semibold">Deliverables</p>
                                                <ul className="has-text-primary">
                                                    <li>Online Gallery of high quality pictures</li>
                                                </ul>
                                            </Transition>
                                        </> :  <p><i>Click for more info</i></p>
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