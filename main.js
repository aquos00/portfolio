console.log(
  `Hey! You sneaky developer... 
I'm glad you liked the site and want to see whats going on, so be sure to check the repository at:
https://github.com/aquos00/portfolio
And don't steal my code ;)
`);
let projectContainer = document.getElementById("project-container");
let skillContainer = document.getElementById("skill-container");
let workedWithContainer = document.getElementById("worked-container");
let toTopButton = document.getElementById("back-to-top-btn");
let ScrollVar = 20;
let count = 0;
async function getData() {
  newProject(await (await fetch("data.json")).json());
  newSkill(await (await fetch("data.json")).json());
  newWorkedWith(await (await fetch("data.json")).json());
}

getData();


function newProject(data) {
  data["projects"].forEach((project) => {
    let newElm = document.createElement("div");
    let newElmName = document.createElement("h6");
    let newElmYear = document.createElement("h6");
    let newElmLanugageCont = document.createElement("div");
    let newElmImgCont = document.createElement("div");
    let newElmImage = document.createElement("img");
    let newElmBtnCont = document.createElement("div");
    let newElmGitHubLink = document.createElement("a");
    let newElmGithubBtn = document.createElement("button");
    let newElmSiteLink = document.createElement("a");
    let newElmSiteBtn = document.createElement("button");
    newElmName.innerText = data["projects"][count]["title"];
    newElmYear.innerHTML = data["projects"][count]["year"];
    newElmImgCont.classList.add("img-cont");
    newElmImage.src = data["projects"][count]["image"];
    newElmBtnCont.classList.add("btn-container");
    newElmGithubBtn.innerText = `GitHub`;
    newElmGitHubLink.href = data["projects"][count]["github"];
    if (data["projects"][count]["github"] != "") {
      newElmGitHubLink.target = `_Blank`;
      newElmGithubBtn.classList.add("btn");
      newElmGithubBtn.classList.add("btn-success");
    } else {
      newElmGithubBtn.classList.add("btn");
      newElmGithubBtn.classList.add("btn-secondary");
      newElmGithubBtn.title = "No GitHub repository for this project";
    }

    newElmGitHubLink.appendChild(newElmGithubBtn);

    newElmSiteBtn.innerText = "Website";
    newElmSiteLink.href = data["projects"][count]["site"];

    if (data["projects"][count]["site"] != "") {
      newElmSiteLink.target = `_Blank`;
      newElmSiteBtn.classList.add("btn");
      newElmSiteBtn.classList.add("btn-success");
    } else {
      newElmSiteBtn.classList.add("btn");
      newElmSiteBtn.classList.add("btn-secondary");
      newElmSiteBtn.title = "No Website for this project";
    }

    newElmSiteLink.appendChild(newElmSiteBtn);
    newElmBtnCont.appendChild(newElmGitHubLink);
    newElmBtnCont.appendChild(newElmSiteLink);

    newElmImgCont.appendChild(newElmImage);
    newElm.appendChild(newElmImgCont);
    newElm.appendChild(newElmYear);
    newElm.appendChild(newElmName);
    data["projects"][count]["languages"].forEach((language) => {
      let newElmLanguage = document.createElement("h6");
      newElmLanguage.innerHTML = language;
      newElmLanugageCont.appendChild(newElmLanguage);
    });
    newElmLanugageCont.classList.add("languageCont");
    newElm.appendChild(newElmLanugageCont);
    newElm.appendChild(newElmBtnCont);
    newElm.classList.add("project");
    newElm.id = count;
    projectContainer.appendChild(newElm);
    count++;
  });
}
function newSkill(data) {
  i = 0;
  data["skills"].forEach((skill) => {
    newSkill = document.createElement("h6");
    newSkill.innerText = skill;
    skillContainer.appendChild(newSkill);
  });
}
function newWorkedWith(data) {
  i = 0;
  data["worked with"].forEach((skill) => {
    newWorkedWith = document.createElement("h6");
    newWorkedWith.innerText = skill;
    workedWithContainer.appendChild(newWorkedWith);
  });
}

window.onscroll = function () { scrolled() };

function scrolled() {
  let homeHeight = document.getElementById("home").offsetHeight;
  let footerTop = document.getElementById("footer").offsetTop;
  let footerHeight = document.getElementById("footer").offsetHeight;
  let height = homeHeight * 0.9;
  let endHeight = footerTop - footerHeight * 2;
  if (document.body.scrollTop > height || document.documentElement.scrollTop > height) {
    toTopButton.style.display = "block";
  }
  else {
    toTopButton.style.display = "none";
  }
  if (document.body.scrollTop > endHeight || document.documentElement.scrollTop > endHeight) {
    toTopButton.style.display = "none";
  }
}

function switchNav() {
  let burgerNav = document.getElementById("burger-nav-links");
  burgerNav.classList.toggle("hide");
}

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    // Check if hcaptcha is not completed
    if (window.hcaptcha && !hcaptcha.getResponse()) {
      event.preventDefault(); // Prevent form submission
      alert('Please complete the captcha verification.'); // Alert the user
    }
    // If captcha is completed, the form will submit normally

  });
});


window.onload = function() {
  // Reset the form fields when the page loads
  document.getElementById("form").reset();
};