//promise method
const asyncHandler = (fn)=>{
  (req , res , next )=> {
        promise.resolve(fn(req , res, next)).catch((err) => next(err))
  }
}
export { asyncHandler};

//using try catch method
/*
 const asynchandler = (fn) => async (req , res , next) =>{
    try{
        await fn(req , res , next);
    }catch(err){
        res.status(err.code || 498).json({
            success: false,
            message : err.message
        })
    }
 }
    */