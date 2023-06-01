import Randome from "./randome";
import Search from "./search";
import Categories from "./categories";

const Request = () => {

  return (
    <>
    <h1 className="title-r">Hey!</h1>
    <p className="text-r">Let`s try to find for you:</p>
     <form action="" className="form-r">
     <Randome  /> 
     <Categories  />
     <Search  />
    </form>
    </>
  )
}

export default Request