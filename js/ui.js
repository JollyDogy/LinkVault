export function createLinkCard(link) {
    const card = document.createElement("div");
    card.classList.add("link-card");
    const title = document.createElement("h3");
    title.textContent = link.title;
    const description = document.createElement("p");
    description.textContent = link.description;
    const url = document.createElement("a");
    url.href = link.url;
    url.textContent = "Открыть сайт";
    url.target = "_blank";
    url.rel = "noopener noreferrer";

    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(url);
    return card;
}

export function renderLinks(links) {
    const linksList = document.querySelector("#links-list");
    linksList.replaceChildren();
    links.forEach((link) => {
        const card = createLinkCard(link);
        linksList.appendChild(card);
    });
}
