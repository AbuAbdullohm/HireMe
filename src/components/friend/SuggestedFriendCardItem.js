import React, {Component} from 'react';

class SuggestedFriendCardItem extends Component {
    render(){
        return(
            <div className="suggestion-usd job-small-card_item">
                <div class="row">
                    <div class="col-4">
                        <img className="fullRounded" src={this.props.picture} alt={this.props.name}/>
                    </div>
                    <div class="col-8 padding0">
                        <div className="sgt-text">
                            <h4>{this.props.name}</h4>
                            <span>{this.props.jobTitle}</span>
                        </div>
                        <span><i className="glyphicon glyphicon-plus"></i></span>
                    </div>
                </div>
            </div>

        );
    }
}

export default SuggestedFriendCardItem;
