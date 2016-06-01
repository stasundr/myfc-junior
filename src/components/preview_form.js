import React from 'react';

export default class PreviewForm extends React.Component {
    render() {
        const { loadPreviewDataClick } = this.props;
        return (
            <div>
                <input type="text" id="previewFormInput"/>
                <button onClick={loadPreviewDataClick}>Fetch Url</button>
            </div>
        )
    }
}