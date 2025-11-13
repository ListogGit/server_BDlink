export default(err,req,res,next) => {
    console.error(err);
    res.status(err.status || 500).json
   { meassge:err.meassge || 'Internal Server Error'
}

}