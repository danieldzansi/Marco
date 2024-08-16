
// Sample data structure for projects and achievements
let projects = [];
let achievements = [];

// Function to add a new project
function addProject(title, description) {
    projects.push({ title, description });
    updateProjectList();
}

// Function to add a new achievement
function addAchievement(title, date) {
    achievements.push({ title, date });
    updateAchievementList();
}

// Function to update the project list in the DOM
function updateProjectList() {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';
    projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.innerHTML = `<h3>${project.title}</h3><p>${project.description}</p>`;
        projectList.appendChild(projectElement);
    });
}

// Function to update the achievement list in the DOM
function updateAchievementList() {
    const achievementList = document.getElementById('achievement-list');
    achievementList.innerHTML = '';
    achievements.forEach(achievement => {
        const achievementElement = document.createElement('div');
        achievementElement.innerHTML = `<h3>${achievement.title}</h3><p>Date: ${achievement.date}</p>`;
        achievementList.appendChild(achievementElement);
    });
}

// Example usage:
addProject("Personal Portfolio", "A responsive website to showcase my skills and achievements");
addAchievement("aklade", "12th june 2023");
