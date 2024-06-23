const mongoose =require("mongoose");
const Schema=mongoose.Schema;

const listingSchema =new Schema({
    title: {
        type:String,
        required:true,
    },
    description:String,
    image:{
        url: {
           type:String,
          default: "https://media.istockphoto.com/id/610041376/photo/beautiful-sunrise-over-the-sea.jpg?s=2048x2048&w=is&k=20&c=NoPnfdrs0M_5uTkY2t8usRzC_5MBRAJCzs9MOIaaENg=",
           set:(v) =>
                 v ==="" 
           ? "https://media.istockphoto.com/id/610041376/photo/beautiful-sunrise-over-the-sea.jpg?s=2048x2048&w=is&k=20&c=NoPnfdrs0M_5uTkY2t8usRzC_5MBRAJCzs9MOIaaENg=" 
           : v,
       }
    },
    price:Number,
    location:String,
    country:String,
});

const Listing=mongoose.model("Listing",listingSchema);
module.exports=Listing;

