import { useState, useEffect } from 'react';
import { firestore } from './config/firebase-config';
import { collection, addDoc, getFirestore, getDocs } from 'firebase/firestore';
import './App.css';
import './input-animations.css';

const App = () => {

  const [placeholder, setPlaceholder] = useState("Insira sua mensagem");
  const [inputText, setInputText] = useState('');

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const db = getFirestore();
  const messageColletionRef = collection(db, "messages");
  const timestamp = new Date().toLocaleString();
  const newMessages = [...messages, { text: newMessage, time: timestamp }];

  const handleFocus = () => {
      setPlaceholder("Mensagem");
  };

  const handleBlur = (e) => {
    console.log(e.target.value);
      if (e.target.value === "") {
          setPlaceholder("Insira sua mensagem");
      }
  };

  useEffect(() => {
    const getMessages = async () => {
      const dataList = await getDocs(messageColletionRef)
      setMessages(dataList.docs.map((doc) => ({...doc.data(), id: doc.id})));
    };

    getMessages();
  }, []);


  const handleSendMessage = async () => {
    
    setMessages(newMessages);
    setNewMessage('');
    try {
      await addDoc(messageColletionRef, {
        text: newMessage,
        time: timestamp        
      });
    } catch (error) {
      console.error("Erro ao salvar a mensagem no Firestore:", error);
    }
    setPlaceholder("Insira sua mensagem");
  };

  const handleInputChange = (event) => {
    setInputText(event.target.value);
    setNewMessage(event.target.value);
  };

  return (
    <div className="container">
      <div className='superior-box'>
        <div className="header">
          <img src="logo.png"/>
        </div>
        <div className="new-message">
          <h3>Digite um texto abaixo</h3>
          <input
            type="text"
            placeholder={placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={newMessage}
            onChange={handleInputChange}
          />
          
        </div>
        <div className="box-button">
          <button onClick={handleSendMessage} disabled={!inputText}>Enviar</button>
        </div>
      </div>
      <div className="message-list">
        <h3>Mensagens enviadas</h3>
        {messages.map((message, index) => (
          <div key={index} className="message">
            <p>{message.text}</p>
            <span>{message.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
