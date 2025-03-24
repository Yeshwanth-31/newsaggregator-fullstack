const API_KEY = "0ea2bdb2e0714ed0a010339f866ae4b0";
const url = "https://newsapi.org/v2/everything?q=";

// Fetch the user's preferences from the backend after login
async function fetchUserPreferences() {
    const token = localStorage.getItem("token");
    if (!token) {
        // If no token, redirect to login page
        window.location.href = "login.html";
        return;
    }

    const res = await fetch('http://localhost:5000/api/auth/preferences', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    const data = await res.json();

    if (res.ok) {
        // Populate categories based on user preferences
        populateCategories(data.preferences);
    } else {
        alert(data.message);
    }
}

// Populate the categories dynamically based on user preferences
function populateCategories(preferences) {
    const categoryLinks = document.getElementById('category-links');
    categoryLinks.innerHTML = ''; // Clear existing categories

    // Loop through user preferences and create nav items
    preferences.forEach((pref) => {
        const li = document.createElement('li');
        li.classList.add('hover-link', 'nav-item');
        li.textContent = capitalizeFirstLetter(pref);
        li.addEventListener("click", () => onNavItemClick(pref));
        categoryLinks.appendChild(li);
    });
}

// Capitalize the first letter of a category (e.g. "business" -> "Business")
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Fetch news based on the selected category or search query
async function fetchNews(query) {
    const res = await fetch(`${url}${query}&apiKey=${API_KEY}`);
    const data = await res.json();
    bindData(data.articles);
}

function bindData(articles) {
    const cardsContainer = document.getElementById("cardscontainer");
    const newsCardTemplate = document.getElementById("template-news-card");

    cardsContainer.innerHTML = "";

    articles.forEach((article) => {
        if (!article.urlToImage) return;

        const cardClone = newsCardTemplate.content.cloneNode(true);
        fillDataInCard(cardClone, article);
        cardsContainer.appendChild(cardClone);
    });
}

function fillDataInCard(cardClone, article) {
    const newsImg = cardClone.querySelector("#news-img");
    const newsTitle = cardClone.querySelector("#news-title");
    const newsSource = cardClone.querySelector("#news-source");
    const newsDesc = cardClone.querySelector("#news-desc");

    newsImg.src = article.urlToImage;
    newsTitle.innerHTML = `${article.title.slice(0, 60)}...`;
    newsDesc.innerHTML = `${article.description.slice(0, 150)}...`;

    const date = new Date(article.publishedAt).toLocaleString("en-US", { timeZone: "Asia/Jakarta" });

    newsSource.innerHTML = `${article.source.name} · ${date}`;

    cardClone.firstElementChild.addEventListener("click", () => {
        window.open(article.url, "_blank");
    });
}

// Fetch news when a category is clicked
function onNavItemClick(id) {
    fetchNews(id);
    const navItem = document.getElementById(id);
    if (navItem) {
        navItem.classList.add("active");
    }
}

// Handle search
const searchButton = document.getElementById("search-button");
const searchText = document.getElementById("search-text");

searchButton.addEventListener("click", () => {
    const query = searchText.value;
    if (!query) return;
    fetchNews(query);
});

// When the page loads, fetch user preferences and display news accordingly
window.addEventListener("load", () => {
    fetchUserPreferences();
});
