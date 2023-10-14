export const HOST = "http://10.20.63.105:9099/";

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
		resolve({data: json, code: resp.status});
	})
}

export async function Login(formBody){
	const resp = await fetch(HOST + 'auth/login', {
      method: 'POST',
      body: JSON.stringify(formBody),
	  headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
	  },
    });
    const json =  await resp.json();
    return {data: json, code: resp.status};
      
}4


export async function SignUp(formBody){
	const resp = await fetch(HOST + "auth/signup", {
      method: 'POST',
      body: formBody,

    });
	if (!resp.ok) {
		// Handle network or HTTP error here
		throw new Error('Network error');
	  }

	const json = (await resp.json());
	return json;
      
}



export async function Logout(){
	const resp = await fetch(HOST + "auth/logout", {
      method: 'POST',

    });
	if (!resp.ok) {
		// Handle network or HTTP error here
		throw new Error('Network error');
	  }

	const json = (await resp.json());
	return json;
      
}