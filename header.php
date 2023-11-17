<?php

$html = <<<ENDHTML
<html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title ?? 'Default Title'; ?></title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>AI Image Generator</h1>
            <!-- Add navigation menu, search box etc. here if needed -->
        </header>

ENDHTML;


?>