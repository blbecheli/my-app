'use client'

import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, RadioGroup, Radio, Avatar} from "@nextui-org/react";

const colors = ["default", "primary", "secondary", "success", "warning", "danger"];

export default function App({messages}) {
  const [selectedColor, setSelectedColor] = React.useState("default");

  return (
    <div className="flex flex-col gap-3 w-[95vw] m-auto sm:w-[70vw] sm:mt-[5vh]">
      <Table 
        color={selectedColor}
        selectionMode="multiple" 
        defaultSelectedKeys={["2", "3"]} 
        aria-label="Example static collection table"
      >
        <TableHeader>
          <TableColumn>NAME</TableColumn>
          <TableColumn>MESSAGE</TableColumn>
          <TableColumn>DATE</TableColumn>
        </TableHeader>
        <TableBody>
            {messages.map((message)=>(
                <TableRow key={message.id}>
                    <TableCell>
                        <div className="flex">
                        <Avatar src={message.friend.image} className="w-6 h-6 text-tiny"  />
                        {message.friend.name}
                        </div>
                        </TableCell>
                    <TableCell>{message.content}</TableCell>
                    <TableCell>{message.createdAt}</TableCell>
                </TableRow>
                ))
            }          
        </TableBody>
      </Table>
      <RadioGroup 
        label="Color"
        orientation="horizontal"
        value={selectedColor} 
        onValueChange={setSelectedColor}
      >
        {colors.map((color) => (
          <Radio
            key={color}
            color={color}  
            value={color}
            className="capitalize"
          >
            {color}
          </Radio>  
        ))}
      </RadioGroup>
    </div>
  );
}
