document.addEventListener('DOMContentLoaded', () => {
    const recordButton = document.getElementById('recordButton');
    const transcription = document.getElementById('transcription');
    const generatedImage = document.getElementById('generatedImage');

    recordButton.addEventListener('click', () => {
        // Placeholder for voice recording functionality
        console.log("Recording voice...");
        transcription.innerText = "Processing voice input...";

        // Simulate a delay as if processing voice and generating image
        setTimeout(() => {
            transcription.innerText = "Voice transcribed. Generating image...";
            setTimeout(() => {
                transcription.innerText = "Voice transcribed: [Your description here]";
                generatedImage.src = "https://images.pexels.com/photos/296282/pexels-photo-296282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";
                generatedImage.alt = "AI generated image based on voice description";
            }, 3000); // Simulating image generation delay
        }, 2000); // Simulating voice transcription delay
    });
});
