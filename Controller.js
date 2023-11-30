import Employee_schema from "./emp.model.js";

export async function addEmployee(req, res) {
  try {
    const { ...Details } = req.body;
    res.status(201).send(Employee_schema.create({ ...Details }));
  } catch (error) {
    res.status(404).send(error);
  }
}
