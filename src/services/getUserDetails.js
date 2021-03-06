export async function getUserDetails(token){
    try {
        const userInfo = await fetch("https://habit-app-backend.herokuapp.com/api/auth/getuser", {
            method: "POST",
            headers: {
                "auth-token": token
            }
        })
        
        const response = await userInfo.json();
        return response;

    } catch (error) {
        return error;
    }
}