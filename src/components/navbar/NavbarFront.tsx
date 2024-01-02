'use client'

import { Navbar, Button, NavbarBrand, NavbarContent, NavbarItem, Link, Input, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar, Image } from "@nextui-org/react";
import { useState, useContext, useEffect } from "react";
import UserContext from "../context/userContext";
import Cookies from "js-cookie";


export default function NavbarFront(props) {
    const [searchInput, setSearchInput] = useState('');

    const { idUser, setIdUser } = useContext(UserContext)
    console.log("idUser: ", idUser);

    useEffect(() => {
        const userIdFromCookie = Cookies.get("userid");
        if (userIdFromCookie) {
            setIdUser(userIdFromCookie);
        }
    }, [setIdUser]);



    const handleSearch = () => {
        const formData = new FormData();
        formData.append('searchInput', searchInput);
        props.handleSearch(formData).catch((error: any) => {
            console.log(error);
        });
    };

    return (
        <Navbar isBordered className="h-fit flex items-start mb-4 mt-2 pt-2 pb-5">
            <div className="sm:flex w-[90vw]">
            <NavbarContent justify="start" className="flex align-top items-start">
                <Link href="/">
                    <NavbarBrand className="mr-4 w-[90vw] sm:w-[20vw] flex justify-center !important">
                        <Image
                            width={100}
                            alt="NextUI hero Image"
                            src="/images/logo.png"
                        />
                    </NavbarBrand>
                </Link>
            </NavbarContent>
            {!idUser || idUser== null ? (
                <NavbarContent>
                    <Link href="/register">
                        <Button color="primary">
                            SigIn
                        </Button>
                    </Link>
                    <Link href="/login">
                        <Button color="success">
                            LogIn
                        </Button>
                    </Link>
                </NavbarContent>
            ) : (
                <NavbarContent as="div" className="items-center" justify="end">
                    <Input
                        classNames={{
                            base: "max-w-full sm:max-w-[10rem] h-10",
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                        }}
                        placeholder="Type to search..."
                        size="sm"
                        type="search"
                        name="searchInput"
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <Button color="primary" variant="ghost" size="sm" onClick={handleSearch}>
                        Search
                    </Button>
                    <Dropdown placement="bottom-end">
                        <DropdownTrigger>
                            <Avatar
                                isBordered
                                as="button"
                                className="transition-transform"
                                color="secondary"
                                name={props.loginUser?.name}
                                size="sm"
                                src={props.loginUser?.image}
                            />
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Profile Actions" variant="flat">
                            <DropdownItem key="profile" className="h-14 gap-2">
                                <p className="font-semibold">Signed in as</p>
                                <p className="font-semibold">{props.loginUser?.email}</p>
                            </DropdownItem>
                            <DropdownItem key="settings"><Link href="/painel/profile">Profile</Link></DropdownItem>
                            <DropdownItem key="team_settings"><Link href="/messages/inbox">Inbox</Link></DropdownItem>
                            <DropdownItem key="configurations">Settings</DropdownItem>
                            <DropdownItem key="logout" color="danger">
                                <Link href="/logout">Log Out</Link>
                            </DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                </NavbarContent>
            )}
            </div>
        </Navbar>
    );
}