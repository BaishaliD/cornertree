const Job = require("./models/job_posting");
const Filter = require("./models/filter");

//var filter = [];

module.exports.signUp = async function (req, res) {
  var { userID } = req.query;

  var data = {
    song: "aja nachle",
    singer: "sunidhi",
  };

  // console.log("user ID is",userID);
  console.log("signup controller is working");

  res.send({
    status: 200,
    data: data,
  });
};

module.exports.createJob = async function (req, res) {
  const newJob = req.body;

  try {
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
      jd: newJob.jd,
    });

    if (newJob.jobRole != "") {
      console.log("new jobrole is not null");
      var oldJobRole = await Filter.find({
        key: "jobRole",
        value: newJob.jobRole,
      });
      console.log("old job role", oldJobRole);
      console.log(oldJobRole.length);
      if (oldJobRole.length == 0) {
        console.log("filter does not exist");
        const filter = await Filter.create({
          key: "jobRole",
          value: newJob.jobRole,
        });
        console.log("new filter created");
      }
    }

    if (newJob.location != "") {
      console.log("new location is not null");
      var oldlocation = await Filter.find({
        key: "location",
        value: newJob.location,
      });
      console.log("old job role", oldlocation);
      console.log(oldlocation.length);
      if (oldlocation.length == 0) {
        console.log("filter does not exist");
        const filter = await Filter.create({
          key: "location",
          value: newJob.location,
        });
        console.log("new filter created");
      }
    }

    if (newJob.coreSkills.length != 0) {
      console.log("new coreskill is not null");

      newJob.coreSkills.forEach(async (element) => {
        var oldSkill = await Filter.find({ key: "skill", value: element });
        if (oldSkill.length == 0) {
          console.log("skill does not exist");
          if(element!=null){
          const filter = await Filter.create({
            key: "skill",
            value: element,
          });
          console.log("new filter created");
        }
        }
      });
    }

    // for (let i = 0; i < 3; i++) {
    //   filter.push({ filter: "skill", value: newJob.coreSkills[i] });
    // }
    // filter.push({ filter: "location", value: newJob.location });
    // filter.push({ filter: "jobRole", value: newJob.jobRole });

    console.log("new job created");
    res.status(200).send({
      message: "new job created",
      data: job,
    });
  } catch (err) {
    console.log("error in creating new job", err);
    res.status(400).send({
      message: "error in creating new job",
    });
  }
};

module.exports.jobList = async function (req, res) {
  var { key, value } = req.query;

  console.log("filter & value", key, value);
  try {
    let jobs = await Job.find({
        $or: [
          { jobRole: value },
          { location: value },
          { coreSkills: { $in: [value] } },
        ],
      });

    return res.status(200).json({
        message: "Jobs based on filters",
        data: jobs
    })
  } catch (err) {
    console.log("error in creating new job", err);
    res.status(400).send({
      message: "error in creating new job",
    });
  }
};

module.exports.getFilter = async function (req, res) {
  try {
    const filterArray = await Filter.find({});
    return res.status(200).json({
      message: "Filter search",
      data: filterArray,
    });
  } catch (err) {
    console.log("Cannot send filter array", err);
    res.status(400).send({
      message: "Cannot send filter array",
    });
  }
};

module.exports.createUser = function (req, res) {


    //Check if email id of user already exists in DB

    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) {
            console.log(`Error in finding user during Sign up: ${err}`);
            return;
        }

        //If email doesn't exist in DB :

        if (!user) {

            //Check if Password and Confirm Password fields entered by user matches. In case of mismatch, send a flash message and redirect back
            if (req.body.password != req.body.confirm_password) {

                req.flash('error', "Passwords don't match. Try again.");
                return res.redirect('back');
            }

            //If Password and Confirm password matches, create a new user and store the user's information in the DB
            //Use the bcrypt package to hash the password entered by the user before storing it in DB

            bcrypt.genSalt(saltRounds, function (err, salt) {
                bcrypt.hash(req.body.password, salt, function (err, hash) {

                    // Create a new document in the User collection with the name, email and hashed password of the user

                    User.create({
                        name: req.body.name,
                        email: req.body.email,
                        password: hash
                    }, function (err, user) {
                        if (err) {
                            console.log(`Error in creating user during Sign up: ${err}`);
                            return;
                        }

                        //Generate a flash message to confirm account creation, and redirect to the sign in page
                        req.flash('success', 'New account created.');
                        return res.redirect('/sign-in');
                    })

                });
            });

        }

        //If email already exists in DB, generate a flash message and redirect to Sign in page
        else {
            req.flash('error', 'Email already exists. Sign up using another email or go to Sign in page.');
            return res.redirect('back');
        }
    })
};
