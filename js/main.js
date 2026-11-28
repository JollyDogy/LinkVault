import {renderLinks} from "./ui.js";
import {loadLinks, saveLinks} from "./storage.js";

let links = loadLinks();

const linkDialog = document.querySelector("#link-dialog");
const linkForm = document.querySelector("#link-form");

const addLinkButton = document.querySelector("#add-link-button");
const emptyAddLinkButton = document.querySelector("#empty-add-link-button");
const cancelDialogButton = document.querySelector("#cancel-dialog-button");

renderLinks(links);

// открытие формы
addLinkButton.addEventListener("click", () => {
    linkDialog.showModal();
});

// открытие формы из пустого состояния
emptyAddLinkButton.addEventListener("click", () => {
    linkDialog.showModal();
});

// закрытие формы
cancelDialogButton.addEventListener("click", () => {
    linkDialog.close();
});

// добавление новой ссылки
linkForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const newLink = {
        id: Date.now(),
        title: document.querySelector("#link-title").value.trim(),
        url: document.querySelector("#link-url").value.trim(),
        description: document.querySelector("#link-description").value.trim(),
        categoryId: document.querySelector("#link-category").value
    };

    links.push(newLink);
    saveLinks(links);
    renderLinks(links);
    linkForm.reset();
    linkDialog.close();
});
