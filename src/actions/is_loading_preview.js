'use strict';

export default function loadingPreviewAction(isLoadingPreview) {
    return {
        type: 'IS_LOADING_PREVIEW',
        isLoadingPreview
    }
};