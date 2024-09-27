import React from "react"
import UseStateHook from "./components/useStateHook"
import UseStateHook_with_object from "./components/UseStateHook_with_object"
import Title from "./components/Title"
import UseRefHook from "./components/UseRefHook"
import UseRefHook_as_Reference from "./components/UseRefHook_as_Reference"
import UseEffectHook from "./components/UseEffectHook"
import UseMemoHook from "./components/UseMemoHook"
import UseCallbackHook from "./components/UseCallbackHook"
import UseContextHook from "./components/UseContextHook"
import Profile from "./components/Profile"
import ComponentForContextHook from "./components/ComponentForContextHook"
import Contact from "./Contact"


function App() {


  return(
    <div>
      <Title title="useState Hook"/>
      <UseStateHook/>
      <hr />
      <Title title="useState Hook as an object"/>
      <UseStateHook_with_object/>
      <hr />
      <Title title="useEffect Hook"/>
      <UseEffectHook/>
      <hr />
      <Title title="useRef Hook"/>
      <UseRefHook/>
      <hr />
      <Title title="useRef Hook to access DOM element"/>
      <UseRefHook_as_Reference/>
      <hr />
      <Title title="useMemo Hook"/>
      <UseMemoHook/>
      <hr />
      <Title title="useCallback Hook"/>
      <UseCallbackHook/>
      <hr />
      <Title title="useContext Hook"/>
      <UseContextHook/>
      <Profile/>
      <ComponentForContextHook/>
      <Contact/>
      <hr />
      <Title title="useCustom Hook"/>
      <hr />


    </div>
  )

}
export default App
