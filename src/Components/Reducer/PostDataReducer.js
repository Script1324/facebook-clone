export const PostDataReducer = (state,action) =>{
   
    switch(action.type){
            case "SET_POSTDATA" :
                      return{
                        ...state,
                        postData:action.payload
                      }
            case "LIKE_POST" : 
                    return{
                      ...state,
                      postData: state.postData.map((post)=>{
                          if(post.id == action.payload){
                              return {...post,like:post.like + 1}
                          }else{
                             return post
                          }
                      })
                    }

            default: return state;
     }
}