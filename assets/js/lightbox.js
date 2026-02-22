document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var span = document.getElementsByClassName("close")[0];

    // Select all images with the 'clickable-image' class
    var images = document.querySelectorAll('.clickable-image');

    images.forEach(img => {
        img.onclick = function() {
            modal.style.display = "block";
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        }
    });

    // Close when clicking (x)
    if(span) {
        span.onclick = function() { 
            modal.style.display = "none";
        }
    }

    // Close when clicking anywhere outside the image (the black background)
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});