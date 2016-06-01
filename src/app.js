'use strict';

// React
import React from 'react';
import ReactDOM from 'react-dom';
import PreviewBody from './components/preview_body';
import PreviewForm from './components/preview_form';

// Redux
import { createStore, applyMiddleware } from 'redux';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers/root_reducer';
import loadPreviewDataThunk from './actions/load_preview_data';

const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const store = createStoreWithMiddleware(rootReducer);

// React-Redux connection
function mapStateToProps(state) {
    return {
        imageUrl: state.previewImageUrl,
        label: state.previewLabel,
        description: state.previewDescription
    }
}
function mapDispatchToProps(dispatch) {
    return {
        loadPreviewDataClick: () => dispatch(loadPreviewDataThunk())
    }
}

const PreviewBodyConnected = connect(mapStateToProps, mapDispatchToProps)(PreviewBody);
const PreviewFormConnected = connect(mapStateToProps, mapDispatchToProps)(PreviewForm);

// App body
ReactDOM.render(
    <div>
        <PreviewFormConnected store={store}/>
        <PreviewBodyConnected store={store}/>
    </div>,
    document.getElementById('root')
);