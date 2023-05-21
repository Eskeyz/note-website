import { useState } from "react"

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState("")
    const MaxText = 300
    const handleSave = () => {
        if (noteText.trim().length) {
            handleAddNote(noteText)
        }
        setNoteText('')
    }

    const handleChange = (e) => {
        if (MaxText - e.target.value.length >= 0) {
            setNoteText(e.target.value)
        }
    }

    return (
        <div className="flex flex-col justify-between whitespace-pre-wrap bg-gray-700 rounded-lg p-4 ">
            <textarea className="border-none subpixel-antialiased rounded-lg text-white resize-none bg-gray-700 focus:outline-none" rows="7" placeholder="Type something..." value={noteText} onChange={handleChange} />
            <div className="flex items-center justify-between">
                <small className="text-white ">{MaxText - noteText.length} Remining</small>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-white hover:cursor-pointer " onClick={handleSave}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
                {/* <button onClick={handleSave} className="bg-blue-300 border-none rounded-lg py-2 px-5 hover:bg-blue-700 hover:cursor-pointer ">Save</button> */}
            </div>
        </div>
    )
}

export default AddNote;