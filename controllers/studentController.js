import StudentModel from "../models/Student.js"

class studentController {

    // Create
    static createDoc = async (req, res) => {
        try {
            const {name, age, fees} = req.body
            // put data in model
            const data = new StudentModel({
                name: name,
                age: age,
                fees: fees
            })
            // Saving a data
            const result = await data.save()
            res.redirect("/student")
        } catch (error) {
            console.log(error)
        }
    }

    // Read
    static getAllDoc = async (req, res) => {
        try {
            const result = await StudentModel.find()
            res.render("index", {data: result})
        } catch (error) {
            console.log(error)
        }
    }

    // Show Edit Form with Data
    static editDoc = async (req, res) => {
        try {
            const result = await StudentModel.findById(req.params.id)
            res.render("edit", {data: result})
        } catch (error) {
            console.log(error)
        }
    }

    // Update data
    static updateDocById = async (req, res) => {
        // console.log(req.params.id)
        // console.log(req.body)
        try {
            const result = await StudentModel.findByIdAndUpdate(
                req.params.id,
                req.body
            )
            res.redirect("/student")
        } catch (error) {
            console.log(error)
        }
        
    }

    // Delete student details
    static deleteDocById = async (req, res) => {
        // console.log(req.params.id)
        try {
            const result = await StudentModel.findByIdAndDelete(req.params.id)
            res.redirect("/student")
        } catch (error) {
            console.log(error)
        }
        
    }
}

export default studentController