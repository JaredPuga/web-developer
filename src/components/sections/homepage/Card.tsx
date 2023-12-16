
export const Card = () => {
  return (
    <div className="flex flex-col rounded-customR p-6 border-white border-4 shadow-custom gap-8 mt-3 w-80 font-IBM">
        <div className="flex items-center justify-center">
            <img src="/dev.png" alt="dev-img" className="w-24 rounded-full border-2 border-brand1"/>
        </div>
        
        <div className="flex justify-center flex-col items-center">
            <h2 className="text-3xl font-IBM font-medium">Sinan</h2>
            <h3 className="text-sm">Full-stack developer</h3>
        </div>
        <div>
            <p>abdurraham_sinan@hotmail.com</p>
            <p>Turkey</p>
            <p>Full-time / Freelancer</p>
            <p>www.sinantokmak.com</p>
        </div>
        <div className="flex items-center justify-between ">
            <div className="bg-brand1 text-black rounded-lg px-2">HTML</div>
            <div className="bg-brand1 text-black rounded-lg px-2">CSS</div>
            <div className="bg-brand1 text-black rounded-lg px-2">JS</div>
            <div className="bg-brand1 text-black rounded-lg px-2">REACT</div>
        </div>
        <button className="flex items-center justify-center gap-2 rounded-3xl bg-white px-4 py-3 w-4/5 text-black font-ubuntu"><p>Download CV</p> <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAABNElEQVR4nO2ZQWrDMBBFn3zKLpJco9sJ3XRRsmqg0N4kR+qqtPspAhWMsNtmoSBr/oMBQZSg/zOej20QQgghhBDi1kzAvlReh+MAeKlsQjhsZkBeh8NkAOoA1yWAZoBrCKIUMAJiSgGUAq4UQCngSgGUAkZALEIKPABfwBOQrjAg7z2V7x7ZMJ8zkS+VCWsGpLL357MPNsxpJqQ2YcmAWryX7tksCXiuBL2Vh6C1AXnvudr7OsID07RiwrEyYEjx/NLa7yvrpXkxBGmhE5ZqqH/+WhOGFv+XCSHEr5kQSvzchLtSww28IZk6f5vb/HyHzt/mNj+fdX772vx8JgNQB7guATQDXEMQpYARPAYvwH1ndbmlAd55NTFg34Gw/9auhQFT+eHHzmvX6c2aEEIIIYSgJ74B3kFEPhtJVX8AAAAASUVORK5CYII=" alt="download-ico" className="w-5" ></img></button>
    </div>
  )
}
