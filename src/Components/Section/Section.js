import React, {Component} from 'react';

import './Section.css';
import step1img from './image/step1.png'
import step2img from './image/step2.png'
import step3img from './image/step3.png'


class Section extends Component {
    render () {
        return (
            <div className = "Section">
                <div className = "section-head text-center">
                    <h3>How it Works</h3>
                </div>
                <div className="section-content text-center">
                    <div className = "container-fluid">
                        <div className = "row">
                            <div className="col-lg-4">
                                <div className="box">
                                        <button className="btn">Step 1</button>
                                        <div className="step-img">
                                            <img src={step1img} alt="Step 1" />
                                            <p>Head to order page and select your dinner.</p>
                                            <p>Add any extra from our delicious range of breakfast, snacks and drinks.
                                            </p>
                                        </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="box">
                                    <button className="btn">Step 2</button>
                                    <div className="step-img">
                                        <img src={step2img} alt="Step 2" />
                                        <p>Click on shopping card or checkout to 
                                            pay for the order.</p>
                                        <p>While there you can choose the time slot  for delivery today, or     any other day of the  week
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="box">
                                    <button className="btn">Step 3</button>
                                    <div className="step-img">
                                        <img src={step3img} alt="Step 3" />
                                        <p>We deliver directly to your office within <b>45</b> to <b>50</b> minutes</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-section">
                            <button className="btn text-uppercase">Order now</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Section;