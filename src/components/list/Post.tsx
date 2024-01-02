'use client'

import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Image, Avatar } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { pt } from "date-fns/locale";

export default function Post(props) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [user, setUser] = useState();
    const [isFollowed, setIsFollowed] = React.useState(false);

    useEffect(() => {
        const isFriendOrCurrentUser = props.getIdFriendArray && props.getIdFriendArray.includes(props.postIdUser) || props.postIdUser === props.loginUser;
        setUser(isFriendOrCurrentUser);
        setIsFollowed(isFriendOrCurrentUser);
    }, [props.getIdFriendArray, props.postIdUser, props.loginUser]);

    // const delFriends = (event) => {
    //     const formData = new FormData(event.target)
    //     props.delFriends(formData).catch((error: any) => {
    //         console.log(error);
    //     })
    // }

    // const addFriends = (event) => {
    //     const formData = new FormData(event.target)
    //     props.addFriends(formData).catch((error: any) => {
    //         console.log(error);
    //     })
    // }

    return (
        <>
            <Button onPress={onOpen}>See details</Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <div className="flex justify-between">
                                    <div>
                                        <Avatar isBordered src={props.postUserImage} />
                                        <p className="text-sm">{props.postName}</p>
                                    </div>
                                    <form>
                                        {props.loginUser &&
                                            <Button
                                                className={isFollowed ? "bg-transparent text-foreground border-default-200" : ""}
                                                color="primary"
                                                radius="full"
                                                size="sm"
                                                variant={isFollowed ? "bordered" : "solid"}
                                                onPress={() => {
                                                    setIsFollowed(!isFollowed);
                                                    if (isFollowed) {
                                                        props.delFriends(props.loginUser);
                                                    } else {
                                                        props.addFriends(props.postIdUser, props.loginUser);
                                                    }
                                                }}
                                            >
                                                {isFollowed ? "Unfollow" : "Follow"}
                                            </Button>
                                        }
                                    </form>
                                </div>
                            </ModalHeader>
                            <ModalBody>
                                <Image
                                    width={300}
                                    height={100}
                                    alt={props.postTitle}
                                    src={props.postImage}
                                />
                                <div>
                                    <p className="text-lg font-bold">{props.postTitle}</p>
                                    <p>{props.postContent}</p>
                                </div>
                            </ModalBody>
                            <hr />
                            <ModalFooter className="flex flex-col">
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
