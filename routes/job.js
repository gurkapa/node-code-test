'use strict';

let Job = require('../lib/model/Job');
let log = require('../lib/logging').getLogger();
let revisionsHandler = require('../lib/revisionsHandler');
let jobService = require('../lib/jobService');

let GET_list = (req, res, next) => {
    Job.find({})
        .then(jobs => {
            res.status(200).send(jobs);
        }, next);
}

let GET = (req, res, next) => {
    Job.findById(req.params.jobId)
        .then(job => {
            let status = !job ? 404 : 200;
            res.status(status).send(job);
        }, next);
}

let POST = (req, res, next) => {
    let cleanData = jobService.getCleanJobData(req.body);
    let newJob = new Job(cleanData);
    revisionsHandler.addNewRevision(newJob, cleanData);
    
    newJob.save()
        .then(savedJob => {
            res.status(201).send(savedJob);
        });
}

let PUT = (req, res, next) => {
    let cleanData = jobService.getCleanJobData(req.body);
    Job.findById(req.params.jobId)
        .then(job => {
            revisionsHandler.addChangeRevision(job, cleanData);
            job.set(cleanData);
            return job.save();
        })
        .then(savedJob => {
            res.status(200).send(savedJob);
        });
}

let DELETE = (req, res, next) => {
    Job.remove({_id: req.params.jobId})
        .then(() => {
            res.status(200).send('OK');
        })
}

module.exports = {
    GET_list,
    GET,
    POST,
    PUT,
    DELETE
}