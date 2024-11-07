// Example JavaScript functionality for dashboard and enroll button

function enrollNow() {
    alert("Enrollment functionality coming soon!");
}

function startLearning() {
    alert("Starting your customized learning journey!");
}

// Mock data for user info in the dashboard
const userInfo = {
    name: "John Doe",
    points: 250,
    currentCourse: "Web Development - Beginner"
};

window.onload = function() {
    displayUserInfo();
};

function displayUserInfo() {
    const userInfoSection = document.getElementById('userInfo');
    userInfoSection.innerHTML = `
        <h3>Welcome, ${userInfo.name}</h3>
        <p>Points: ${userInfo.points}</p>
        <p>Current Course: ${userInfo.currentCourse}</p>
    `;
}