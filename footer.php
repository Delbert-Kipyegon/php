<?php


function get_year() {
    return date('Y');
}

$year = get_year();

$html = <<<HTML

  <!-- Footer content -->
  
        <footer>
            <p>Copyright © Delbert Kipyegon $year</p>
        </footer>
    
<script src="script.js"></script>
</body>
</html>

HTML;

echo $html;
?>