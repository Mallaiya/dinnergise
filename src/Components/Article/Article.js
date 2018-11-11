import React , {Component} from 'react';

import './Article.css';
import sugarfree from './image/sugarfree.png';
import glutenfree from './image/glutenfree.png';

class Article extends Component {
    render() {
        return (
            <div className="Article">
                <div className="article-container">
                    <div className="article-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-9  leftside-article">
                                    <h4>Healthy, nutritious and simple delicious</h4>
                                    <p>All out food is made from the best locally sourced ingredients, lovingly cooked and beautifully presented</p>
                                    <p><img src={sugarfree} alt="Sugar free"/>&ensp;Refined Sugar free</p>
                                    <p><img src={glutenfree} alt="Gluten free"/>&ensp;Gluten free</p>
                                </div>
                                <div className="col-lg-3">
                                    <div className="rightside-article">
                                        <h5>Opening hours &amp; delivery area</h5>
                                        <p><i className="fas fa-check-circle"></i>&ensp;Monday to Thursday from 5.30pm to 9.30pm.</p>
                                        <p><i className="fas fa-check-circle"></i>&ensp;Initially <em className="font-weight-bold">Canary Wharf</em> only.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Article;