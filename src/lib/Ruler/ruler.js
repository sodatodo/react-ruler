import React from 'react';
import PropTypes from 'prop-types';

const VERTICAL = 1;
const HORIZONTAL = 2;

class Ruler extends React.Component {
    
    componentDidMount() {
       
    }
    render() {
        return (
            <div ref={node => this.target}>RULER</div>
        )
    }
}
Ruler.propTypes = {
    rulerHeight: PropTypes.number
}

export { Ruler };