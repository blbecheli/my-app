'use client'

import { Card, CardHeader, CardBody, CardFooter, Image, Button, Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/react";
import Link from "next/link";
import Post from "./Post";


function ListFront(props: any) {
  return (
    <div className="sm:w-[80vw] gap-5 grid grid-cols-7 grid-rows-2 px-8 m-auto">
      {props.post.map((post: any) => (
        <Card key={post.id} isFooterBlurred className="w-[100%] sm:w-[70vw] h-[300px] col-span-7 sm:col-span-7 flex p-0 m-auto">
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src={post.image}
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Image
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="/images/breathing-app-icon.jpeg"
              />
              <div className="flex self-center items-center self-center">
                <div className="flex flex-col justify-between mr-4">
                  <Avatar isBordered color="default" size="sm" src={post.user.image} />
                  <p className="text-tiny text-white/60 mt-2">{post.user.name}</p>
                </div>
                <p className="text-sm text-white/60">{post.title}</p>
              </div>
            </div>
            <Post postId={post.id} postImage={post.image} postTitle={post.title} postContent={post.content} postName={post.user.name} postUserImage={post.user.image} addFriend={props.addFriend} addFriends={props.addFriends} postIdUser={post.idUser} loginUser={props.loginUser} getIdFriendArray={props.getIdFriendArray} delFriends={props.delFriends} />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
export default ListFront