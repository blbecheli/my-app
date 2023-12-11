"use client"; // Isso é um componente do cliente


export default function Page() { 

  return (
    <div className="w-[100vw] flex flex-col">
      <h3 className="text-center">Ready to amplify your story? ...</h3>
      <div>
        <form  className="flex flex-col w-[70%] m-auto">
          <label className="flex flex-col">
            Title
            <input name="title" type="text" className="border-zinc-500 border-2 rounded-md mt-1" />
          </label>
          <label className="flex flex-col">
            Tell us a little about your picture
            <textarea name="description" cols={30} rows={10} className="border-zinc-500 border-2 rounded-md mt-1"></textarea>            
          </label>
          <label className="flex flex-col">
            Link to your picture
            <input type="text" name="link" className="border-zinc-500 border-2 rounded-md mt-1" />
          </label>
          <input type="submit" value="Publish" />

        </form>
      </div>
    </div>
  );
}
