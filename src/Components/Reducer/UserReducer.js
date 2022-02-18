export const UserReducer = (state,action) =>{
            switch(action.type){
                case "SET_USER": 
                return{
                     user: action.payload   
                }
                case "LOG_OUT":
                    return{
                     user:null
                    }
            default : return state
           
        }
}