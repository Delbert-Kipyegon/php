<?php

// from DB
$name = "root";
$pass = "pass1";

function get_credetials()
{
    $username = (string) readline("Enter Username: ");
    $password = (string) readline("Enter Password: ");

    $credentials = [
        "username" => $username,
        "password" => $password
    ];

    return $credentials;
}

function login()
{
    global $name, $pass;

    $creds = get_credetials();

    if ($name == $creds["username"] && $pass == $creds["password"]) {
        echo "Login Success";

        return true;

    } else {
        echo "\nPlease try again\n";
    }

}

$count = 0; // getting the number of trials

do {

    if(login()) {
        break;
    } 

    $count++;

    if ($count == 3) {
        echo "You have exceeded the number of trials";
        break;
    }

} while (true);


?>