import { useState } from "react"






export default function Inquiry() {

    const[formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        location: '',
        area: '',
        scope: '',
        type: '',
        designScope: 'all',
        parts: ''
    })

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value})
    }

    const inputClass = "w-full bg-cream/[0.06] border border-cream/[0.12] rounded-lg px-4 py-3 text-cream text-sm outline-none focus:border-cream/30 focus:bg-cream/[0.09] transition-all duration-300 placeholder:text-cream/15"
    const labelClass= 'text-cream/40 text-[11px] tracking-widest uppercase'

    return (
        <section id="inquiry" className="bg-[#111a12] px-6 py-20 md:px-16">
            <div className="max-w-3xl">
                {/* header */}
                <div className="mb-12">
                    <p className="text-green-md text-xs tracking-widest uppercase mb-4 flex items-center gap-3">
                        <span className="w-6 h-[0.5px] bg-green-md"/>
                        Inquiry
                    </p>
                    <h2 className="text-cream text-4xl font-medium tracking-tight mb-3">
                        Tell me about <br />your project
                    </h2>
                    <p className="text-cream/40 text-sm leading-relaxed">
                        Fill in the details below and I'll get back to you within 72 hours.
                    </p>
                </div>
                {/* about client */}
                <p className="text-cream/25 text-[11px] tracking-widest uppercase mb-6">About you</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-6">
                    <div className="flex flex-col gap-2">
                        <label className={labelClass}>Your name</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className={labelClass}>Email address</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className={labelClass}>Phone number</label>
                        <input type="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className={labelClass}>Where do you live?</label>
                        <input name="location" value={formData.location} onChange={handleChange} className={inputClass} />
                    </div>
                </div>

                <div className="h-[0.5px] bg-brown-md/15 my-8 " />

                {/* about the project */}
                <p className="text-cream/25 text-[11px] tracking-widest uppercase mb-6">About your project</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-6">
                    <div className="flex flex-col gap-2">
                        <label className={labelClass}>Project area (m²)</label>
                        <input type="location" name="area" value={formData.area} onChange={handleChange} className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className={labelClass}></label>
                        <input type="location" name="email" value={formData.location} onChange={handleChange} className={inputClass} />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className={labelClass}>Project scope</label>
                        <select name="scope" value={formData.scope} onChange={handleChange}
                        className="w-full bg-cream/[0.06] border border-cream/[0.12] rounded-lg px-4 py-3 text-cream/50 text-sm outline-none focus:border-cream/30 transition-all duration-300">
                            <option value="" disabled>Select one</option>
                            <option value="renovation">Renovation</option>
                            <option value="cunstruction">Construction</option>
                            <option value="decoration">Interior decoration</option>
                        </select>
                    </div>
                </div>

                {/* project type */}
                <div className="flex flex-col gap-3 mb-8">
                    <label className={labelClass}>Project type</label>
                    <div className="flex flex-wrap gap-2">
                        {['residential', 'commercial', 'office', 'other'].map(type => (
                            <button
                                key={type} 
                                onClick={() => setFormData({...formData, type})}
                                className={` px-4 py-2 text-xs rounded-full border transition-colors duration-300 cursor-pointer
                                    ${formData.type ===type
                                        ? 'border-brown-md text-cream bg-brown/40'
                                        : 'border-brown-md/25 text-cream/35 hover:border-brown-md/50 hover:text-cream/60'
                                    }
                                `}
                            >
                            {type}

                            </button>
                        ))}
                    </div>

                </div>
                <div className="h-[0.5px] bg-brown-md/15 my-8" />
                {/* Dessign scope */}
                <p className="text-cream/25 text-[11px] tracking-widest uppercase mb-6">Design scope</p>
                <div className="flex flex-col gap-3 mb-6">
                    <label  className={labelClass}>Would you like to design all of your space or some parts?</label>
                    <div className="flex flex-wrap gap-2">
                        {['all' , 'parts'].map (val => (
                            <button
                                key={val}
                                onClick={() => setFormData({ ...formData, designScope: val })}
                                className={`px-4 py-2 text-xs rounded-full border transition-colors duration-300 cursor-pointer
                                    ${formData.designScope === val
                                        ? 'border-brown-md text-cream bg-brown/40'
                                        : 'border-brown-md/40 text-cream/35 hover:border-brown-md/50 hover:text-cream/60'

                                    }`}
                            >
                                {val === 'all' ? 'All of the space' : 'Some parts'}
                            </button>
                        ))}
                    </div>
                </div>
                {/* some parts field */}
                {formData.designScope === 'parts' && (
                    <div className="flex flex-col gap-2 mb-8">
                        <label className={labelClass}>Please specify which parts / how many m² roughly</label>
                        <input type="text" name='parts' value={formData.parts} onChange={handleChange } className={inputClass} />
                    </div>
                )}

                {/* Submit */}
                <div className="flex justify-end mt-12">
                  <button className="border border-brown-md/50 text-cream text-sm px-8 py-3 rounded hover:bg-brown-md/20 transition-colors duration-300 cursor-pointer">
                    Send inquiry →
                  </button>
                </div>
            </div>
        </section>
    )
}