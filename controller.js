const Job = require('./models/job_posting');

module.exports.signUp = async function (req, res){

    var {userID} = req.query

    var data = {
        song: "aja nachle",
        singer: "sunidhi"
    }

    // console.log("user ID is",userID);
    console.log("signup controller is working");

    res.send({
        status: 200,
        data: data
    })

 
}

module.exports.createJob = async function(req,res){

    const newJob = req.body;

    try{
        const job = await Job.create({
            jobRole: newJob.jobRole,
            function: newJob.function,
            subFunction: newJob.subFunction,
            company: newJob.company,
            coreSkills: newJob.coreSkills,
            softSkills: newJob.softSkills,
            location: newJob.location,
            pin: newJob.pin,
            compensation: newJob.compensation,
            jd: newJob.jd
        });

        console.log("new job created");
        res.status(200).send({
            message: "new job created"
        })

    }catch(err){
        console.log("error in creating new job", err);
        res.status(400).send({
            message: "error in creating new job"
        })
    }
}

module.exports.getJobs = async function(req,res){

    const newJob = req.body;

    try{
        let jobs = await Job.find({
            'location' : req.params.location
        });
        console.log("jobs with given location",jobs);

        return res.status(200).json({
            message: "Jobs based on location",
            data: jobs
        })

    }catch(err){
        console.log("error in creating new job", err);
        res.status(400).send({
            message: "error in creating new job"
        })
    }
}