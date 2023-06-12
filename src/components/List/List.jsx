export default function List({name, onDeleteActivity, id}) {
    return (
        <>
        <ul>
            <li>{name}</li>
            <button onClick={() => onDeleteActivity(id)}>Delete</button>
        </ul>
        </>
    )
}