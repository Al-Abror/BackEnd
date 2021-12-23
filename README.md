# API SPEC
## 1.Register
Router ini terhubung dengan register di MongoDb. Hanya role yang dapat memiliki akses di website ini.
*Endpoint : /register
Request :
name: {
        type: String,
    },
    email: {
        type: String,
    },
    no_hp: {
        type: Number,
    },
    password: {
        type: String,
    },
    gender: {
        type: String,
    },
    role : {
        type: String,
    }
}, timestamps)

## 2.Login
Router ini terhubung dengan login di MongoDb. Hanya role yang dapat memiliki akses di website ini.
*Endpoint : /login
Request :

    email: {
        type: String,
    },
    password: {
        type: String,
    }

## 3.Tim Kami
| Judul | Tipe     | Deskripsi |
| ----- | -------- | --------------------------------------------------------------------------- |
| _id   | ObjectId | ID Tim Kami dibuat secara otomatis oleh MongoDB saat admin menambahkan data |

