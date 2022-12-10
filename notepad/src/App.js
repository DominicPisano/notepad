import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Route, Link, useParams} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Notes}/>
      <Route path="/notes" component={Notes}/>
      <Route path="/add" component={AddNote}/>
      <Route path="/view/:id" component={ViewNote}/>
      <Route path="/edit/:id" component={EditNote}/>
    </Router>
  );
}

export default App;

//was going to make this for a home page but decided to use the notes page as the home page instead
function Home () {
    return (
      <div>
        <h3>Home</h3>
      </div>
    );
}

function Notes() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    fetch('/notes')
      .then(response => response.json())
      .then(data => {
        setNotes(data);
      });
  }, []);

  function remove(id) {
    fetch(`/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      let updatedNotes = [...notes].filter(i => i.id !== id);
      setNotes(updatedNotes);
    });
  }

  const noteList = notes.map(note => {
    return <tr id="list">
      <td id="listTitle">{note.title}</td>
      <td id="listButtons">
        <Link to={`/view/${note.id}`}><button className="buttonGroup">View</button></Link>
        <Link to={`/edit/${note.id}`}><button className="buttonGroup">Edit</button></Link>
        <button onClick={() => remove(note.id)} className="buttonGroup">Delete</button>
      </td>
    </tr>
  });

  return (
    <div id="div">
      <h3>Notes</h3>
      <Link to="/add"><button>New Note</button></Link>
      {noteList}
    </div>
  );
}

function AddNote () {
  const [note, setNote] = useState({});
  function addNote() {
    fetch('/notes', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    }).then(() => {
      window.location.href = "/notes";
    });
  }

  const onChange = e => {
    const val = e.target.value;
    setNote({...note, [e.target.name]: val});
  }

  return (
    <div id="div">
      <h3>Add Note</h3>
      <form id="div">
        <label for="title">Title</label>
        <br></br>
        <input type="text" name="title" id="title" value={note.title || ''} onChange={onChange} autoComplete="title"/>
        <br></br>
        <label for="content">Content</label>
        <br></br>
        <textarea type="text" name="content" id="content" value={note.content || ''} onChange={onChange} autoComplete="content"/>
      </form>
      <p>
        <Link to="/notes"><button>Cancel</button></Link>
        <button onClick={addNote} type="reset">Save</button>
      </p>
    </div>
  );
}

function ViewNote() {
  let {id} = useParams();
  const [note, setNote] = useState({});
  useEffect(() => {
      fetch(`/notes/${id}`)
          .then(response => response.json())
          .then(data => {
              setNote(data);
          });
  }, []);

  function remove(id) {
    fetch(`/notes/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
      window.location.href = "/notes";
    });
  }

  return (
    <div id="div">
      <p id="viewTitle">{note.title}</p>
      <textarea id="content" value={note.content || ''} readOnly></textarea>
      <p>
        <Link to="/notes"><button>Back</button></Link>
        <button onClick={() => remove(note.id)}>Delete</button>
        <Link to={`/edit/${note.id}`}><button>Edit</button></Link>
      </p>
    </div>
  );
}

function EditNote() {
  let {id} = useParams();
  const [note, setNote] = useState({});
  useEffect(() => {
    fetch(`/notes/${id}`)
      .then(response => response.json())
      .then(data => {
        setNote(data);
      });
  }, []);
  
  function updateNote() {
    fetch(`/notes/${id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    }).then(() => {
      window.location.href = "/notes";
    });
  }

  const onChange = e => {
    const val = e.target.value;
    setNote({...note, [e.target.name]: val});
  }

  return (
    <div id="div">
      <h3>Edit Note</h3>
      <form id="div">
        <label for="title">Title:</label>
        <br></br>
        <input type="text" name="title" id="title" value={note.title || ''} onChange={onChange} autoComplete="title"/>
        <br></br>
        <label for="content">Content:</label>
        <br></br>
        <textarea type="text" name="content" id="content" value={note.content || ''} onChange={onChange} autoComplete="content"/>
        <br></br>
      </form>
      <p>
        <Link to="/notes"><button>Cancel</button></Link>
        <button onClick={updateNote} type="reset">Save</button>
      </p>
      
    </div>
  );
}