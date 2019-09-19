<form> * form in react always has 
form inputs 
type text, calendar, button, password, search, radio< option selection

firldset set for radio button

label for every input for aceees and readersm


BUILDING FORM
return(
    <form>
    for doesnt work reserved   use htmlFor for for focus in use access
    <label htmlFor="title'>Note Title</label>
    <input id-"title" tupe="text" name ="title" value='sim to place but hardcodes'></input>
    <label htmlFor=Note></input>
    <textarea id="thing" name='thing' onchange={handlechange} value={note.desc}><textarea>
    <button type='submit'>add one </button>
    </form>
)

USESTATE <--- this holds the user input
const [one, setOne] = useState({title: "", body: ''})

HANDLE CHANGE
set new handleChange
hange goes on the input to watch for input
const handleChange = e => {
    setOne({note: event.target.value}) <--- use this to hold value
    console.log(e.target.value) target value is whats being changed 
}
<input id-"" type="" name ="" onChange={handleCHanges}>

^this overwrites mutliple attempts so a rewrite os  by spread and computed
COMPUTED PROPERTIES
const handlechange = event => {
    setthing({...one, [event.target.name]:event.target.value})
}



BUTTONS
in forms you need a type and you will have to prevent default of the of enter or return

on the main page 
create a new funcrion tp hold new info
const addOne = note => {
    let note={
    id: date.now <-- id allows a specific identefyer
    title: note.title
    body: note.body
}
setThing([... notes, newNote]) <-- this spreads a state holders params from above
}

<cpmtnt addnew={addnewthing}/> <--- this tells wher it will be used but doesnt call>

on the form page
for submit 
const submit = event => {
    event.preventDefault()
    props.newthing(thing)
    setone({title, ''})
    bring in props. thing from main
}
this would be used on the <form> begining 
<form onsubmit={submit}>