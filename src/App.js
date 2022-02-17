import Header from "./Components/Header";
import MainContents from "./Components/MainContents";
import Login from "./Components/Login";
import { UseProvider } from "./Components/StateProvider/StateProvider";
import "./Styles/App.css"

function App() {

  const {user,darkmode} = UseProvider()

  

  return (
    <div className={darkmode? "App active" : "App"}>

        {user == null ? <Login/> : <> 
            <Header/>
            <MainContents/>
        </>
           
        }
         

      
  
    </div>
  );
}

export default App;
