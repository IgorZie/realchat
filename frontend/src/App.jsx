import { useEffect, useState } from "react"
import { io } from "socket.io-client"
import { useChatStore } from "./store"

const socket = io("http://localhost:3333");

export function App() {
  const { messages, addMessage, clearMessages } = useChatStore()
  const [message, setMessage] = useState("")

  useEffect(() => {
    socket.on("message", (data) => {
      addMessage(data)
    });

    return () => {
      socket.off("message")
    };
  }, [addMessage]);

  const sendMessage = () => {
    if (message.trim()) {
      socket.emit("message", message)
      setMessage("")
    }
  }

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white items-center justify-center p-6 w-[100vw]">      
      <div className="w-full max-w-2xl flex flex-col h-[90vh] bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="flex justify-between items-center p-4 bg-gray-700">
          <h1 className="text-xl font-bold text-gray-100">Chat em Tempo Real</h1>
          <button
            onClick={clearMessages}
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
          >
            Limpar Chat
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {messages.map((msg, index) => (
            <li
              key={index}
              className="bg-gray-700 p-3 rounded-lg max-w-[80%] text-gray-100 list-none"
            >
              {msg}
            </li>
          ))}
        </div>
        <div className="p-4 bg-gray-700">
          <div className="flex gap-2">
            <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="w-full flex flex-row">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    sendMessage()
                  }
                }}
                placeholder="Digite uma mensagem..."
                className="flex-1 p-3 mr-2 bg-gray-600 border border-gray-500 
                            rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 
                            text-gray-100 placeholder-gray-400 resize-none"
                rows={2}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}