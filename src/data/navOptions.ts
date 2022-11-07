import { environment } from "src/environments/environment";

const navOptions = [
    {
        name: 'Home',
        path: '/',
        icon: '../assets/home.png',
        exact: true,
		auth: true
    },
    {
        name: 'Log in',
        path: '/login',
        icon: '../assets/login.png',
        exact: true,
		auth: unAuth()
    },
];

function unAuth(){
	if(environment.auth === null){
		return true;
	}else{
		return false;
	}
}
export default navOptions;