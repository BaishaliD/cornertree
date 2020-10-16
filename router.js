const router = require('express').Router();
const controller = require('./controller');

router.get('/signup', controller.signUp);
router.post('/job', controller.createJob);
router.get('/jobs', controller.getJobs);
router.get('/filter', controller.getFilter);
router.get('/joblist', controller.jobList);

module.exports = router;