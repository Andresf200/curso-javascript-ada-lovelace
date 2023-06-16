<?php
    error_reporting(0);

    $objeto = (object)[];
    $objeto->nombre = "Felipe";
    $objeto->nacimiento = 2000;
    $objeto->pais = "Colombia";

    $miJson = json_encode($objeto);


    echo $miJson;
?>