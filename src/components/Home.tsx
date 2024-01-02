import List from "./list/List"
import Navbar from "./navbar/Navbar"
import Sidebar from "./Sidebar"

const HomePage = () => {
  return (
    <div className="h-full">      
      <div className="sm:flex">
        <Sidebar />
        <List />
      </div>

    </div>
  )
}
export default HomePage