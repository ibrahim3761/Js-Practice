export default function Friend({friend}){

    const {name} = friend;
    const {email} = friend;
    const {phone} = friend;

    return(
        <div className="card">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}