import React from "react";
import 'mdbreact/dist/css/mdb.css';
import { MDBIcon } from "mdbreact";

import '../AndroidIcon/style.css';

function AndroidIcon() {

    return (
        <a
        className="app-download"
        id="android-apple"
        href="https://www.apple.com/?afid=p238%7CseIEs444j-dc_mtid_1870765e38482_pcrid_479177971632_pgrid_13945964887_&cid=aos-us-kwgo-brand-apple--slid---product-"
        target="apple"
        rel="apple download"
        >
            <MDBIcon fab icon="android" />
        </a>
    )
}

export default AndroidIcon;