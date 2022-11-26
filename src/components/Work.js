import React from "react";
import { BottomNav } from "./BottomNav";

export const Work = () => {
    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <h1 className="title">Portfolio</h1>
                <div className="card">
                    <div className="card-content">
                        <div className="content">
                            Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.
                        </div>
                    </div>
                </div>
            </div>
            <BottomNav/>
        </section>
    );
}