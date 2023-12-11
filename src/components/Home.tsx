import List from "./List"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"

const HomePage = () => {
  return (
    <div className="h-full">      
      <div className="flex">
        <Sidebar />
        <List />
      </div>

    </div>
  )
}
export default HomePage