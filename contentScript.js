// contentScript.js

function modifyURLs() {
  // Find all <a> elements on the page
  const anchorElements = document.querySelectorAll('a');

  // Loop through each <a> element
  anchorElements.forEach((element) => {
    const href = element.href;

    // Check if the href attribute contains a specific string
    if (href.includes('radoslawgrzesiek.com')) {
      // Append a parameter to the URL
      const newUrl = href + (href.includes('?') ? '&' : '?') + 'myParam=myValue';
      
      // Update the href attribute with the modified URL
      element.href = newUrl;
    }
  });
}

// Initial invocation
modifyURLs();

// Listen for DOM changes using MutationObserver
const observer = new MutationObserver(() => {
  modifyURLs(); // Re-run modification on DOM changes
});

// Start observing the document body for changes
observer.observe(document.body, { subtree: true, childList: true });
