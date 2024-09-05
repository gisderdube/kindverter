import Convert from "./Convert"

export default function Home() {
  return (
    <div className='container max-w-[800px] mx-auto'>
      <div className='flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-4xl font-bold'>Kindverter</h1>
        </div>
        <p className='text-lg text-center'>
          Are you mad at your partner? Don&apos;t just vent everything, this might cause your partner to
          leave you! Instead, use kindverter to rephrase your thoughts in a nicer way. This will result
          in your partner still loving you after your discussion.
        </p>
        <div className='w-full'>
          <p className='text-lg mb-1 text-left'>Enter your text here:</p>
        </div>
        <Convert />
      </div>
    </div>
  )
}
