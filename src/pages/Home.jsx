import React from 'react';
import Header from '../components/Header';
import NoteCard from '../components/NoteCard';
import { useNotes } from '../context/NotesContext';

const Home = () => {
  const { notes } = useNotes();

  return (
    <div style={{ padding: '20px', flex: 1 }}>
      <Header />
      {notes.length > 0 ? (
        notes.map((note, idx) => (
          <NoteCard key={idx} title={note.title} content={note.content} />
        ))
      ) : (
        <p style={{ color: '#888' }}>No notes yet in this folder.</p>
      )}
    </div>
  );
};

export default Home;
