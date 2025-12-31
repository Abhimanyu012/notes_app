import { Note } from "../models/note.model.js";

export const getAllNotes = async (req, res) => {
        try {
            const notes = await Note.find().sort({createdAt:-1})
            res.status(200).json(notes);
        } catch (error) {
            console.log("Error in getAllNotes controller", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
};
export const getOneNote = async (req, res) => {
        try {
            const notes = await Note.findById(req.params.id);
         
            res.status(200).json({message:"note found successfully",Note:notes})
        } catch (error) {
            console.log("Error in getOneNote controller", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
};

export const createNote = async (req, res) => {
        try {
            const { title, content } = req.body;
            const newNote = new Note({ title, content });
            const savednote = await newNote.save();
            res.status(201).json({ message: "New note created successfully", Note: savednote });
        } catch (error) {
            console.log("Error in createNote controller", error);
            res.status(500).json({ message: "Internal Server Error" });
        }
};

export const updateNotes =async (req, res) => {
    try {
        const{title,content}=req.body
        const id = req.params.id
        const updatedNote =  await Note.findByIdAndUpdate(id,{title,content},{new:true})
        res.status(200).json({ message: " note updated successfully", Note: updatedNote });
        console.log(updatedNote.title)
       
    } catch (error) {
            console.log("Error in updateNotes Controller", error);
            res.status(500).json({ message: "Internal Server Error" });
    }

};

export const deleteNotes = async (req, res) => {
   try {
     const id = req.params.id
     const deletedNote = await Note.findByIdAndDelete(id,{new:true})
     if(!deletedNote)return res.status(404).json({message:"Note not found"})
   res.status(200).json({ message: "Note deleted Successfully " });

   } catch (error) {
        console.log("Error in deleteNotes Controller", error);
            res.status(500).json({ message: "Internal Server Error" });
   }
};
