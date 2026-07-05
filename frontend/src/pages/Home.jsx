const Home = () => {
  return (
    <section className="w-full min-h-screen bg-zinc-800 p-16 grid grid-cols-4 items-start gap-6">
      
     <div className="bg-zinc-700 p-2 rounded-md text-white">
        <div className="rounded-md overflow-hidden  object-cover">
          <img className="w-full h-full" src="https://cdn.prod.website-files.com/6634a8f8dd9b2a63c9e6be83/669f6041b0e078c4adcc7eea_blogging-ideas.jpeg" alt="" />
        </div>
        <h2 className="text-xl mt-3 mb-3">This is my First Blog</h2>
        <p className="text-sm text-zinc-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, ducimus!</p>
        <button className="mt-3 px-4 py-2 bg-zinc-500 rounded-full">Read More</button>
      </div>
      <div className="bg-zinc-700 p-2 rounded-md text-white mb-3">
        <div className="rounded-md overflow-hidden  object-cover">
          <img className="w-full h-full" src="https://cdn.prod.website-files.com/6634a8f8dd9b2a63c9e6be83/669f6041b0e078c4adcc7eea_blogging-ideas.jpeg" alt="" />
        </div>
        <h2 className="text-xl mt-5">This is my First Blog</h2>
        <p className="text-sm text-zinc-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, ducimus!</p>
        <button className="mt-3 px-4 py-2 bg-zinc-500 rounded-full">Read More</button>
      </div>
      <div className="bg-zinc-700 p-2 rounded-md text-white">
        <div className="rounded-md overflow-hidden  object-cover">
          <img className="w-full h-full" src="https://cdn.prod.website-files.com/6634a8f8dd9b2a63c9e6be83/669f6041b0e078c4adcc7eea_blogging-ideas.jpeg" alt="" />
        </div>
        <h2 className="text-xl mt-5">This is my First Blog</h2>
        <p className="text-sm text-zinc-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui, ducimus!</p>
        <button className="mt-3 px-4 py-2 bg-zinc-500 rounded-full">Read More</button>
      </div>

    </section>
  )
}

export default Home