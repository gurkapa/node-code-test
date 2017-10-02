'use strict';

let jobService = require('./jobService');

let addNewRevision = (job, newData) => {
    job.revisions = [{
        created: new Date(),
        new: newData
    }]
}

let addChangeRevision = (job, updateData) => {
    let prevData = jobService.getCleanJobData(job);
    
    job.revisions.push({
        created: new Date(),
        prev: prevData,
        new: updateData
    })
}

module.exports = {
    addNewRevision,
    addChangeRevision
}