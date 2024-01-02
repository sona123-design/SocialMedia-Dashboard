document.addEventListener('DOMContentLoaded', function () {
    const loginPage = document.getElementById('loginPage');
    const loginButton = document.getElementById('loginBtn');
    const dashboard = document.getElementById('dashboard');
    const userProfileDiv = document.getElementById('userProfile');
    const userAvatar = document.getElementById('userAvatar');
    const usernameSpan = document.getElementById('username');
    const logoutButton = document.getElementById('logoutBtn');
    const postInput = document.getElementById('postInput');
    const postButton = document.getElementById('postBtn');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchBtn');
    const messageText = document.getElementById('messageText');
    const postFeed = document.getElementById('postFeed');

    let loggedInUser = null; // Dummy user data for demonstration purposes

    // Function to simulate adding a new post
    function addPost(username, text) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <div class="post-header">
                <img class="post-avatar" src="https://placekitten.com/30/30" alt="${username} Avatar">
                <span class="post-username">${username}</span>
            </div>
            <div class="post-content">${text}</div>
        `;
        postFeed.insertBefore(postElement, postFeed.firstChild);
    }

    function showDashboard() {
        loginPage.classList.add('hidden');
        dashboard.classList.remove('hidden');
    }

    function hideDashboard() {
        loginPage.classList.remove('hidden');
        dashboard.classList.add('hidden');
    }

    // Simulate user authentication
    loggedInUser = {
        username: 'demoUser',
    };

    // Initial page state
    if (loggedInUser) {
        showDashboard();
        userAvatar.src = 'https://placekitten.com/40/40'; // Update with the user's actual avatar
        usernameSpan.textContent = loggedInUser.username;
        // Simulated initial posts
        addPost('user1', 'This is a post from user1.');
        addPost('user2', 'Hello from user2!');
    } else {
        hideDashboard();
    }

    // Event listeners
    loginButton.addEventListener('click', function () {
        // Simulate user log in
        loggedInUser = {
            username: 'demoUser',
        };
        showDashboard();
        userAvatar.src = 'https://placekitten.com/40/40'; // Update with the user's actual avatar
        usernameSpan.textContent = loggedInUser.username;
    });

    logoutButton.addEventListener('click', function () {
        // Simulate user log out
        loggedInUser = null;
        hideDashboard();
    });

    postButton.addEventListener('click', function () {
        // Simulate posting a new message
        const newPostText = postInput.value;
        if (newPostText.trim() !== '') {
            addPost(loggedInUser.username, newPostText);
            postInput.value = ''; // Clear the input field after posting
        }
    });

    searchButton.addEventListener('click', function () {
        // Simulate search functionality
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            messageText.textContent = `Search results for: ${searchTerm}`;
        }
    });
});




