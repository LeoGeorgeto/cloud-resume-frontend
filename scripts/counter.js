// This will be updated later with API integration
const countElement = document.getElementById('visitor-count');

// Placeholder function until we set up the backend
async function updateVisitorCount() {
    try {
        // This will be replaced with actual API call
        countElement.textContent = 'API not connected yet';
    } catch (error) {
        console.error('Error updating visitor count:', error);
        countElement.textContent = 'Error loading count';
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', updateVisitorCount);