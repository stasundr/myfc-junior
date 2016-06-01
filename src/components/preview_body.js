import React from 'react';

export default class PreviewBody extends React.Component {
    render() {
        const { label, description, imageUrl } = this.props;
        return (
            <div>
                <p><strong>{label}</strong></p>
                <p>{description}</p>
                <img src={imageUrl}/>
            </div>
        )
    }
}