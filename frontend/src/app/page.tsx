"use client"
import { useState } from "react"

export default function Home() {
  const [view, setView] = useState<"home" | "menu" | "order">("home")

  const coffeeMenu = [
    { id: 1, name: "Espresso"  },
    { id: 2, name: "Americano" },
 
  ]

  return (
    <div className="min-h-screen bg-violet-800 flex flex-col items-center text-white">
      <h1 className="text-5xl mt-10 font-bold text-amber-300">Coffee Deerhack</h1>

      {view === "home" && (
        <div className="flex flex-col gap-6 mt-12">
          <button
            onClick={() => setView("menu")}
            className="bg-amber-300 px-8 py-3 rounded-xl font-bold text-black hover:bg-amber-500"
          >
            View Menu
          </button>
          <button
            onClick={() => setView("order")}
            className="bg-amber-300 px-8 py-3 rounded-xl font-bold text-black hover:bg-amber-500"
          >
            Order Coffee
          </button>
        </div>
      )}

      {view === "menu" && (
        <div className="mt-10 w-full max-w-md bg-white text-black p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Menu</h2>
          <ul className="space-y-3">
            {coffeeMenu.map((item) => (
              <li
                key={item.id}
                className="flex justify-between border-b pb-2"
              >
                <span>{item.name}</span>
             
              </li>
            ))}
          </ul>
          <button
            onClick={() => setView("home")}
            className="mt-6 bg-violet-700 text-white px-6 py-2 rounded-lg hover:bg-violet-900"
          >
            Back
          </button>
        </div>
      )}

      {view === "order" && (
        <div className="mt-10 w-full max-w-md bg-white text-black p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-4">Order Coffee</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border p-2 rounded"
            />

            <select className="border p-2 rounded">
              <option>Select Coffee</option>
              {coffeeMenu.map((item) => (
                <option key={item.id}>{item.name}</option>
              ))}
            </select>

            <select className="border p-2 rounded">
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>

            <input
              type="number"
              placeholder="Quantity"
              min="1"
              className="border p-2 rounded"
            />

            <button
              type="submit"
              className="bg-amber-400 px-6 py-2 rounded-lg font-bold hover:bg-amber-500"
            >
              Submit Order
            </button>
          </form>

          <button
            onClick={() => setView("home")}
            className="mt-6 bg-violet-700 text-white px-6 py-2 rounded-lg hover:bg-violet-900"
          >
            Back
          </button>
        </div>
      )}
    </div>
  )
}