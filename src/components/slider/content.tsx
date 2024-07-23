import { Component, ComponentPropsWithoutRef, MouseEventHandler } from "react";
import { Vector3 } from "three";

import "./css/content.css";
import { SneakerCanvas } from "./sneaker";

interface SliderContentProps extends ComponentPropsWithoutRef<"div"> {
    name: "sneaker" | "sneaker2";
    price: number;
    description: string;
    camera: [number, number, number];
    fov: number;

    onNextSlide: MouseEventHandler<HTMLDivElement>;
    onPrevSlide: MouseEventHandler<HTMLDivElement>;
}

export default class SliderContent extends Component<SliderContentProps> {

    constructor(props: SliderContentProps) {
        super(props);
    }

    render() {
        return (
            <div className="content">
                <div className="image-container">
                    <div className="prev-button">
                        <img className="arrow" src="./assets/next-arrow.svg" onClick={this.props.onPrevSlide} />
                    </div>
                    {/* <img className="image" src={this.props.img} /> */}
                    <SneakerCanvas name={this.props.name} camera={this.props.camera} fov={this.props.fov} />
                    <div className="next-button" onClick={this.props.onNextSlide}>
                        <img className="arrow" src="./assets/prev-arrow.svg" />
                    </div>
                </div>

                <div className="info-container">
                    <div className="info">
                        <p className="info-price">${this.props.price}</p>
                        <p className="info-description">${this.props.description}</p>
                    </div>
                    <p className="buy-now line">BUY NOW</p>
                </div>
            </div>
        )
    }
}