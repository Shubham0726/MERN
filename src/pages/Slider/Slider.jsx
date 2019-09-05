import React,{ Component } from 'react';

class slider extends Component {
    render () {
        const { banner, altText } = this.props;
        return(
            <>
              <img src={banner} alt={altText} />
            </>
        )
    }
}

export default slider;