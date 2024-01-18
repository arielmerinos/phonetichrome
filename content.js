document.addEventListener('mouseup', function() {
    var selectedText = window.getSelection().toString();
    if (selectedText.length > 0) {
        chrome.runtime.sendMessage({text: selectedText}, function(response) {
            console.log("Respuesta: " + response.response);
            // Aquí puedes mostrar la respuesta en la página web.
        });
    }
});
