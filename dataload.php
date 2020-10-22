<?php

    //error_reporting(E_ALL); 
  //ini_set("display_errors", 1);

  ini_set( 'date.timezone', 'Asia/Seoul' );

  if (!empty($_POST["password"])){

    $_POST["password"] = "khan3701*_*";

    $ch3 = curl_init();
    curl_setopt($ch3, CURLOPT_URL, "https://script.google.com/macros/s/AKfycbzOg9Rx92oXfDLiU2XZivzC1t903PmpBOopwolzcD1Xl9YdEA/exec");
    curl_setopt($ch3, CURLOPT_POST, 1);
    curl_setopt($ch3, CURLOPT_POSTFIELDS, http_build_query($_POST));
    curl_setopt($ch3, CURLOPT_SSL_VERIFYPEER, 0);
    $result_write = curl_exec($ch3);
    curl_close($ch3);

  } else {

    $url = "https://spreadsheets.google.com/feeds/list/18pEuaZ3hTmKwboWZGV-rJ22UUMaEzVwmfX9FdAPe2EA/1/public/basic?alt=json-in-script";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_URL, $url);
    $result = curl_exec($ch);
    curl_close($ch);

    $result = str_replace("gdata.io.handleScriptLoaded(", "", $result);
    $result = str_replace("$", "", $result);
    $result = substr_replace($result, "", strlen($result)-1);
    $result = substr_replace($result, "", strlen($result)-1);

    $data = json_decode($result);

    $entry = $data -> feed -> entry;
    $content = $entry[0] -> content -> t;
    $firstName = $entry[0] -> title -> t;

    $recordList = array();
    $rawList = explode(",", $content);
    $arrlength = count($rawList) - 1;

    $recordList["돼지저금통형"] = $firstName;

    for($k = 0; $k < $arrlength; $k++){

      $rawData = explode(":", $rawList[$k]);
      $name = trim($rawData[0]);
      $seCount = trim($rawData[1]);
      $recordList[$name] = $seCount;

    }

    echo json_encode($recordList);

  }

?>
