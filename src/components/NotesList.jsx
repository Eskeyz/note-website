import AddNote from "./AddNote"
import Note from "./Note"

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
        <div className="my-4 grid gap-4 grid-cols-1 md:grid-cols-3 ">
            {
                notes.map((note) => (
                    <Note text={note.text} id={note.id} date={note.date} key={note.id} handleDeleteNote={handleDeleteNote} />
                ))
            }
            <AddNote handleAddNote={handleAddNote} />
        </div>
    )
}

export default NotesList