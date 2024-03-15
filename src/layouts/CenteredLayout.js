import React, {Component} from 'react';
import Footer from './Footer'
import PropTypes from 'prop-types';

export default class CenteredLayout extends Component {
    render(){
        return (
            <div>
                <div className="clearfix"></div>

                <div className="margin-top-100"></div>
                {this.props.children}
                <div className="margin-top-70"></div>
                <Footer />
            </div>

        );
    }
}

CenteredLayout.propTypes = {
    children: PropTypes.node.isRequired,
};