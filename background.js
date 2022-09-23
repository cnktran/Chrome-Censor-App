var wordarray = [];
var sentencearray = [];

chrome.storage.sync.set({ "data1" : wordarray}, function() {
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
});

chrome.storage.sync.set({ "data2" : sentencearray}, function() {
    if (chrome.runtime.error) {
      console.log("Runtime error.");
    }
});