import { create } from "zustand"

export const useChatStore = create((set) => ({
    messages: JSON.parse(localStorage.getItem("messages")) || [],

    addMessage: (message) => set((state) => {
        const newMessages = [...state.messages, message]
        localStorage.setItem("messages", JSON.stringify(newMessages))
        return { messages: newMessages }
    }),

    clearMessages: () => set(() => {
        localStorage.removeItem("messages")
        return { messages: [] }
    })
}))
