document.getElementById("Set").onclick = function()
{
  var d = document.getElementById("text").value;
  if (document.getElementById("check").checked == true)
  {
    var c = 2;
    chrome.storage.sync.get(["data2"], function (items)
    {
      sentencearray = items.data2;
      sentencearray.push(d);
      chrome.storage.sync.set({ "data2" : sentencearray, "type" : c }, function()
      {
        if (chrome.runtime.error)
        {
          console.log("Runtime error.");
        }
      });
    });
  }
  else
  {
    c = 1;
    chrome.storage.sync.get(["data1"], function (items)
    {
      wordarray = items.data1;
      wordarray.push(d);
      chrome.storage.sync.set({ "data1" : wordarray, "type" : c }, function()
      {
        if (chrome.runtime.error)
        {
          console.log("Runtime error.");
        }
      });
    });
  }
  window.close();

  //to reload all open tabs
  chrome.tabs.query({windowType:'normal'}, function(tabs)
  {
    for(var i = 0; i < tabs.length; i++)
    {
        chrome.tabs.update(tabs[i].id, {url: tabs[i].url});
    }
  });
};

document.getElementById("Clear").onclick = function() {
  var wordarray = [];
  var sentencearray = [];
  chrome.storage.sync.set({ "data1" : wordarray, "data2" : sentencearray }, function()
  {
        if (chrome.runtime.error)
        {
          console.log("Runtime error.");
        }
  });
  chrome.tabs.query({windowType:'normal'}, function(tabs)
  {
    for(var i = 0; i < tabs.length; i++)
    {
        chrome.tabs.update(tabs[i].id, {url: tabs[i].url});
    }
  });
  window.close();
};