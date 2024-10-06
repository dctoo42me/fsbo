const galleryImages = document.querySelectorAll('.gallery-item img');
const modal = document.getElementById('modal');
const modalImagesContainer = document.getElementById('modal-images');
const closeModalBtn = document.querySelector('.close');

// Function to open modal and display all images
function openModal(clickedImageSrc) {
    // Clear any existing images in the modal
    modalImagesContainer.innerHTML = '';

    // Add all gallery images to the modal
    galleryImages.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.alt;
        modalImagesContainer.appendChild(imgElement);
    });

    // Display the modal
    modal.style.display = 'block';

    // Scroll to the clicked image in the modal
    const clickedImageIndex = Array.from(galleryImages).findIndex(image => image.src === clickedImageSrc);
    const modalImages = modalImagesContainer.querySelectorAll('img');
    const scrollToImage = modalImages[clickedImageIndex];
    
    if (scrollToImage) {
        scrollToImage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Event listener for clicking images in the gallery
galleryImages.forEach(image => {
    image.addEventListener('click', function() {
        openModal(this.src);
    });
});

// Close modal when close button is clicked
closeModalBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


// Gallery arrow functionality
const gallery = document.querySelector('.gallery');
const galleryItems = document.querySelectorAll('.gallery-item');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Function to scroll to the next or previous image
let currentIndex = 0;

function updateGallery() {
    // Ensure the current index is within bounds by cycling around
    if (currentIndex >= galleryItems.length) {
        currentIndex = 0; // Loop back to the first image
    } else if (currentIndex < 0) {
        currentIndex = galleryItems.length - 1; // Loop to the last image
    }

    // Scroll to the current image
    const selectedImage = galleryItems[currentIndex];
    selectedImage.scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest',
    });
}

// Event listeners for the Next and Previous buttons
nextBtn.addEventListener('click', function() {
    currentIndex++;
    updateGallery();
});

prevBtn.addEventListener('click', function() {
    currentIndex--;
    updateGallery();
});

// Initialize the gallery
updateGallery();