import { Image, Input, Button } from "@nextui-org/react";
import Link from "next/link";

const FriendsDetails = (props) => {
    return (
        <div>
            <div className="flex flex-col sm:flex-row sm:justify-center">
                <div className="flex justify-center sm:mr-4">
                    <Image
                        width={300}
                        height={200}
                        alt="NextUI hero Image with delay"
                        src={props.friendsDetails?.image}
                    />
                </div>
                <div className="flex flex-col justify-center mt-4 content-center ml-4 sm:ml-0">
                    <Input
                        isReadOnly
                        type="text"
                        label="Name"
                        variant="bordered"
                        defaultValue={props.friendsDetails?.name}
                        className="max-w-xs mb-4"
                    />
                    <Input
                        isReadOnly
                        type="text"
                        label="Email"
                        variant="bordered"
                        defaultValue={props.friendsDetails?.email}
                        className="max-w-xs mb-4"
                    />
                    <Input
                        isReadOnly
                        type="text"
                        label="User since"
                        variant="bordered"
                        defaultValue={props.date}
                        className="max-w-xs"
                    />
                </div>
            </div>
            <Link href={"/painel/friends"}>
                <div className="flex justify-center mt-4">
                    <Button color="warning">
                        Return
                    </Button>
                </div>
            </Link>
        </div>
    )
}
export default FriendsDetails