<?php

$nombres = ["Sara","Imanol","Dani","Antonio","David","Igor","Noroa","Christian",
"Joseba","Angel","Alex","Dimitri","Mikel","Ivan","Martin"];

//Tomamos el valor del input
$nombre = $_REQUEST["nombre"];


if($nombre !== ""){
    $nombre = strtolower($nombre);
    $long = strlen($nombre);

    foreach($nombres as $nom){
       if(stristr($nombre,substr($nom,0,$long))){
        
       if($sugerencia == "") {
        $sugerencia = $nom;
       }else{ 
        $sugerencia = "$sugerencia , $nom";
       }
       }
    }
}

echo ($sugerencia == "") ? "No hay sugerencias" : $sugerencia;
?>