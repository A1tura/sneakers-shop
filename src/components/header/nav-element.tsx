import { Component, ReactNode } from "react";

import "./css/nav-element.css";

interface ElementProps extends React.ComponentPropsWithoutRef<"div"> {
    text: string;
    isSelected?: boolean;
}

export default class Element extends Component<ElementProps> {

    constructor(props: ElementProps) {
        super(props)
    }

    render(): ReactNode {
        return (
            <div className={this.props.className}>
                <p className={`${this.props.isSelected ? 'linea' : ''} element-text`}>{(this.props.text).toUpperCase()}</p>
                {/* {this.props.isSelected ? (
                    <div className="linea"></div>
                ): (
                    <></>
                )} */}
            </div>
        )
    }
}