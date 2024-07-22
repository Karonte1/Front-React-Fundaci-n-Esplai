function YourAccount() {
  
  return (
    <>
      <h2 className="text-2xl font-bold mt-8">Tus datos</h2>
      <form>
        <input type="text" placeholder="Nombre..." value="Ivan" />
        <input type="text" placeholder="Email..." value="ivluengo@gmail.com" />
      </form>
    </>
  )
}

export default YourAccount;