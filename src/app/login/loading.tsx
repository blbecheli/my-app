import {CircularProgress} from "@nextui-org/react";

const loading = () => {
  return (
    <div className="flex gap-4">      
      <CircularProgress size="lg" aria-label="Loading..."/>
    </div> 
  )
}
export default loading