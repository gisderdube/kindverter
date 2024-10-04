import Convert from './Convert'

export default function Home() {
  return (
    <div className="container max-w-[800px] mx-auto">
      <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold">Kindverter v2</h1>
        </div>
        <p className="text-lg text-center">
          Need help communicating effectively? Kindverter is here to assist! Choose from our diverse
          categories - love, tinder, professional, child, or riddle - and let us rephrase your thoughts.
          Whether you're navigating a delicate conversation with your partner, crafting the perfect Tinder
          message, preparing for a professional interaction, simplifying complex ideas for children, or even
          creating engaging riddles, Kindverter has got you covered. Transform your words into more effective,
          appropriate, and impactful communication for any situation.
        </p>

        <Convert />
      </div>
    </div>
  )
}
