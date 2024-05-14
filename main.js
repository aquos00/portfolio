let projectContainer = document.getElementById("project-container");
let skillContainer = document.getElementById("skill-container");
let workedWithContainer = document.getElementById("worked-container");
let count = 0;
async function getData() {
  newProject(await (await fetch("Data/data.json")).json());
  newSkill(await (await fetch("Data/data.json")).json());
  newWorkedWith(await (await fetch("Data/data.json")).json());
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
      newElmGithubBtn.title="No GitHub repository for this project";
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
function newSkill(data){
    i = 0;
    data["skills"].forEach((skill)=> {
        console.log(skill);
        newSkill = document.createElement("h6");
        newSkill.innerText = skill;
        skillContainer.appendChild(newSkill);
    });
}
function newWorkedWith(data){
    i = 0;
    data["worked with"].forEach((skill)=> {
        console.log(skill);
        newWorkedWith = document.createElement("h6");
        newWorkedWith.innerText = skill;
        workedWithContainer.appendChild(newWorkedWith);
    });
}