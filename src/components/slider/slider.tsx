import { Component, ReactNode } from "react";

import "./css/slider.css"

import data from "../../products.json";
import SliderContent from "./content";

interface IProps {}

interface IState {
    data: any,
    index: number
}

export default class Slider extends Component<IProps, IState> {

    constructor(props: any) {
        super(props)
        this.state = {
            data: null,
            index: 0
        }

        this.nextSlide = this.nextSlide.bind(this)
        this.prevSlide = this.prevSlide.bind(this)
    }

    componentDidMount(): void {
        this.setState({
            data
        })
    }

    nextSlide(): void {
        this.setState((prevState) => ({
            index: (prevState.index + 1) % prevState.data.length
        }));
    }

    prevSlide(): void {
        this.setState((prevState) => ({
            index: (prevState.index - 1 + prevState.data.length) % prevState.data.length
        }));
    }

    render(): ReactNode {
        
        return (
            <>
                {this.state.data !== null && (
                    <div className="slider">
                        <SliderContent
                            price={this.state.data[this.state.index].price}
                            description={this.state.data[this.state.index].description}
                            name={this.state.data[this.state.index].name}
                            camera={this.state.data[this.state.index].camera}
                            fov={this.state.data[this.state.index].fov}
                            onNextSlide={this.nextSlide}
                            onPrevSlide={this.prevSlide}
                        />                        
                    </div>
                )}
            </>
        )
    }
}