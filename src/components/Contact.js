import React from "react";
import Transition from "./Transition";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Form } from "./Form";

export const Contact = () => {
    return (
        <>
            <Transition>

                <section className="hero is-fullheight-with-navbar">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title is-2 has-text-centered has-text-white is-uppercase is-italic">Contact</h1>
                            <div className="columns">
                                <div className="column is-one-third">
                                    <h1 className="title is-4 has-text-white is-uppercase is-italic has-text-centered">Social Media</h1>
                                    <div className="container has-text-centered">
                                        <p className="has-text-primary has-text-weight-semibold ">Instagram</p><br/>
                                        <a className=" subtitle is-6 has-text-white" href="https://www.instagram.com/paez_visuals/" target="_blank" rel="noreferrer" ><InstagramIcon fontSize="large"/></a>
                                    </div>
                                    <br/><br/>
                                    <div className="container has-text-centered">
                                        <p className="has-text-primary has-text-weight-semibold ">Youtube</p><br/>
                                        <a className=" subtitle is-6 has-text-white" href="https://www.youtube.com/channel/UCPD8PSa_CDh72r80QqNJd_Q" target="_blank" rel="noreferrer" ><YouTubeIcon fontSize="large"/></a>
                                    </div>
                                </div>
                                <div className="column is-two-third">
                                    <Form/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <BottomNav/> */}
                </section>
            </Transition>
        </>
    );
}