/* ==========================================
   BOREDTECH ARTICLE SYSTEM
========================================== */

const featuredContainer =
    document.getElementById("featured-article");

const articleGrid =
    document.getElementById("article-grid");

/* ==========================================
   LOAD ARTICLES
========================================== */

async function loadArticles() {

    try {

        const response =
            await fetch("data/articles.json");

        const articles =
            await response.json();

        buildFeaturedArticle(articles);

        buildArticleGrid(articles);

    }

    catch(error) {

        console.error(
            "Failed to load articles:",
            error
        );

    }

}

/* ==========================================
   FEATURED ARTICLE
========================================== */

function buildFeaturedArticle(articles) {

    if(!featuredContainer) return;

    const featured =
        articles.find(
            article => article.featured
        );

    if(!featured) return;

    featuredContainer.innerHTML = `

    <div class="featured-image">

        <img
            src="${featured.image}"
            alt="${featured.title}">

    </div>

    <div class="featured-content">

        <span class="category">
            ${featured.category}
        </span>

        <h2>
            ${featured.title}
        </h2>

        <p>
            ${featured.description}
        </p>

        <div class="meta">

            ${featured.readTime}
            •
            ${featured.date}

        </div>

    </div>

    `;

}

/* ==========================================
   ARTICLE GRID
========================================== */

function buildArticleGrid(articles) {

    if(!articleGrid) return;

    articleGrid.innerHTML = "";

    articles.forEach(article => {

        const card =
        document.createElement("article");

        card.classList.add(
            "article-card"
        );

        card.innerHTML = `

        <img
        src="${article.image}"
        alt="${article.title}">

        <div class="card-content">

            <span>
                ${article.category}
            </span>

            <h3>
                ${article.title}
            </h3>

            <p>
                ${article.description}
            </p>

            <div class="card-meta">

                ${article.readTime}

            </div>

        </div>

        `;

        card.addEventListener(
            "click",
            () => {

                window.location.href =
                `article.html?id=${article.id}`;

            }
        );

        articleGrid.appendChild(card);

    });

}

/* ==========================================
   START
========================================== */

loadArticles();
