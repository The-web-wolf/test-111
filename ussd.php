<?php
if($_SERVER['REQUEST_METHOD'] != 'POST'){
	die('You are so at the wrong place!');
}
// Reads the variables sent via POST from our gateway
$sessionId   = $_POST["sessionId"];
$serviceCode = $_POST["serviceCode"];
$phoneNumber = $_POST["phoneNumber"];
$text        = $_POST["text"];

function error(){
	$response = "END That's an invalid selection";
	return $response;
}

function lang_set($english, $igbo, $yoruba , $hausa , $pidgin , $user_language , $request){
	// function to ease multiple language stuff
	if(isset($english) && isset($igbo) && isset($yoruba) && isset($hausa) && isset($pidgin) && isset($user_language)){
		// make a switch with the data provided

		switch($user_language){
			case 'english':
				$output = $english;
				break;
			case 'igbo':
				$output = $igbo;
				break;
			case 'yoruba':
				$output = $yoruba;
				break;
			case 'hausa':
				$output = $hausa;
				break;
			case 'pidgin':
				$output = $pidgin;
				break;
			default:
				$output = $english;
				break;
		}

	}
	else{

		$output = "Error switching language";
	}

	if($request === 'CON'){
		return "CON ". $output;
	}

	else if($request === 'END'){
		return "END ". $output;
	}

	else{
		return "END ". $output;
	}
}

if (isset($text)) {

	if(empty($text)){
	    // This is the first request. Note how we start the response with CON
	    $response  = "CON  Welcome To Better Law,  what language would you like to be serviced in? \n";
	    $response .= "1. English \n";
	    $response .= "2. Igbo \n";
	    $response .= "3. Yoruba \n";
	    $response .= "4. Hausa \n";
	    $response .= "5. Pidgin";		
	}

	else{
		// that means a request have been made now lets get that request using a switch
		if(strpos($text , '*') === false){
			switch($text){
				case "1":
					$response = "CON Hi, English it is. ";
					$response .= "\n Are you a legal practitioner?";
					$response .= "\n 1. Yes";
					$response .= "\n 2. No";
					break;
				case "2":
					$response = "CON Hi, Igbo ọ bụ";
					$response .= "\n Are you a legal practitioner?";
					$response .= "\n 1. Yes";
					$response .= "\n 2. No";					
					break;
				case "3":
					$response = "CON Hi , Yorùbá ni";
					$response .= "\n Are you a legal practitioner?";
					$response .= "\n 1. Yes";
					$response .= "\n 2. No";					
					break;
				case "4":
					$response = "CON sannu , Hausa shi ne";
					$response .= "\n Shin lau lauya ne?";
					$response .= "\n 1. Yes";
					$response .= "\n 2. No";					
					break;
				case "5":
					$response = "CON ya , we go roll am for pidgin";
					$response .= "\n Omoh you b lawyer?";
					$response .= "\n 1. Yes";
					$response .= "\n 2. No";					
					break;
				default :
					$response = "END Invalid selection";					
					break;
			}			
		}

		else if(strpos($text , '*') !== false){
			// second step
			$get_attrs = explode('*', $text);

			if(isset($get_attrs[0])){
				$language_post = $get_attrs[0];

				switch ($language_post) {
					case '1':
						$language = 'english';
						break;
					case '2':
						$language = 'igbo';
						break;
					case '3':
						$language = 'yoruba';
						break;
					case '4':
						$language = 'hausa';
						break;
					case '5':
						$language = 'pidgin';
						break;
					
					default:
						$language = 'english';
						break;
				}
			}
			else{
				$language = "English";
			}

			if(isset($get_attrs[1])){
				// legal practitioner or not
				switch ($get_attrs[1]) {
					case '1':
						$role = 'legal';
						break;
					case '2':
						$role = 'litigant';
						break;
					
					default:
						$role = 'litigant';
						break;
				}
			}

			// language and role gotten. Time to further up
			require('data.php');		
		}

		else{
			// user input does not match any field
			$response = error() . $text;
		}
	}

} 

else{
	$response = 'END Not sure how you got here';

}

// Echo the response back to the API
header('Content-type: text/plain');
echo $response;

