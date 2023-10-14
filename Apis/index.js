const HOST = "http://192.168.198.207:9099/";

export function IsLoggedIn(){

	return new Promise(async (resolve, reject) => {
		const resp = await fetch(HOST + "auth/isloggedin", {
		  method: 'get',
		  headers: {
		    Accept: 'application/json',
		    'Content-Type': 'application/json',
		  },
		});

		const json = await resp.json();
		resolve(json);
	})
}

export async function Login(formBody){
	const resp = await fetch(HOST + 'auth/login', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      },
    });

    const json =  await resp.json();
    return json;
      
}