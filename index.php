<?php

$title = "Home";
include('header.php');

$main = <<<HTML
<main>
<div class="container">
    <div class="input-section">
        <button id="recordButton">Record Description</button>
        <p id="transcription">Transcription will appear here...</p>
    </div>
    <div class="image-section">
        <img id="generatedImage" src="#" alt="Generated Image will appear here">
    </div>
</main>
</div>

HTML;

echo $main;

// include('sidebar.php');
include('footer.php');


?>