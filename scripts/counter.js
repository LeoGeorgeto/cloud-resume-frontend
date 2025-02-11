// Get the HTML element that will display the visitor count
const visitorCount = document.getElementById('visitor-count');

// API endpoint for the visitor counter Lambda function
const apiUrl = 'https://ydvppb79v0.execute-api.us-east-1.amazonaws.com/prod/count';

// Function to fetch and update the visitor count
async function updateVisitorCount() {
    try {
        // Fetch count from API endpoint
        const response = await fetch(apiUrl);

        // Check if the response was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Parse the JSON response
        const data = await response.json();

        // Update the visitor count display
        visitorCount.textContent = data.count;
    } catch (error) {
        // Log any errors to the console
        console.error('Error updating visitor count:', error);

        // Display error message to user
        visitorCount.textContent = 'Error loading count';
    }
}

// Update the count when the page loads
// Wait for DOM to be fully loaded before executing
document.addEventListener('DOMContentLoaded', updateVisitorCount);