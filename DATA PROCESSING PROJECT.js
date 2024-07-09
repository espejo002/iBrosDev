const content = document.getElementById("content");
const openingContainer = document.getElementById("Opening-container");
const introduction = document.getElementById("introduction");
const examples = document.getElementById("examples");
const components = document.getElementById("components");
const termsUsed = document.getElementById("terms-used");
const uses = document.getElementById("uses");
const sample = document.getElementById("sample");
const image = document.getElementById("image");
const more = document.getElementById("more");
const button = document.getElementById("button");
const show = document.getElementById("show-btn");
const explain = document.getElementById("explanation");

// Specifying the sample content
const sampleWebsite = document.getElementById("sample-website");
const music = document.getElementById("music");
const sports = document.getElementById("sports");
const sampleContent = document.getElementsByClassName("sample-content");
const musicalContent = document.getElementById("musical-content");
const sportsContent = document.getElementById("sports-content");
const title = document.getElementById("title");
const sampleImage = document.getElementById("sample-image");
const youtubeLink = document.getElementById("youtube-link");
const messi20 = document.getElementById("messi20");
const messiWorld = document.getElementById("messiWorld");
const messiBettter = document.getElementById("messiBetter");
const artist = document.getElementById("artist");
const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const audio3 = document.getElementById("audio3");
const song1 = document.getElementById("song1");
const current = document.getElementById("current");
const duration = document.getElementById("duration");
const availability = document.getElementById("availability");

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
            content.innerHTML = sample.innerHTML;
            sample.style.transition = "all 1.2s ease-in-out";
            index++;
            break;

        case 7:
            content.innerHTML = image.innerHTML;
            image.style.transition = "all 1.2s ease-in-out";
            index++;
            break;

        case 8:
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

// For the sample songs

const sampleSongs = [
    {
        title: "Waka waka",
        sampleImage: "Waka waka - Shakira.jfif",
        youtubeLink: "https://www.youtube.com/watch?v=wZPnZzKJuFI",
        artist: "Shakira",
        audio: "Waka waka - Shakira.mp3"
    },
    {
        title: "The Nights",
        sampleImage: "The Nights - Avicii.jfif",
        artist: "Avicii",
        audio: "The Nights - Avicii.mp3"
    },
    {
        title: "Victory Chant",
        sampleImage: "Victory Chant - Samsong.jfif",
        artist: "Samsong",
        audio: "Victory Chant - Samsong.mp3"
    }
]

function SampleDisplay(sampleSongs) {
    title.innerText = sampleSongs[0][0];
    //  = sampleSongs[0][1];
    sampleImage.setAttribute("src", sampleSongs[0][1]);
    youtubeLink.setAttribute("href", sampleSongs[0][2])
    artist.innerText = sampleSongs[0][3];
    audio.setAttribute("src", sampleSongs[0][4]);
}

sports.addEventListener("click", SampleDisplay);

function Audio1Play() {
    var index1 = 0;
    if(index1 == 0) {
        audio1.play();
        index1++;
    } else {
        audio1.pause();
        index1--;
    }
}

function Audio2Play() {
    var index2 = 0;
    if(index2 == 0) {
        audio2.play();
        index2++;
    } else {
        audio2.pause();
        index2--;
    }
}

function Audio3Play() {
    var index3 = 0;
    if(index3 == 0) {
        audio3.play();
        index3++;
    } else {
        audio3.pause();
        index3--;
    }
}

// function Sports() {
//     musicalContent.style.display = "none";
//     sportsContent.style.display = "block";
// }

// function Music() {
//     sportsContent.style.display = "none";
//     musicalContent.style.display = "block";
// }

function Video1Play() {
    messi20.play();
}

function Video2Play() {
    messiWorld.play();
}

function Video3Play() {
    messiBettter.play()
}