function Contact()
{
    return(

      <div className="relative isolate bg-violet-200 px-6 py-24 sm:py-32 lg:px-8">

  {/* Background Shape */}
  <div
    aria-hidden="true"
    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
  >
    <div
      style={{
        clipPath:
          "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
      }}
      className="relative left-1/2 -z-10 w-[600px] max-w-none -translate-x-1/2 rotate-12 bg-gradient-to-tr from-violet-400 to-purple-500 opacity-30 sm:w-[900px]"
    ></div>
  </div>

  {/* Heading */}
  <div className="mx-auto max-w-2xl text-center">
    <h2 className="text-4xl font-semibold text-black sm:text-5xl">
      Contact Sales
    </h2>
  </div>

  {/* Form */}
  <form
    onSubmit={(e) => {
      e.preventDefault();
      console.log("Form Submitted");
    }}
    className="mx-auto mt-16 max-w-xl sm:mt-20"
  >
    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

      {/* First Name */}
      <div>
        <label className="block text-sm font-semibold text-black">
          First name
        </label>
        <input
          type="text"
          className="mt-2 w-full rounded-md bg-white px-3 py-2 text-gray-900 border border-violet-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 focus:outline-none caret-violet-600"
        />
      </div>

      {/* Last Name */}
      <div>
        <label className="block text-sm font-semibold text-black">
          Last name
        </label>
        <input
          type="text"
          className="mt-2 w-full rounded-md bg-white px-3 py-2 text-gray-900 border border-violet-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 focus:outline-none caret-violet-600"
        />
      </div>

      {/* Email */}
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold text-black">
          Email
        </label>
        <input
          type="email"
          className="mt-2 w-full rounded-md bg-white px-3 py-2 text-gray-900 border border-violet-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 focus:outline-none caret-violet-600"
        />
      </div>

      {/* Phone */}
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold text-black">
          Phone number
        </label>
        <div className="mt-2 flex rounded-md bg-white border border-violet-300 focus-within:ring-2 focus-within:ring-violet-500 focus-within:border-violet-500">
          <select className="bg-transparent px-3 py-2 text-gray-700 focus:outline-none">
            <option>IND</option>
            <option>US</option>
            <option>CA</option>
            <option>EU</option>
          </select>
          <input
            type="text"
            placeholder="123-456-7890"
            className="w-full bg-transparent px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none caret-violet-600"
          />
        </div>
      </div>

      {/* Message */}
      <div className="sm:col-span-2">
        <label className="block text-sm font-semibold text-black">
          Message
        </label>
        <textarea
          placeholder="Enter your message..."
          rows="4"
          className="mt-2 w-full rounded-md bg-white px-3 py-2 text-gray-900 border border-violet-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 focus:outline-none caret-violet-600"
        ></textarea>
      </div>

      {/* Checkbox */}
      <div className="sm:col-span-2 flex items-center gap-3">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-violet-400 text-black focus:ring-violet-500"
        />
        <label className="text-sm text-black">
          By selecting this, you agree to our{" "}
          <span className="text-black font-semibold">
            privacy policy
          </span>.
        </label>
      </div>

    </div>

    {/* Button */}
    <div className="mt-10">
      <button
        type="submit"
        className="w-full rounded-md bg-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-violet-500 focus:ring-2 focus:ring-violet-500"
      >
        Send message
      </button>
    </div>

  </form>
</div>
    )
}

export default Contact;



