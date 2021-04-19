const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const Port = process.env.PORT || 3001;

let production = process.argv.findIndex(el => el == "--production") !== -1;

let clientStaticPath = production ? path.join(__dirname, "..", "build") : "";

if(clientStaticPath !== "") {
  app.use(express.static(clientStaticPath));
}

app.get("/testurl", (req, res, next) => {
  return res.end("This is an uninteresting request but shows the server can serve out some content as an url.  That said, the interesting stuff should be the compiled react content");
});

// This data may all be better as some seperate .json file but that's a detail

const projTrickTrivia = {
        title: "Trick Trivia",
        desc: "A trivia game using a public trivia API",
        github: "https://github.com/ToMakPo/UWCB-P1-Trick-Trivia",
        liveproject: "https://github.com/ToMakPo/UWCB-P1-Trick-Trivia",
        image : "tricktrivia.PNG"
};
const projJoia = {
        title: "Joia",
        desc: "An art showcase app including authentication",
        github: "https://github.com/supercodingninja/Joia",
        liveproject: "https://joia.herokuapp.com/",
        image: "joia.PNG"
};
const projEatBurgers = {
        title: "Eat Burgers",
        desc: "database driven app using mongodb on Heroku with handlebars",
        github: "https://github.com/YouFarted/handlebarsBurgerLogger",
        liveproject: "https://dry-ravine-15059.herokuapp.com/",
        image: "burgers.PNG"
};
const projNoteTaker = {
        title: "note-taker",
        desc: "Create, edit and delete notes using only vanilla json as a backing store.",
        github: "https://github.com/YouFarted/notetaker",
        liveproject: "https://cryptic-thicket-51448.herokuapp.com/",
        image: "notes.PNG"
};

const projects = [projTrickTrivia, projJoia, projEatBurgers, projNoteTaker];

const siteData = {
    aboutMe: {},
    education: [
      { where: "UW Coding Bootcamp",
        when:  "Sept 2020 - April 2021",
        what:  "Coding Bootcamp for full-stack developers"},
      { where: "University of Washington",
        when: "(class of 2006)",
        what: "Bachelor's degree in Computer Science"},
      { where: "Seattle Central Community College",
        when: "(class of 2004)",
        what: "Associates in general science"},
    ],
    work:[
        { where: "eAcceleration",
          when: "2000-2002",
          what: `general software grunt.  
                I Mostly frontend data parsing for the purpose of data-mining to track the success of ad campaigns so ads could be incrementally tweaked and measured for improvement.` },
        { where: "Microsoft Software",
          when: "2006 - 2014",
          what: `I wrote functional tests for Internet Explorer (important proviso - I'm NOT currently seeking any roles in this area.  I can provide advice to others but this is a career path I've decisively jumped off and left behind. )` },
    ],
    contactMe:{
        github: "https://github.com/YouFarted",
        email: "mailto:frrrkin@gmail.com",
        linkedIn: "https://www.linkedin.com/in/andrew-olson-9ba41a168"},
    resume:"https://drive.google.com/file/d/17YpvHA3a83218D0WfD18xFsDZoatzKUC/view?usp=sharing",
    projects: projects
};


app.get("/userData", (req, res) => {
    res.json(siteData);
});

app.listen(Port, () => {
  console.log(`Server Running on port ${Port}`);
});
