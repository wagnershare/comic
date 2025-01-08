// Get the current page (e.g., episode1.html)
const currentPage = window.location.pathname.split('/').pop();

// Fetch episode metadata from episodes.json
fetch('episodes.json')
    .then(response => response.json())
    .then(data => {
        const episodes = data.episodes;
        const currentIndex = episodes.findIndex(ep => ep.file === currentPage);

        // Get buttons
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');

        // Set Previous Button
        if (currentIndex > 0) {
            prevButton.onclick = () => {
                window.location.href = episodes[currentIndex - 1].file;
            };
        } else {
            prevButton.disabled = true; // Disable if no previous
        }

        // Set Next Button
        if (currentIndex < episodes.length - 1) {
            nextButton.onclick = () => {
                window.location.href = episodes[currentIndex + 1].file;
            };
        } else {
            nextButton.disabled = true; // Disable if no next
        }
    })
    .catch(error => console.error('Error loading episodes:', error));