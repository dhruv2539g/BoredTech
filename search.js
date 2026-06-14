/* ==========================================
   BOREDTECH SEARCH SYSTEM
========================================== */

let allArticles = [];

/* ==========================================
   LOAD ARTICLES
========================================== */

async function loadSearchData() {

    try {

        const response =
            await fetch("data/articles.json");

        allArticles =
            await response.json();

    }

    catch(error) {

        console.error(
            "Search data failed to load",
            error
        );

    }

}

loadSearchData();

/* ==========================================
   CREATE SEARCH MODAL
========================================== */

const searchModal =
document.createElement("div");

searchModal.id = "search-modal";

searchModal.innerHTML = `

<div class="search-box">

    <div class="search-header">

        <input
            id="search-input"
            type="text"
            placeholder="Search BoredTech...">

        <button id="close-search">
            ✕
        </button>

    </div>

    <div id="search-results">

    </div>

</div>

`;

document.body.appendChild(
    searchModal
);

/* ==========================================
   OPEN SEARCH
========================================== */

const searchBtn =
document.querySelector(".search-btn");

if(searchBtn){

    searchBtn.addEventListener(
        "click",
        () => {

            searchModal.classList.add(
                "active"
            );

            document
            .getElementById(
                "search-input"
            )
            .focus();

        }
    );

}

/* ==========================================
   CLOSE SEARCH
========================================== */

document.addEventListener(
    "click",
    e => {

        if(
            e.target.id ===
            "close-search"
        ){

            searchModal.classList.remove(
                "active"
            );

        }

    }
);

/* ==========================================
   SEARCH
========================================== */

document.addEventListener(
    "input",
    e => {

        if(
            e.target.id !==
            "search-input"
        ) return;

        const query =
        e.target.value
        .toLowerCase()
        .trim();

        const resultsBox =
        document.getElementById(
            "search-results"
        );

        resultsBox.innerHTML = "";

        if(query.length < 2){

            return;

        }

        const matches =
        allArticles.filter(article => {

            return (

                article.title
                .toLowerCase()
                .includes(query)

                ||

                article.description
                .toLowerCase()
                .includes(query)

                ||

                article.category
                .toLowerCase()
                .includes(query)

            );

        });

        if(matches.length === 0){

            resultsBox.innerHTML = `

            <p class="no-results">

                No articles found.

            </p>

            `;

            return;

        }

        matches.forEach(article => {

            const item =
            document.createElement(
                "div"
            );

            item.className =
            "search-result";

            item.innerHTML = `

            <h4>
                ${article.title}
            </h4>

            <p>
                ${article.description}
            </p>

            `;

            item.addEventListener(
                "click",
                () => {

                    window.location.href =
                    `article.html?id=${article.id}`;

                }
            );

            resultsBox.appendChild(
                item
            );

        });

    }
);

/* ==========================================
   ESC KEY CLOSE
========================================== */

document.addEventListener(
    "keydown",
    e => {

        if(
            e.key === "Escape"
        ){

            searchModal.classList.remove(
                "active"
            );

        }

    }
);
