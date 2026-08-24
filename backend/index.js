import express from "express";

const app = express();
app.use(express.json());

 const db = []

app.post("/", async (req, res) => {
    try{
          const {email, password}=req.body

    if(!email || !password) {
        return res.json({msg: "email and password are required"})
    }
        const User = {email, password};
            db.push(User);
    res.json({msg: "User created sucessfully"})
    } catch {
        res.status(500).json({msg: "Internal Server Error"})
    }
});

app.post("/login", async (req, res) => {
    try {
        const {email, password} = req.body;
    const existingUser = db.find(user => user.email === email && user.password == password);

    if (!existingUser) {
        return res.status(401).json({msg: "Invalid Credetial"})
    }
    res.status(200).json({msg: "Login sucessfully"})
} catch {
    res.status(500).json({error: "Internal Server Error" })
}
});

app.listen(8080, () => {
    console.log("app is listining on 8080")
})