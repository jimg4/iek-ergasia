import {createGlobalState} from "react-hooks-global-state";

const {setGlobalState,useGlobalState}=createGlobalState({
  products:[]
})

export {useGlobalState,setGlobalState}