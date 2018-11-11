import React , {Component} from 'react';

import './Banner.css';

class Banner extends Component {
    render () {
        return (
            <div className="Banner">
                <div className='banner-container'>
                    <div className='hero-image'>
                        <div className="text-center hero-quote">
                                <h1 className="text-uppercase">end the day right</h1>
                                <p>
                                Delivering great food to your office to eat <br />when you working late or to take home for dinner
                                </p>
                            <button className="btn btn-order text-uppercase">Order now</button>
                            <div className="slideIcon">
                                <div className="circle active"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                            </div>
                        </div>
                        
                    </div>    
                </div>
            </div>
        );
    }
}

export default Banner;