"use client"

import { useEffect, useState } from "react"
import { MoonLoader } from "react-spinners"
import { convertText } from "./actions"

const Convert = () => {
  const [text, setText] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState("")

  useEffect(() => {
    setResult("")
  }, [text])

  async function handleSubmit() {
    setIsSubmitting(true)
    const rephrasedText = await convertText(text)
    setResult(rephrasedText || "")
    setIsSubmitting(false)
  }

  return (
    <div className='w-full flex flex-col gap-4'>
      <textarea
        className='w-full p-2 border border-gray-300 rounded-md resize-vertical -mt-12 text-black'
        rows={4}
        placeholder='Type or paste your text...'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {isSubmitting ? (
        <div className='flex items-center justify-center'>
          <MoonLoader color='#fff' />
        </div>
      ) : (
        <button
          onClick={handleSubmit}
          disabled={!text}
          className={`text-white px-4 py-2 rounded-md ${
            text ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Convert
        </button>
      )}
      {result && (
        <div>
          <h3 className='text-lg font-bold'>Your result:</h3>
          {result.split("---").map((r, i) => (
            <div className='my-2 flex gap-2' key={i}>
              <p className='font-bold text-nowrap'>Version {i + 1}</p>
              <p className='' key={r}>
                {r}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Convert
