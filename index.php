<?php

$title = "Home";
include('header.php');


$html = <<<HTML

<main>
    <div class="input-section">
        <button id="recordButton">Record </button>
        <p id="transcription">Transcription will appear here...</p>
    </div>
    <div class="image-section">
        <img id="generatedImage" src="#" alt="Generated Image will appear here">
    </div>
</main>


</div>

HTML;

echo $html;

include('sidebar.php');
// include('footer.php');

?>