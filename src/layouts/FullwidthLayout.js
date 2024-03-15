import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class FullwidthLayout extends Component {
    render(){
        return (
            <div>

                <div className="clearfix"></div>

                <div className="margin-top-70"></div>
                {this.props.children}
            </div>

        );
    }
}

FullwidthLayout.propTypes = {
    children: PropTypes.node.isRequired,
};