export default function DeleteButton(props) {
    return(
        <button onClick={() => props.deleteBox(props.id)}>Delete Nº{props.id}</button>
    )
}
