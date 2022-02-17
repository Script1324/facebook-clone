export const PostDataReducer = (state,action) =>{
   
    switch(action.type){
            case "SET_POSTDATA" :
                      return{
                        ...state,
                        postData:action.payload
                      }

            default: return state;
     }
}