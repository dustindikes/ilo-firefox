browser.contextMenus.create({
    id: "translate-with-ilo",
    title: "Translate with ilo",
    contexts: ["selection"],
});

browser.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "translate-with-ilo") {
        browser.tabs.create({
            url : "https://dustindikes.github.io/ilo/?t=" + encodeURIComponent(info.selectionText.replaceAll("\r\n","\\n"))
        });
    }
});
