import Employee_schema from "./emp.model.js";

export async function addEmployee(req, res) {
  try {
    const { ...Details } = req.body;
    res.status(201).send(Employee_schema.create({ ...Details }));
  } catch (error) {
    res.status(404).send(error);
  }
}

export async function viewEmployee(req, res) {
  let Details = await Employee_schema.find();
  res.status(200).send(Details);
}

export async function deleteEmployee(req,res)
{
  const{id}=req.params;
  const data=Employee_schema.deleteOne({_id:id})
  data.then((resp)=>{
      res.status(200).send(resp)          
  }).catch((error)=>{
      res.status(404).send(error)
  })
}