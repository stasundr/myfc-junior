'use strict';

import _ from 'lodash';

function initialState() {
    return {
        previewImageUrl: '',
        previewLabel: '',
        previewDescription: '',
        previewUrl: '',
        previewRawData: {},
        isLoadingPreview: false
    }
}

export default function rootReducer(state, action) {
    const previousState = (state) ? state : initialState();

    switch(action.type) {
        case 'IS_LOADING_PREVIEW':
            return Object.assign(
                {}, previousState, { isLoadingPreview: action.isLoadingPreview }
            );
        
        case 'UPDATE_PREVIEW':
            let previewRawData = action.previewRawData;
            let previewUrl = action.previewUrl;
            let previewLabel = state.previewLabel;
            let previewImageUrl = state.previewImageUrl;

            if (state.previewUrl.match(/youtube\.com/)) {
                previewLabel = _.get(previewRawData, 'items[0].snippet.title');
                previewImageUrl = _.get(previewRawData, 'items[0].snippet.thumbnails.medium.url');
            }

            return Object.assign(
                {}, previousState, { previewRawData, previewUrl, previewLabel, previewImageUrl }
            );
        
        default:
            return previousState;
    }
}