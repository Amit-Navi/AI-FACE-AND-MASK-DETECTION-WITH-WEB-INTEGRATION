const express = require("express")
const users = require("./mongo")
const app = express()
const cors = require("cors")
const multer = require("multer")

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
})

app.post("/login", async (req, res) => {
    const { email, pass } = req.body;
    const user = await users.findOne({ email: email })

    if (!user) {
        return res.status(404).json({
            success: false,
            message: "Invalid Details"
        })
    }
    if (user.password == pass) {
        return res.status(200).json({
            success: true,
            message: "Successfully Logged In"
        })
    }
    else {
        return res.status(404).json({
            success: false,
            message: "Invalid Password"
        })
    }
})

app.post("/create", async (req, res) => {
    const { email, pass } = req.body
    console.log(email, pass);

    const check = await users.findOne({ email: email })

    if (check) {
        res.json("exist")
    }

    await users.create({
        email: email,
        password: pass
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    })
})

const upload = multer({ storage: storage });

app.post("/addImage", upload.single("image"), async (req, res) => {
    console.log("Hello")
    res.status(200).send({
        success: true,
        message: "Successfully Uploaded to folder",
      });
})

const port = 8000;
app.listen(8000, () => {
    console.log("port connected on" + `${port}`);
})