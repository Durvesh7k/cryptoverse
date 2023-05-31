


const App = () => {
  const [query, setQuery] = useState('');


  return (
    <>
      <div className="p-10" >
        
        <div className="flex justify-center mt-4">
          <form className="grid gap-3">
            <input
              placeholder="Enter The crypto name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={e => {
                setQuery(e.target.value)
              }}
            />
          </form>
        </div>
        <CryptoApi
          coin={query} />

        <div className="grid gap-6 justify-center mt-2">
          <div className="flex justify-center">
            <img src={dscImage} alt='logo_image'  className="w-20" />
          </div>
        </div>



      </div>
    </>
  )
}

export default App;