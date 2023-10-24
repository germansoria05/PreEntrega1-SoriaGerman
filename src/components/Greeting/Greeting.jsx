import UserProfile from "../UserProfile/UserProfile" 

const Greeting =() => {
    const user = {
        name: "Lionel",
        age: "20",
    }
    return (
        <>
        <h1>Bienvenido, {user.name}
    <UserProfile usuario={user}/>
        </h1>

        </>
    )
}

export default Greeting;