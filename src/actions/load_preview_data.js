'use strict';

import request from 'superagent';
import loadingPreviewAction from '../actions/is_loading_preview';
import  updatePreviewAction from '../actions/update_preview';

export default function loadPreviewDataThunk() {
    return (dispatch) => {
        let userUrl = document.getElementById('previewFormInput').value;
        let requestUrl = '';

        if (userUrl && userUrl.match(/youtube\.com/)) {
            let youtubeIdMatch = userUrl.match(/v=([^&]+)/);
            let youtubeId = (youtubeIdMatch) ? youtubeIdMatch[1] : '';

            requestUrl = 'https://www.googleapis.com/youtube/v3/videos'
                + '?id=' + youtubeId
                + '&key=AIzaSyAhzNW9PKA12-pvU_2Aq8nIrjQeex7RixI'
                + '&fields=items(id,snippet(title,thumbnails))'
                + '&part=snippet';
        }

        dispatch(loadingPreviewAction(true));

        return request
            .get(requestUrl)
            .end((err, res) => {
                dispatch(loadingPreviewAction(false));

                if (err) {
                    throw 'request failed :(';
                }

                if (res && res.status === 200) {
                    dispatch(updatePreviewAction(userUrl, res.body));
                    dispatch(updatePreviewAction(userUrl, res.body));
                }
            })
    };
}