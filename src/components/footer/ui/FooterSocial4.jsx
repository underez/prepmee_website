import Link from "next/link";
import React from "react";

export default function FooterSocial4() {
    return (
        <div className="social-widget">
            <h5 className="text-white mb20">Follow Us</h5>
            <div className="social-style1">
                <Link href="/">
                    <i className="fab fa-facebook list-inline-item" />
                </Link>
                <Link href="/">
                    <i className="fab fa-youtube list-inline-item" />
                </Link>
      
            </div>
        </div>
    );
}