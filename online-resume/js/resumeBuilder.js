
var bio = {
    "name" : "Anmol Arora",
    "role" : "Front-End Web Developer",
    "contacts" :{
        "email" : "anmolarora8118@gmail.com",
        "mobile" : "9811618118",
        "github" : "anmol8118",
        "twitter" : "@anmol8118",
        "location" : "Punjab"
                 },
    "welcomeMessage" : "If it doesn't challenge you, it won't change you!",
   "skills" : ["C", "C++", "Java", "HTML", "CSS", "Bootstrap", "JavaScript"] ,
     "biopic" : "images/mefinal.png"
 };

var education = {
    "schools": [
    {
        "name" : "Chitkara University",
        "location" : "Punjab",
        "degree" : "BE",
        "majors" : ["CS"],
        "dates" : "2018"
    },
    {
        "name" : "MAPS",
        "location" : "Delhi",
        "degree" : "High School",
        "majors" : ["Non-Medical"],
        "dates" : "2014"
    }
    ],
    "onlineCourses" : [
    {
        "title" : "Front-End Web Developer",
        "school" : "Udacity",
        "dates" : "2017",
        "url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
    }
    ]
};
var work = {
    "jobs" : [
    {
        "employer" : "Chitkara University",
        "title" : "Student",
        "dates" : "2014-2018(expected)",
        "description" : "Pursuing BE in Cse",
        "location" : "Punjab"
    }
   ]
};

bio.display = function() {
    $("#header").prepend(HTMLbioPic.replace("%data%", bio.biopic));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name), HTMLheaderRole.replace("%data%", bio.role));
    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
    formattedContactInfo = [];
    formattedContactInfo.push(HTMLmobile.replace('%data%', bio.contacts.mobile));
    formattedContactInfo.push(HTMLemail.replace('%data%', bio.contacts.email));
    formattedContactInfo.push(HTMLgithub.replace('%data%', bio.contacts.github));
    formattedContactInfo.push(HTMLtwitter.replace('%data%', bio.contacts.twitter));
    formattedContactInfo.push(HTMLlocation.replace('%data%', bio.contacts.location));

if(bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
       //for (var i in bio.skills) {
       //bio.skills.forEach(function(i) {
        for (var i = 0; i < bio.skills.length; i++){
$("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
     };

      }
      for (ci in formattedContactInfo) {
        $("#topContacts").append(formattedContactInfo[ci]);
        $("#footerContacts").append(formattedContactInfo[ci]);
    }
};
bio.display();

work.display = function(){
  //$("#workExperience").append(HTMLworkStart);
   //work.jobs.forEach(function(job){
for(var job = 0; job < work.jobs.length; job++ ) {//job in work.jobs) {
 $("#workExperience").append(HTMLworkStart);
// $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[job].employer) + HTMLworkTitle.replace("%data%", work.jobs[job].title), HTMLworkDates.replace("%data%", work.jobs[job].dates), HTMLworkLocation.replace("%data%", work.jobs[job].location), HTMLworkDescription.replace("%data%", work.jobs[job].description));
 var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
 var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
 var formattedEmployerTitle = formattedEmployer + formattedTitle;
 $(".work-entry:last").append(formattedEmployerTitle);

 var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
 $(".work-entry:last").append(formattedDates);

 var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);
 $(".work-entry:last").append(formattedDescription);
 var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
 $(".work-entry:last").append(formattedLocation);
}
};
work.display();

education.display = function(){
  for(var i = 0; i < education.schools.length; i++){// in education.schools) {
    $("#education").append(HTMLschoolStart);
     $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[i].name)+
       HTMLschoolDegree.replace("%data%", education.schools[i].degree),
       HTMLschoolDates.replace("%data%", education.schools[i].dates),
       HTMLschoolLocation.replace("%data%", education.schools[i].location),
      HTMLschoolMajor.replace("%data%", education.schools[i].majors));
    }

    $("#education").append(HTMLonlineClasses);
    //for (var course in education.onlineCourses) {
        for(var course = 0; course < education.onlineCourses.length; course++){
        $("#education").append(HTMLschoolStart);
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school), HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates), HTMLonlineURL.replace("%data%", education.onlineCourses[course].url).replace("#", education.onlineCourses[course].url));
    }
};
education.display();

$(document).click(function(loc){
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x,y);
});

var projects = {

     "projects": [
        {
            "title": " My portfolio",
            "dates": "Semester 6<sup>th</sup> 2017",
            "description": "I have made a responsive portfolio page using bootstrap as a part of Nano Degree.",
            "images": ["images/portfolio.png"]
        },

        {
            "title": "Online Web Portal",
            "dates": "Semester 4<sup>th</sup> 2016",
            "description": "Students studying in Chitkara University can access previous year’s Question papers! I made this using HTML, CSS, SQL, PHP",
            "images": ["images/poste1.png"]
        },

        {
            "title": "Automatic Door Locking System",
            "dates": "Semester 2<sup>nd</sup> 2015",
            "description": "To unlock the door with the help of some light sensors, couple of LED’s, Arduino board, bread board and integrated circuit by using a light which is required to be incident on the LDR by the person.",
            "images": ["images/automatic.png"]
        },

     ]
};


projects.display = function() {
  //projects.projects.forEach(function(project) {
    //for (project in projects.projects) {
      for(var project = 0; project < projects.projects.length; project++){
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title), HTMLprojectDates.replace("%data%", projects.projects[project].dates) + HTMLprojectDescription.replace("%data%", projects.projects[project].description));

        if (projects.projects[project].images.length > 0) {
            //for (var image in projects.projects[project].images)
              for(var image = 0; image < projects.projects[project].images.length; image++)
                $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
        }
    }
};
projects.display();
$("#mapDiv").append(googleMap);