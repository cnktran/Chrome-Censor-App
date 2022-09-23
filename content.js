document.addEventListener("DOMContentLoaded", function() {
  chrome.storage.sync.get(["data1", "data2", "type"], function(items) {
    if (!chrome.runtime.error) {
        words2=items.data2;
        for (item in words2)
        {
          var re2 = new RegExp(`[^.!?]*`+words2[item]+`[^.!?]*[.!?]`, 'gi');
          document.body.innerHTML = document.body.innerHTML.replace(re2, " SENTENCE REMOVED");
        }
        words1=items.data1;

        for (item in words1)
        {
          var size = words1[item].length;
          var word = "*";
          var replacement = word.repeat(size);
          var re = new RegExp(`\\b${words1[item]}\\b`, 'gi');
          document.body.innerHTML = document.body.innerHTML.replace(re, replacement);
        }
    }
  });
});