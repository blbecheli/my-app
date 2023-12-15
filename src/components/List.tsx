import Image from "next/image"
import prisma from "@/db"



const List = async () => {   

    return (
        <div className="h-full flex flex-col my-10 m-auto border-solid rounded bg-sky-100 w-[70vw]">
            <div className="flex m-2">
                <div>
                    <Image src="/images/people.svg" alt="Teste" width={50} height={50} className="rounded-full" />
                </div>
                <div className="mx-3">
                    <p>People Test</p>
                    <span>Email</span>
                </div>
            </div>
            <div className="mx-auto my-2 h-[50vh] w-[50vw] bg-cover bg-contain bg-no-repeat bg-center relative" style={{ backgroundImage: 'url("/images/image1.svg")' }}>
                <div className="flex bg-black bg-opacity-50 text-white absolute bottom-0 m-auto w-[50vw] rounded-b-md">
                    <div className="flex">
                        <Image src="/images/chat.svg" alt="Favorite" width={32} height={32} />
                        <span>5</span>
                    </div>
                    <div className="fill-red-700 flex">
                        <Image src="/images/fav.svg" alt="Favorite" width={32} height={32} className="fill-red-700" />
                        <span>12</span>
                    </div>
                </div>
            </div>          
        </div>
    )
}
export default List
