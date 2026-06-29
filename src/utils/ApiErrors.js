class ApiErrors extends Error{
   constructor( 
      statusCode ,
      message =  "Something went wrong", 
      errors = [],
      statck = ""
   ){
       super(message)
       this.statusCode = statusCode
       this.errors = errors;
       this.data = null
       this.message = message
       this.success = false;

     //check if the error trace stack is available
       if(statck){
             this.stack = statck;
       } 
       else {
            
            Error.captureStackTrace(this , this.constructor);
       }
   }


}

export {ApiError}