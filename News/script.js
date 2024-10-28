document.addEventListener('DOMContentLoaded', () => {
    const url = "https://newsapi.org/v2/everything?q=";

    // Load news specific to Indian stock market on page load
    window.addEventListener('load', () => fetchNews('Indian Stock Market OR BSE OR NSE OR Sensex OR Nifty50'));

    function reload() {
        window.location.reload();
    }

    async function fetchNews(query) {
        const res = await fetch(`${url}${query}&language=en&apikey=${API_KEY}`);
        const data = await res.json();
        bindData(data.articles.slice(0, 15)); // Limit to 15 articles
    }

    const searchButton = document.getElementById('search-button');
    const searchText = document.getElementById('search-text');
    searchButton.addEventListener('click', () => {
        const query = searchText.value;
        if (!query) return;
        fetchNews(query + ' AND (BSE OR NSE OR Sensex OR Nifty50)');
        curSelectedNav?.classList.remove('active');
        curSelectedNav = null;
    });
});
