console.log("page loaded...");

var videoElement = document.getElementById("video");

videoElement.addEventListener("mouseover", function() {
    if (videoElement.paused) {
        videoElement.muted = true;
        videoElement.play();
    }
});

videoElement.addEventListener("mouseout", function() {
    if (!videoElement.paused) {
        videoElement.pause();
    }
});

videoElement.addEventListener("click", function() {
    videoElement.muted = false;
    videoElement.play();
});

var videoElements = document.querySelectorAll(".video-small video");

videoElements.forEach(function(videoElement) {
    videoElement.addEventListener("mouseover", function() {
        handleMouseover(videoElement);
    });

    videoElement.addEventListener("mouseout", function() {
        handleMouseout(videoElement);
    });

    videoElement.addEventListener("click", function() {
        handleClick(videoElement);
    });
});