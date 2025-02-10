const visitorCount = document.getElementById('visitor-count');
const apiUrl = 'https://ydvppb79v0.execute-api.us-east-1.amazonaws.com/prod/count';

async function updateVisitorCount() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        visitorCount.textContent = data.count;
    } catch (error) {
        console.error('Error updating visitor count:', error);
        visitorCount.textContent = 'Error loading count';
    }
}

document.addEventListener('DOMContentLoaded', updateVisitorCount);