import mongoose from "mongoose"; 


const connect = (url: string):void => {
  mongoose.connect(url, () => {
    console.log(`Successfully connected to database!`)
  })
}

export default connect;