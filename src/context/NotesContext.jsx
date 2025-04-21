import React, { createContext, useContext, useState, useEffect } from 'react';

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState('General');
  const [notes, setNotes] = useState({});

  // Load data from localStorage
  useEffect(() => {
    const savedFolders = JSON.parse(localStorage.getItem('folders')) || ['General'];
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || { General: [] };

    setFolders(savedFolders);
    setNotes(savedNotes);
    setSelectedFolder(savedFolders[0]); // Set default folder to first one
  }, []);

  // Save data to localStorage whenever folders or notes change
  useEffect(() => {
    if (folders.length > 0) {
      localStorage.setItem('folders', JSON.stringify(folders));
    }
    if (Object.keys(notes).length > 0) {
      localStorage.setItem('notes', JSON.stringify(notes));
    }
  }, [folders, notes]);

  const addFolder = (name) => {
    if (!folders.includes(name)) {
      const updatedFolders = [...folders, name];
      setFolders(updatedFolders);
      setNotes((prevNotes) => ({ ...prevNotes, [name]: [] }));
    }
  };

  const addNote = (title, content) => {
    const newNote = { title, content, timestamp: Date.now() };
    const updatedNotes = {
      ...notes,
      [selectedFolder]: [newNote, ...notes[selectedFolder]],
    };
    setNotes(updatedNotes);
  };

  const contextValue = {
    folders,
    selectedFolder,
    setSelectedFolder,
    addFolder,
    notes: notes[selectedFolder] || [],
    addNote,
  };

  return (
    <NotesContext.Provider value={contextValue}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
