// popup.js

document.addEventListener('DOMContentLoaded', function () {
  console.log("test123");

  const datePicker = document.getElementById('datepicker');
  const applyButton = document.getElementById('applyButton');

  applyButton.addEventListener('click', function () {
    const selectedDate = datePicker.value;

    // Store the selected date in Chrome storage (or perform any other action)
    chrome.storage.sync.set({ 'selectedDate': selectedDate }, function () {
      console.log('Selected date stored:', selectedDate);
    });

  });
});
document.getElementById("applyButton").addEventListener("click", () => {
  console.log("test123");
  var turndownService = new TurndownService()
  const text = "<p>The question <a href=\"https://stackoverflow.com/questions/134235/is-there-any-good-markdown-javascript-library-or-control\">Is there any good Markdown Javascript library or control?</a> and its answers might help, too :-)</p>"
  var markdown = turndownService.turndown(text);
  document.getElementById("tf2").innerText = markdown;
})