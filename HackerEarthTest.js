const axios = require("axios");
axios({
	"method": "POST",
	"url": "https://judge0.p.rapidapi.com/submissions",
	"headers": {
		"content-type": "application/json",
		"x-rapidapi-host": "judge0.p.rapidapi.com",
		"x-rapidapi-key": "9b0f31e01fmsh859f41ecd1db8bap19b89fjsn60e1e45356ff",
		"accept": "application/json",
		"useQueryString": true
	}, "data": {
		"language_id": 50, "source_code": "#include <stdio.h>\n\nint main(void) {\n  char name[10];\n  scanf(\"%s\",name);\n  printf(\"hello %s\\n\",name);\n  return 0;\n}",
		"stdin": "world"
	}
})
	.then((response) => {
		console.log(response)
	})
	.catch((error) => {
		console.log(error)
	})

// let HackerEarth = require('hackerearth-node'); //require the Library
// //Now set your application 
// let hackerEarth = new HackerEarth(
// 	'9ba581c5da8b522f4035cda1679749af98b7e828',  //Your Client Secret Key here this is mandatory
// 	''  //mode sync=1 or async(optional)=0 or null async is by default and preferred for nodeJS
// );
// let config = {};
// config.time_limit = 1;  //your time limit in integer
// config.memory_limit = 323244;  //your memory limit in integer
// config.source = `class Hello {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello Java!"); // Display the string.\n\t}\n}`  //your source code for which you want to use hackerEarth api
// config.input = "";  //input against which you have to test your source code
// config.language = "JAVA"; //optional choose any one of them or none

// //compile your code 
// //compile your code 
// hackerEarth.run(config)
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	});

// axios = require('axios')
// async function call()
// {

// 	const config = {
// 		headers: {
// 			client_secret: "a09873f4450a7c363962c7d72511d17942bcf86f",
// 		}
// 	}
// 	const body = {
// 		client_secret: "a09873f4450a7c363962c7d72511d17942bcf86f",
// 		async: 0,
// 		source: `class Hello {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello Java!"); // Display the string.\n\t}\n}`,  //your source code for which you want to use hackerEarth api
// 		lang: "JAVA",
// 		time_limit: 5,
// 		memory_limit: 262144,
// 	}
// 	try {
// 		const response = await axios.post("http://api.hackerearth.com/code/compile/", body, config)
// 		console.log(response)
// 	}
// 	catch (error) {
// 		console.error(error)
// 	}
// }

// call()
