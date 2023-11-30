let questionIndex = 0;

function askQuestion(answer) {
    const questions = [
        "Do you miss me?",
        "Do you love me?",
        "Do you love and miss me?"
    ];

    const resultContainer = document.getElementById("result-container");
    const resultText = document.getElementById("result-text");
    const loveAnimation = document.getElementById("love-animation");
    const questionContainer = document.getElementById("question-container");
    const loveAnimationContainer = document.getElementById("love-animation-container");

    if (questionIndex < questions.length) {
        // Display the next question
        document.getElementById("question-text").innerText = questions[questionIndex];
        questionIndex++;
    } else {
        // Display the final result
        resultContainer.classList.remove("d-none");
        questionContainer.classList.add("d-none");
        if (answer) {
            resultText.innerText = "I love you toooooooooooooooooo!";
            // animateExplosion();
            // Trigger animations for each container
            animateExplosion('love-animation-container1');
            animateExplosion('love-animation-container2');
            animateExplosion('love-animation-container3');
        } else {
            resultText.innerText = "Oops! Love is waiting for you!";
            relocateNoButton();
        }
    }
}

function relocateNoButton() {
    const button = document.querySelector('.btn-danger');
    const maxX = window.innerWidth - button.clientWidth;
    const maxY = window.innerHeight - button.clientHeight;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.position = 'absolute';
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    return heart;
}

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    return heart;
}

// function animateExplosion() {
//     const loveAnimationContainer = document.getElementById("love-animation-container");

//     for (let i = 0; i < 10; i++) {
//         const heart = createHeart();
//         loveAnimationContainer.appendChild(heart);

//         anime({
//             targets: heart,
//             translateX: anime.random(-250, 250),
//             translateY: anime.random(-250, 250),
//             scale: [0, anime.random(1, 2)],
//             rotate: '1turn',
//             opacity: [1, 0],
//             easing: 'easeInOutQuad',
//             duration: 1500,
//             complete: function () {
//                 loveAnimationContainer.removeChild(heart);
//             }
//         });
//     }
// }

function animateExplosion(containerId) {
    const loveAnimationContainer = document.getElementById(containerId);

    for (let i = 0; i < 10; i++) {
      const heart = createHeart();
      loveAnimationContainer.appendChild(heart);

      anime({
        targets: heart,
        translateX: anime.random(-250, 250),
        translateY: anime.random(-250, 250),
        scale: [0, anime.random(1, 2)],
        rotate: '1turn',
        opacity: [1, 0],
        easing: 'easeInOutQuad',
        duration: 1500,
        complete: function () {
          loveAnimationContainer.removeChild(heart);
        }
      });
    }
  }

function animateHeart() {
    const loveAnimation = document.getElementById("love-animation");

    loveAnimation.classList.remove("d-none");

    anime({
        targets: '#love-animation',
        scale: [{ value: 1 }, { value: 1.5 }, { value: 1, delay: 250 }],
        rotate: '1turn',
        duration: 1000,
        easing: 'easeInOutQuad',
        complete: function (anim) {
            loveAnimation.classList.add("d-none");
        }
    });
}

// Add event listener after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    const noButton = document.querySelector('.btn-danger');

    // Trigger relocation when the mouse moves near the "No" button
    noButton.addEventListener('mousemove', relocateNoButton);

    // Trigger final result when the "No" button is clicked
    noButton.addEventListener('click', function () {
        askQuestion(false);
    });

    // Initial setup
    askQuestion(true); // Start with the first question


});

function resetGame() {
    questionIndex = 0;
    document.getElementById("question-container").classList.remove("d-none");
    document.getElementById("result-container").classList.add("d-none");
    document.getElementById("love-image").classList.add("d-none");
}
