import { useParams } from "react-router"

const User = () => {

  const {userid} = useParams()

  return (
    <>

        <div className="bg-red-500 text-center py-20 font-extrabold text-5xl text-[#fff]">User:{userid}</div>

    </>
  )
}

export default User