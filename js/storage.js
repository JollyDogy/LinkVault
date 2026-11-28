const STORAGE_KEY = "linkvault-links";

export function loadLinks() {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data === null) {
        return [];
    }
    return JSON.parse(data);
}

export function saveLinks(links) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
}
