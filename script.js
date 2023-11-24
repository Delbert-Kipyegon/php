document.addEventListener('DOMContentLoaded', () => {
    const recordButton = document.getElementById('recordButton');
    const transcription = document.getElementById('transcription');
    const generatedImage = document.getElementById('generatedImage');

    let recognition = null; // Declare recognition outside the click event handler

    recordButton.addEventListener('click', () => {
        console.log('record button clicked');
        recordButton.disabled = true;
        recordButton.textContent = 'Recording...';

        window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        recognition = new SpeechRecognition();
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.addEventListener('result', e => {
            const transcript = Array.from(e.results)
                .map(result => result[0])
                .map(result => result.transcript)
                .join('');

            transcription.value = transcript;

            // Log the transcribed words to the console as they are recognized
            console.log('Recorded words:', transcript);

            if (e.results[0].isFinal) {
                recordButton.disabled = false;
                recordButton.textContent = 'Start Recording';

                // Call the function to generate an image based on the transcription
                generateImage(transcript);
            }
        });

        recognition.start();

        // Stop the recognition after 3 seconds
        setTimeout(() => {
            recognition.stop();
            recordButton.disabled = false;
            recordButton.textContent = 'Start Recording';
        }, 3000);
    });

    function generateImage(text) {
        // You can use an API like Unsplash to generate an image based on the text
        // Replace 'YOUR_UNSPLASH_API_KEY' with your actual Unsplash API key
        const unsplashApiKey = 'YOUR_UNSPLASH_API_KEY';
        const apiUrl = `https://api.unsplash.com/photos/random?query=${text}&client_id=${unsplashApiKey}`;

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (data.urls && data.urls.regular) {
                    generatedImage.src = data.urls.regular;
                } else {
                    generatedImage.src = ''; // Clear the image source if no image is found
                }
            })
            .catch(error => {
                console.error('Error fetching image:', error);
            });
    }
});
