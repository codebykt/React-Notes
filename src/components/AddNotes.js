import { useState } from "react";

export default function AddNotes({ notes, AddNote }) {
  // const [AddNote] = props;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const updatenotes = (event) => {
    event.preventDefault();
    const Note = { title: title, description: description };

    let temp = [...notes, Note];

    // AddNote(notes => [...notes, Note]);
    AddNote(temp);
    setTitle("");
    setDescription("");


  };

  return (
    <>
      <form className="my-form">
        <label> Add Notes </label>
        <br />

        <table>
          <tbody>
            <tr>
              <td>
                <label>Title:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="title"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Description: </label>
              </td>
              <td>
                <textarea
                  id="description"
                  rows="10"
                  placeholder="Description...."
                  value={description}
                  columns="80"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button
                  type="submit"
                  className="submit"
                  onClick={updatenotes}
                  width="100px"
                  value="submit"
                >Add</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </>
  );
}
