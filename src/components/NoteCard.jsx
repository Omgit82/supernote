import React from 'react';

const NoteCard = ({ title = "Sample Query", content = "This is a sample response from LLM. You can save any response here." }) => {
  return (
    <div style={{
      backgroundColor: '#f5f5f5',
      borderRadius: '12px',
      padding: '16px',
      marginBottom: '16px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
    }}>
      <h3 style={{ marginBottom: '8px', color: '#333' }}>{title}</h3>
      <p style={{ color: '#555', whiteSpace: 'pre-wrap' }}>{content}</p>
    </div>
  );
};

export default NoteCard;
