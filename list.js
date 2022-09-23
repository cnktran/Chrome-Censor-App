chrome.storage.sync.get(["data1", "data2"], function(items) {
    wordss1 = items.data1;
    wordss2 = items.data2;
    for (item in wordss1)
    {
        var node = document.createElement("LI");
        var textnode = document.createTextNode(wordss1[item]);
        node.appendChild(textnode);
        document.getElementById("list1").appendChild(node);
    }
    for (item in wordss2)
    {
        node = document.createElement("LI");
        textnode = document.createTextNode(wordss2[item]);
        node.appendChild(textnode);
        document.getElementById("list2").appendChild(node);
    }
});

/*document.getElementById("Clear").onclick = function() {
    chrome.tabs.query({windowType:'normal'}, function(tabs)
    {
        for(var i = 0; i < tabs.length; i++)
        {
            chrome.tabs.update(tabs[i].id, {url: tabs[i].url});
        }
    });
};*/