chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("Texto recibido: " + request.text);
        // Aquí es donde procesarías el texto y obtendrías la transcripción en IPA.
        // Por ahora, solo enviaremos un mensaje de ejemplo.
        sendResponse({response: "Texto procesado"});
    }
);
