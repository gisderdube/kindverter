'use client'

import { useEffect, useState } from 'react'
import { MoonLoader } from 'react-spinners'
import { convertText } from './actions'

const Convert = () => {
  const [text, setText] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<
    'love' | 'tinder' | 'professional' | 'child' | 'riddle'
  >('love')
  console.log('selectedCategory:', selectedCategory)

  useEffect(() => {
    setResult('')
  }, [text])

  async function handleSubmit() {
    setIsSubmitting(true)
    const rephrasedText = await convertText(text, selectedCategory)
    setResult(rephrasedText || '')
    setIsSubmitting(false)
  }

  const toggleActiveClass = 'bg-blue-500 text-white'
  const toggleInactiveClass = 'border-blue-500 border text-blue-500'

  return (
    <div className="w-full flex flex-col gap-4 ">
      <div className="w-full">
        <p className="text-lg mb-1 text-left">Pick your category:</p>
      </div>
      <div className="flex gap-4">
        <button
          onClick={() => setSelectedCategory('love')}
          className={`${
            selectedCategory === 'love' ? toggleActiveClass : toggleInactiveClass
          } block px-4 py-2 rounded-md`}
        >
          🥰 Love
        </button>
        <button
          onClick={() => setSelectedCategory('tinder')}
          className={`${
            selectedCategory === 'tinder' ? toggleActiveClass : toggleInactiveClass
          } block px-4 py-2 rounded-md`}
        >
          💬 Tinder
        </button>
        <button
          onClick={() => setSelectedCategory('professional')}
          className={`${
            selectedCategory === 'professional' ? toggleActiveClass : toggleInactiveClass
          } block px-4 py-2 rounded-md`}
        >
          💼 Professional
        </button>
        <button
          onClick={() => setSelectedCategory('child')}
          className={`${
            selectedCategory === 'child' ? toggleActiveClass : toggleInactiveClass
          } block px-4 py-2 rounded-md`}
        >
          👶 Child
        </button>
        <button
          onClick={() => setSelectedCategory('riddle')}
          className={`${
            selectedCategory === 'riddle' ? toggleActiveClass : toggleInactiveClass
          } block px-4 py-2 rounded-md`}
        >
          🤔 Riddle
        </button>
      </div>
      <div className="w-full">
        <p className="text-lg mb-1 text-left">Enter your text here:</p>
      </div>
      <textarea
        className="w-full p-2 border border-gray-300 rounded-md resize-vertical  text-black"
        rows={4}
        placeholder="Type or paste your text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSubmit()
          }
        }}
      />

      {isSubmitting ? (
        <div className="flex items-center justify-center">
          <MoonLoader color="#fff" />
        </div>
      ) : (
        <button
          onClick={handleSubmit}
          disabled={!text}
          className={`text-white px-4 py-2 rounded-md ${
            text ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Convert
        </button>
      )}
      {result && (
        <div>
          <h3 className="text-lg font-bold">Your result:</h3>
          {result.split('---').map((r, i) => (
            <div className="my-2 flex gap-2" key={i}>
              <p className="font-bold text-nowrap">Version {i + 1}</p>
              <p className="" key={r}>
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
