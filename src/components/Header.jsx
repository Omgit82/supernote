import React, { useState } from 'react';
import { useNotes } from '../context/NotesContext';

const Header = () => {
  const [query, setQuery] = useState("");
  const { addNote } = useNotes();

  const handleSave = () => {
    if (query.trim()) {
      const title = query.split('\n')[0].slice(0, 50); // first line as title
      addNote(title, query);
      setQuery("");
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Paste your LLM response here..."
        style={{
          width: '100%',
          height: '100px',
          padding: '12px',
          fontSize: '16px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          resize: 'none'
        }}
      />
      <button
        onClick={handleSave}
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        💾 Save Note
      </button>
    </div>
  );
};

export default Header;
