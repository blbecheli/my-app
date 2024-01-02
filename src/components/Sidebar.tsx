import Image from "next/image";
import Link from "next/link";
import login from "@/hook/login";

const Sidebar = async () => {
    const loginUser = await login();

    if (loginUser?.id == null) {
        return (<div className="w-[20vw]"></div>)
    }

    return (
        <div className="border-r-2 border-gray-200 w-[90vw] sm:w-[20vw] flex sm:flex-col content-between justify-between my-5 mx-auto sm:h-[80vh] m-auto">
            <div className="flex sm:flex-col sm:mx-auto">
                <Image src="/images/explorer.svg" alt="Logo" width={32} height={32} className="flex justify-center"/>
                <span className="hidden sm:inline" >Find</span>
            </div>
            <div className="flex sm:flex-col sm:mx-auto p-0">
                <Link href="/messages">
                    <Image src="/images/message.svg" alt="Logo" width={32} height={32} className="flex justify-center m-auto" />
                    <span className="hidden sm:inline">Messages</span>
                </Link>
            </div>
            <div className="flex sm:flex-col sm:mx-auto">
                <Link href="/add">
                    <Image src="/images/add.svg" alt="Add" width={32} height={32}  />
                    <span className="hidden sm:inline">Add</span>
                </Link>
            </div>
            <div className="flex sm:flex-col sm:mx-auto">
                <Image src="/images/suport.svg" alt="Support" width={32} height={32} className="m-auto"  />
                <span className="hidden sm:inline">Support</span>
            </div>
            <div className="flex sm:flex-col sm:mx-auto">
                <Image src="/images/settings.svg" alt="Settings" width={32} height={32} className="m-auto"/>
                <span className="hidden sm:inline">Settings</span>
            </div>
        </div>
    );
};

export default Sidebar;
