<?php

			if(isset($get_attrs[1]) && !isset($get_attrs[2])){
				// means this is the second request that should direct to the third

				if($role === 'legal'){
					// legal stuff starts here
				}

				else if ($role === 'litigant'){
					// litigants stuffs starts here
					$response = lang_set("1. Make a complaint \n 2. Make a request \n","1. Make a complaint \n 2. Make a request \n","1. Make a complaint \n 2. Make a request \n","1. Make a complaint \n 2. Make a request \n","1. Make a complaint \n 2. Make a request \n" , $language , 'CON');
				}	
							
			}

?>