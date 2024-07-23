import { Component, ReactNode } from "react";
import "./css/header.css"

import Element from "./nav-element";

type HeaderProps = React.ComponentPropsWithoutRef<"div">;

export default class Header extends Component<React.ComponentPropsWithoutRef<"div">> {

    constructor(props: HeaderProps) {
        super(props);
    }

    render(): ReactNode {
        return (
            <div className="header" style={this.props.style}>
                <img className="header-logo" src="https://pngimg.com/d/nike_PNG4.png" width={186} height={94} />
                <div className="navigations-container">
                    <div className="navigation">
                        {/* <h1 className="navigation-element">Test</h1>
                        <h1 className="navigation-element">Test</h1>
                        <h1 className="navigation-element">Test</h1>
                        <h1 className="navigation-element">Test</h1>
                        <h1 className="navigation-element">Test</h1> */}

                        <Element text="Home" />
                        <Element isSelected={true} text="Collection" />
                        <Element text="About" />
                        <Element text="Contact" />

                    </div>
                </div>
                <div className="nav">
                    <img src="./assets/shop.svg" width={50} height={34} />
                    <img className="menu-icon" src="./assets/menu.svg" width={59} height={30} />
                </div>
            </div>
        )
    }
}