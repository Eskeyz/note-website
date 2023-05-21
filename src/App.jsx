import { nanoid } from "nanoid"
import { useEffect, useRef, useState } from "react"
import Header from "./components/Header"
import NotesList from "./components/NotesList"
import Search from "./components/Search"

const App = () => {
	const [searchInput, setSearchInput] = useState("")
	const [toggleMode, setToggleMode] = useState(false)
	const [notes, setNotes] = useState([
		{ id: 1, text: 'Example note', date: '01/01/1999' },
	])


	useEffect(() => {
		const savedNotes = JSON.parse(localStorage.getItem('note-app'))
		if (savedNotes) {
			setNotes(savedNotes)
		}
	}, [])

	const saveToLocalStorage = (data) => {
		localStorage.setItem('note-app', JSON.stringify(data))
	}

	const addNote = (text) => {
		const date = new Date()
		const newNote = {
			id: nanoid(),
			text,
			date: date.toLocaleDateString()
		}
		const newNotes = [...notes, newNote]
		setNotes(newNotes)
		saveToLocalStorage(newNotes)
	}

	const deleteNote = (id) => {
		const removedNote = notes.filter((note) => note.id !== id)
		setNotes(removedNote)
		saveToLocalStorage(removedNote)
	}

	return (
			<div className="mx-auto px-8 md:px-52 mt-5">
				<Header setToggleMode={setToggleMode} toggleMode={toggleMode} />
				<Search handleSearchInput={setSearchInput} />
				<NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchInput.toLowerCase()))} handleAddNote={addNote} handleDeleteNote={deleteNote} />
			</div>
	)
}

export default App

