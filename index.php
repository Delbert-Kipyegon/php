<?php

$title = "Home";
include 'header.php';

// get_header()

$transcription = "Voice Transcription ";

?>

<section>
    <div class="input-section">
        <button id="recordButton">Record </button>
        <p id="transcription">
            <?php echo $transcription ?>
        </p>
    </div>
    <div class="image-section">
        <img id="generatedImage" src="#" alt="Generated Image will appear here">
    </div>
</section>


</div>


<?php include 'footer.php' ?>