const content = document.getElementById("content")
const openingContainer = document.getElementById("Opening-container");
const introduction = document.getElementById("introduction");
const examples = document.getElementById("examples");
const components = document.getElementById("components");
const termsUsed = document.getElementById("terms-used");
const uses = document.getElementById("uses");
const more = document.getElementById("more");
const button = document.getElementById("button");
const show = document.getElementById("show-btn");
const explain = document.getElementById("explanation");

const accessibilityChecker = document.getElementById("accessibility-checker");

const splitViewOption = document.getElementById("split-view-option");

const interreactiveButtons = document.getElementById("interreactive-buttons");

const dynamicWebTemplate  = document.getElementById("dynamic-web-template");

const codeSnippet = document.getElementById("code-snippet");

var index = 0;
var explanationNumber = 0;

function Display() {

    button.innerText = "Next =>";
    window.scrollTo(0, 0);

    switch (index) {
        case 0:
            content.innerHTML = openingContainer.innerHTML;
            openingContainer.style.transition = "all 1.2s ease-in-out";
            index++;
            break;
        
        case 1:
            content.innerHTML = introduction.innerHTML;
            introduction.style.transition = "all 1.2s ease-in-out";
            index++;
            break;

        case 2:
            content.innerHTML = examples.innerHTML;
            examples.style.transition = "all 1.2s ease-in-out";
            index++;
            break;

        case 3:
            content.innerHTML = components.innerHTML;
            components.style.transition = "all 1.2s ease-in-out";
            index++;
            break;

        case 4:
            content.innerHTML = termsUsed.innerHTML;
            termsUsed.style.transition = "all 1.2s ease-in-out";
            index++;
            break;

        case 5:
            content.innerHTML = uses.innerHTML;
            uses.style.transition = "all 1.2s ease-in-out";
            index++;
            break;

        case 6:
            content.innerHTML = image.innerHTML;
            image.style.transition = "all 1.2s ease-in-out";
            index++;
            break;

        case 7:
            content.innerHTML = more.innerHTML;
            more.style.transition = "all 1.2s ease-in-out";
            index = 0;
            button.innerText = "View Again";
            break;
        default:
            break;
    }
};

button.addEventListener("click", Display);