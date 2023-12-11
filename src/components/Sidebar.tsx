import Image from "next/image"

const Sidebar = () => {
    return (
        <div className="border-r-2 border-gray-200 w-[20vw] flex flex-col content-between justify-between my-5 mx-auto h-[80vh]">
            <div className="flex">
                <Image src="/images/explorer.svg" alt="Logo" width={32} height={32} />
                <span>Find</span>
            </div>
            <div className="flex">
                <Image src="/images/message.svg" alt="Logo" width={32} height={32} />
                <span>Mensages</span>
            </div>
            <div className="flex">
                <Image src="/images/video.svg" alt="Video" width={32} height={32} />
                <span>Videos</span>
            </div>
            <div className="flex">
                <Image src="/images/suport.svg" alt="Suport" width={32} height={32} />
                <span>Suport</span>
            </div>
            <div className="flex">
                <Image src="/images/settings.svg" alt="Settings" width={32} height={32} />
                <span>Settings</span>
            </div>
           
        </div>
    )
}
export default Sidebar