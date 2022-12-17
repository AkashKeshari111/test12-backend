const {Router}=require("express");
const {JobPostingModel}=require("../Model/JobPosting.model")

const app=Router();



app.get("/joblist",async(req,res)=>{
       
      let {
        page = 1,
        limit = 10,
        sortBy = "id",
        order = "asc",
      } = req.query;
      try {
        
         const list = await JobPostingModel.find().skip((page - 1) * limit).limit(limit).sort({ [sortBy]: order === "asc" ? 1 : -1 });
        
        const count = await JobPostingModel.find().count();
        // console.log(count)
        res.status(200).send({ data: list, totalPages: Math.ceil(count / limit)});
      } catch (err) {
        res.status(500).send(err);
      }

})

app.post("/jobpost",async(req,res)=>{
    const {
        company,
		city,
		location,
		role,
		level,
		contract,
		position,
		language

    } = req.body;
      
    try {
      const post = new JobPostingModel({
        company,
		city,
		location,
		role,
		level,
		contract,
		position,
		language
      });
      await post.save();
      res.status(201).send({ msg: "Job added successfully" });
    } catch (err) {
      res.send(err);
    }
})



module.exports=app;