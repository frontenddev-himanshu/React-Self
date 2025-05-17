// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router"

const GitHub = () => {

    const data = useLoaderData()

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/frontenddev-himanshu')
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // }, [])


    return (
        <>
            <div className="bg-red-600 text-[#fff] font-bold text-5xl text-center">Github Followers:{data.followers}</div>

            <img src={data.avatar_url} alt="git picture" className="h-[200px]" />
        </>
    )
}

export default GitHub

export const githubInfoLoader = async () => {
   const response =  await  fetch('https://api.github.com/users/frontenddev-himanshu')

   return response.json()
}