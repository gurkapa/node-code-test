'use strict';

let getCleanJobData = input => {
    let cleanData = {}
    if (input.hasOwnProperty('title')) cleanData.title = input.title;
    if (input.hasOwnProperty('excerpt')) cleanData.excerpt = input.excerpt;
    if (input.hasOwnProperty('content')) cleanData.content = input.content;
    return cleanData;
}

module.exports = {
    getCleanJobData
}