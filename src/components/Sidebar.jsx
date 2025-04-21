import React, { useState } from 'react';
import { useNotes } from '../context/NotesContext';

const Sidebar = () => {
  const { folders, selectedFolder, setSelectedFolder, addFolder } = useNotes();
  const [newFolder, setNewFolder] = useState("");

  const handleAdd = () => {
    if (newFolder.trim() && !folders.includes(newFolder)) {
      addFolder(newFolder);
      setSelectedFolder(newFolder);
      setNewFolder("");
    }
  };

  return (
    <div style={{
      width: '250px',
      backgroundColor: '#1e1e2f',
      color: '#fff',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <h2 style={{ marginBottom: '20px' }}>📁 Folders</h2>

      {folders.map((folder, idx) => (
        <div
          key={idx}
          onClick={() => setSelectedFolder(folder)}
          style={{
            padding: '10px',
            backgroundColor: selectedFolder === folder ? '#33334d' : 'transparent',
            marginBottom: '8px',
            borderRadius: '8px',
            cursor: 'pointer',
          }}
        >
          {folder}
        </div>
      ))}

      <div style={{ marginTop: 'auto' }}>
        <input
          type="text"
          value={newFolder}
          onChange={(e) => setNewFolder(e.target.value)}
          placeholder="New folder name"
          style={{
            padding: '8px',
            width: '100%',
            marginBottom: '10px',
            borderRadius: '6px',
            border: 'none',
            outline: 'none'
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            padding: '8px',
            backgroundColor: '#00bfff',
            color: '#000',
            borderRadius: '6px',
            cursor: 'pointer',
            width: '100%',
            fontWeight: 'bold',
            border: 'none'
          }}
        >
          ➕ Add Folder
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
