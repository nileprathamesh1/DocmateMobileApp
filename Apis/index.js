const HOST = "http://10.20.60.252:9099/";

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