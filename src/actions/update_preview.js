'use strict';

export default function updatePreviewAction(url, response) {
    return {
        type: 'UPDATE_PREVIEW',
        previewRawData: response,
        previewUrl: url
    }
};