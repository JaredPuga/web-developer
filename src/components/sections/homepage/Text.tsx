
const Name = () => {
    return (
        <h2 className="text-6xl font-ubuntu text-brand1 ml-4">Sinan</h2>
    )
}

export const Text = () => {

    const texth1 = '<h1>'
    const texth1end = '</h1>'
    const textp = '<p>'
    const textpend = '</p>'

  return (
    <div className="flex flex-col gap-8 w-3/5">
        <div className="flex flex-col">
            <h3 className="text-sm font-IBM text-brand2">{texth1}</h3>
            <div className="flex flex-col">
                <h2 className="text-6xl font-ubuntu">Hey</h2>
                <h2 className="flex text-6xl font-ubuntu">I'm {<Name />},</h2>
                <h2 className="text-6xl font-ubuntu">Full-Stack Developer</h2>
            </div>
            <h3 className="text-sm font-IBM text-brand2">{texth1end}</h3>
        </div>
        <div>
            <h3 className="text-sm font-IBM text-brand2">{textp}</h3>
            <p className="font-IBM text-base px-6">I help business grow by crafting amazing web experiences. If you're looking for a developer that likes to get stuff done,</p>
            <h3 className="text-sm font-IBM text-brand2">{textpend}</h3>
        </div>
        <div className="flex w-64 items-center gap-4">
            <h2 className="text-3xl text-brand1 font-IBM">Let's Talk</h2>
            <img src="/mail.svg" className="w-9 p-2 bg-gray-700 rounded-full"/>
        </div>
    </div>
  )
}
