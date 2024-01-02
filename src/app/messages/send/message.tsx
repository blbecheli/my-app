'use client'
import Link from "next/link";
import { useState } from "react";
import { Autocomplete, AutocompleteItem, Textarea, Button } from "@nextui-org/react";

const Message = (props) => {
    const [friend, setFriend] = useState('')
    const [idFriend, setIdFriend] = useState('')
    console.log(friend)

    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.target)
        props.handleMessage(formData).catch((error: any) => {
            console.log(error);
        })
    }

    return (
        <div className="w-[90vw] ml-[5vw] m-auto">
            <h2>Write a message</h2>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <div className="flex flex-col w-full flex-wrap md:flex-nowrap gap-4">
                    <Autocomplete
                        label="Select a friend"
                        className="max-w-xs"
                    >
                        {props.friendDetailsArray.map((friend, index) => (
                            <AutocompleteItem key={index} value={friend.name} id={friend.id} onClick={() => { setFriend(friend.name); setIdFriend(friend.id) }}>
                                {friend.name}
                            </AutocompleteItem>
                        ))}
                    </Autocomplete>
                    <input type="text" value={friend} name="friend" className="visibility: hidden" />
                    <input type="text" value={idFriend} name="friendId" className="visibility: hidden" />
                    <Textarea
                        label="Message"
                        placeholder="Write a message"
                        className="max-w-xs"
                        name="content"
                    />
                    <Button color="primary" type="submit" className="w-[30px]">
                        Send
                    </Button>
                </div >

            </form>

        </div>

    )
}
export default Message



{/* <label>To:
<select name="friend" value={friend} onChange={(e) => setFriend(e.target.value)}>
    {props.friendDetailsArray.map((friend, index) => (
        <option key={index} value={friend.id}>
            {friend.name}
        </option>
    ))}
</select>
</label>
<label className="flex flex-col">Message:
<textarea name="content"></textarea>
</label>
<div>
<input type="Submit" />
<Link href="/messages">Return</Link>
</div> */}



