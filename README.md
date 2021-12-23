# API SPEC
## 1.Register
Router ini terhubung dengan register di MongoDb. Hanya role yang dapat memiliki akses di website ini.
*Endpoint : /register
Request :
{
    "name": "string",
    "email": "string",
    "no_hp": "Number",
    "password": "string",
    "gender": "string",
    "role" : "string"
}

## 2.Login
Router ini terhubung dengan login di MongoDb. Hanya role yang dapat memiliki akses di website ini.
*Endpoint : /login
Request :
    {
    "email": "string",
    "password": "string"
    }

## 3.Tim Kami Collection

| Judul    | Tipe     | Deskripsi                                                                   |
| -------- | -------- | --------------------------------------------------------------------------- |
| _id      | ObjectId | ID Tim Kami dibuat secara otomatis oleh MongoDB saat admin menambahkan data |
| nama     | string   | Nama dari Tim Kami                                                          |
| deskripsi| string   | Deskripsi mengenai anggota tim                                              |
| posisi   | string   | Jabatan/posisi di dalam tim                                                 |
| gambar   | string   | Foto dari anggota tim                                                       |

a. Create Tim Kami
Router ini terhubung dengan Tim Kami collection di mongoDB.

Request :

*Method : POST
*Endpoint : /tim/add-tim
*Header :
+Tipe konten : application/json
+Accept: application/json
*Body :
 
 {
    "nama" : "string",
    "deskripsi" : "string",
    "posisi" : "string",
    "gambar" : "string"

}

*Response :

{
    "message": "tim added",
    "result": {
        "nama": "string",
        "deskripsi": "string",
        "posisi": "string",
        "gambar": "string",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date"

    }
}

b. Read All Tim Kami
Router ini terhubung ke Tim Kami collection di MongoDB. user dengan admin dan role dapat membaca Tim Kami.

Request :

*Method : GET
*Endpoint : /tim
*Header :
+Accept: application/json
*Response :

"result": {
        "nama": "string",
        "deskripsi": "string",
        "posisi": "string",
        "gambar": "string",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date"

    }

c. Read by Id Tim Kami
Router ini terhubung ke Tim Kami collection di MongoDB. user dengan admin dan role dapat membaca Tim Kami berdasarkan Id.

Request :

*Method : GET
*Endpoint : /tim/:id
*Header :
+Accept: application/json
*Response :

"result": {
        "nama": "string",
        "deskripsi": "string",
        "posisi": "string",
        "gambar": "string",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date"

    }

d. Update Tim Kami
Router ini terhubung ke Tim Kami collection di MongoDB. hanya role admin yang dapat update data Tim Kami berdasarkan Id.
Request :

*Method : PATCH
*Endpoint : /edit-tim/:id
*Header :
+Content-Type: application/json
+Accept: application/json
*Body :

{
    "nama" : "string",
    "deskripsi" : "string",
    "posisi" : "string",
    "gambar" : "string"

}

*Response :

{
    "message": "tim updated"
}

e. Delete Tim Kami
Router ini terhubung ke Tim Kami collection di MongoDB. hanya role admin yang dapat delete data Tim Kami berdasarkan Id.
Request :

*Method : DELETE
*Endpoint : /delete-tim/:id
*Header :
Accept: application/json

*Respone :

{
    "message": "tim deleted"
}

## 4. Webinar Collection

| Judul    | Tipe     | Deskripsi                                                                   |
| -------- | -------- | --------------------------------------------------------------------------- |
| _id      | ObjectId | ID Artikel dibuat secara otomatis oleh MongoDB saat admin menambahkan data |
| judul    | string   | Judul tentang webinar                                                           |
| deskripsi| string   | Deskripsi webinar                                                           |
| gambar   | string   | Foto dari webinar                                                           |

a. Create Webinar
Router ini terhubung dengan webinar collection di mongoDB.

Request :

*Method : POST
*Endpoint : /webinar/add-webinar
*Header :
+Tipe konten : application/json
+Accept: application/json
*Body :
 
 {
    "judul" : "string",
    "deskripsi" : "string",
    "gambar" : "string"

}

*Respone :

{
    "message": "webinar added",
    "result": {
        "judul": "string",
        "deskripsi": "string",
        "gambar": "string",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date",
        "__v": 0
    }
}

b. Read All Webinar
Router ini terhubung ke webinar collection di MongoDB. user dengan admin dan role dapat melihat info webinar.

Request :

*Method : GET
*Endpoint : /webinar
*Header :
+Accept: application/json
*Response :

{
        "_id": "ObjectId",
        "judul": "string",
        "deskripsi": "string",
        "gambar": "string",
        "createdAt": "Date",
        "updatedAt": "Date"
}

c. Read by Id webinar
Router ini terhubung ke webinar collection di MongoDB. user dengan admin dan role dapat melihat webinar berdasarkan Id.

Request :

*Method : GET
*Endpoint : /webinar/:id
*Header :
+Accept: application/json
*Response :

{
        "_id": "ObjectId",
        "judul": "string",
        "deskripsi": "string",
        "gambar": "string",
        "createdAt": "Date",
        "updatedAt": "Date"
}

d. Update webinar
Router ini terhubung ke webinar collection di MongoDB. hanya role admin yang dapat update data webinar berdasarkan Id.
Request :

*Method : PATCH
*Endpoint : /edit-webinar/:id
*Header :
+Content-Type: application/json
+Accept: application/json
*Body :

{
    "judul" : "string",
    "deskripsi" : "string",
    "gambar" : "string"

}

*Respone :

{
    "message": "webinar updated"
}

e. Delete webinar
Router ini terhubung ke webinar collection di MongoDB. hanya role admin yang dapat delete data webinar berdasarkan Id.
Request :

*Method : DELETE
*Endpoint : /delete-webinar/:id
*Header :
Accept: application/json

*Respone :

{
    "message": "webinar deleted"
}

## 5. Artikel Collection

| Judul    | Tipe     | Deskripsi                                                                   |
| -------- | -------- | --------------------------------------------------------------------------- |
| _id      | ObjectId | ID Artikel dibuat secara otomatis oleh MongoDB saat admin menambahkan data  |
| judul    | string   | Judul tentang artikel                                                       |
| deskripsi| string   | Deskripsi artikel                                                           |
| gambar   | string   | Foto dari artikel                                                           |

a. Create Artikel
Router ini terhubung dengan artikel collection di mongoDB.

Request :

*Method : POST
*Endpoint : /artikel/add-artikel
*Header :
+Tipe konten : application/json
+Accept: application/json
*Body :
 
 {
    "judul" : "string",
    "deskripsi" : "string",
    "gambar" : "string"

}

*Respone :

{
    "message": "artikel added",
    "result": {
        "judul": "string",
        "deskripsi": "string",
        "gambar": "string",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date",
        "__v": 0
    }
}

b. Read All Artikel
Router ini terhubung ke artikel collection di MongoDB. user dengan admin dan role dapat melihat info artikel.

Request :

*Method : GET
*Endpoint : /artikel
*Header :
+Accept: application/json
*Response :

{
        "_id": "ObjectId",
        "judul": "string",
        "deskripsi": "string",
        "gambar": "string",
        "createdAt": "Date",
        "updatedAt": "Date"
}

c. Read by Id artikel
Router ini terhubung ke artikel collection di MongoDB. user dengan admin dan role dapat melihat artikel berdasarkan Id.

Request :

*Method : GET
*Endpoint : /artikel/:id
*Header :
+Accept: application/json
*Response :

{
        "_id": "ObjectId",
        "judul": "string",
        "deskripsi": "string",
        "gambar": "string",
        "createdAt": "Date",
        "updatedAt": "Date"
}

d. Update artikel
Router ini terhubung ke artikel collection di MongoDB. hanya role admin yang dapat update data artikel berdasarkan Id.
Request :

*Method : PATCH
*Endpoint : /edit-artikel/:id
*Header :
+Content-Type: application/json
+Accept: application/json
*Body :

{
    "judul" : "string",
    "deskripsi" : "string",
    "gambar" : "string"

}

*Respone :

{
    "message": "artikel updated"
}

e. Delete artikel
Router ini terhubung ke artikel collection di MongoDB. hanya role admin yang dapat delete data artikel berdasarkan Id.
Request :

*Method : DELETE
*Endpoint : /delete-artikel/:id
*Header :
Accept: application/json

*Respone :

{
    "message": "artikel deleted"
}

## 6. Testimoni Collection

| Judul    | Tipe     | Deskripsi                                                                   |
| -------- | -------- | --------------------------------------------------------------------------- |
| _id      | ObjectId | ID Artikel dibuat secara otomatis oleh MongoDB saat admin menambahkan data  |
| judul    | string   | Judul tentang testimoni                                                     |
| deskripsi| string   | Deskripsi testimoni                                                         |
| video    | string   | video dari user testimoni                                                   |
| problema | string   | masalah dari user testimoni                                                 |

a. Create testimoni
Router ini terhubung dengan testimoni collection di mongoDB.

Request :

*Method : POST
*Endpoint : /testimoni/add-testimoni
*Header :
+Tipe konten : application/json
+Accept: application/json
*Body :
 
 {
    "judul" : "string",
    "deskripsi" : "string",
    "video" : "string",
    "problema" : "string"

}

*Respone :

{
    "message": "testimoni added",
    "result": {
        "judul" : "string",
        "deskripsi" : "string",
        "video" : "string",
        "problema" : "string",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date",
        "__v": 0
    }
}

b. Read All testimoni
Router ini terhubung ke testimoni collection di MongoDB. user dengan admin dan role dapat melihat info testimoni.

Request :

*Method : GET
*Endpoint : /testimoni
*Header :
+Accept: application/json
*Response :

{
        "_id": "ObjectId",
        "judul" : "string",
        "deskripsi" : "string",
        "video" : "string",
        "problema" : "string",
        "createdAt": "Date",
        "updatedAt": "Date"
}

c. Read by Id testimoni
Router ini terhubung ke testimoni collection di MongoDB. user dengan admin dan role dapat melihat testimoni berdasarkan Id.

Request :

*Method : GET
*Endpoint : /testimoni/:id
*Header :
+Accept: application/json
*Response :

{
        "_id": "ObjectId",
        "judul" : "string",
        "deskripsi" : "string",
        "video" : "string",
        "problema" : "string",
        "createdAt": "Date",
        "updatedAt": "Date"
}

d. Update testimoni
Router ini terhubung ke testimoni collection di MongoDB. hanya role admin yang dapat update data testimoni berdasarkan Id.
Request :

*Method : PATCH
*Endpoint : /edit-testimoni/:id
*Header :
+Content-Type: application/json
+Accept: application/json
*Body :

{
    "judul" : "string",
    "deskripsi" : "string",
    "gambar" : "string"

}

*Respone :

{
    "message": "testimoni updated"
}

e. Delete testimoni
Router ini terhubung ke webinar collection di MongoDB. hanya role admin yang dapat delete data webinar berdasarkan Id.
Request :

*Method : DELETE
*Endpoint : /delete-testimoni/:id
*Header :
Accept: application/json

*Respone :

{
    "message": "testimoni deleted"
}

## 7. Komunitas Collection

| Judul    | Tipe     | Deskripsi                                                                   |
| -------- | -------- | --------------------------------------------------------------------------- |
| _id      | ObjectId | ID komunitas dibuat secara otomatis oleh MongoDB saat admin menambahkan data  |
| judul    | string   | Judul tentang komunitas                                                       |
| deskripsi| string   | Deskripsi komunitas                                                           |
| gambar   | string   | Foto dari komunitas                                                           |
| judul_dokumentasi| string| Judul tentang komunitas                                                       |
| desk_dokumentasi|string| Deskripsi komunitas                                                           |
| gambar_dokumentasi| string   | Foto dari komunitas                                                           |

a. Create komunitas
Router ini terhubung dengan komunitas collection di mongoDB.

Request :

*Method : POST
*Endpoint : /komunitas/add-komunitas
*Header :
+Tipe konten : application/json
+Accept: application/json
*Body :
 
 {
    "judul": "string",
    "deskripsi":"string",
    "gambar":"string",
    "judul_dokumentasi":"string",
    "desk_dokumentasi":"string",
    "gambar_dokumentasi":"string"

}

*Respone :

{
    "message": "komunitas added",
    "result": {
        "judul": "string",
        "deskripsi":"string",
        "gambar":"string",
        "judul_dokumentasi":"string",
        "desk_dokumentasi":"string",
        "gambar_dokumentasi":"string",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date",
        "__v": 0
    }
}

b. Read All komunitas
Router ini terhubung ke komunitas collection di MongoDB. user dengan admin dan role dapat melihat info komunitas.

Request :

*Method : GET
*Endpoint : /komunitas
*Header :
+Accept: application/json
*Response :

{
        "_id": "ObjectId",
        "judul": "string",
        "deskripsi":"string",
        "gambar":"string",
        "judul_dokumentasi":"string",
        "desk_dokumentasi":"string",
        "gambar_dokumentasi":"string",
        "createdAt": "Date",
        "updatedAt": "Date"
}

c. Read by Id komunitas
Router ini terhubung ke komunitas collection di MongoDB. user dengan admin dan role dapat melihat komunitas berdasarkan Id.

Request :

*Method : GET
*Endpoint : /komunitas/:id
*Header :
+Accept: application/json
*Response :

{
        "_id": "ObjectId",
        "judul": "string",
        "deskripsi":"string",
        "gambar":"string",
        "judul_dokumentasi":"string",
        "desk_dokumentasi":"string",
        "gambar_dokumentasi":"string",
        "createdAt": "Date",
        "updatedAt": "Date"
}

d. Update komunitas
Router ini terhubung ke komunitas collection di MongoDB. hanya role admin yang dapat update data komunitas berdasarkan Id.
Request :

*Method : PATCH
*Endpoint : /edit-komunitas/:id
*Header :
+Content-Type: application/json
+Accept: application/json
*Body :

{
        "judul": "string",
        "deskripsi":"string",
        "gambar":"string",
        "judul_dokumentasi":"string",
        "desk_dokumentasi":"string",
        "gambar_dokumentasi":"string"

}

*Respone :

{
    "message": "komunitas updated"
}

e. Delete komunitas
Router ini terhubung ke komunitas collection di MongoDB. hanya role admin yang dapat delete data komunitas berdasarkan Id.
Request :

*Method : DELETE
*Endpoint : /delete-komunitas/:id
*Header :
Accept: application/json

*Respone :

{
    "message": "komunitas deleted"
}

## 8. kategori masalah Collection

| Judul    | Tipe     | Deskripsi                                                                   |
| -------- | -------- | --------------------------------------------------------------------------- |
| _id      | ObjectId | ID Artikel dibuat secara otomatis oleh MongoDB saat admin menambahkan data  |
| judul    | string   | Judul tentang kategori masalah                                              |
| deskripsi| string   | Deskripsi kategori masalah                                                  |
| gambar   | string   | Gambar dari kategori masalah                                                |
                                

a. Create kategori masalah
Router ini terhubung dengan kategori masalah collection di mongoDB.

Request :

*Method : POST
*Endpoint : /kategori/add-kategori
*Header :
+Tipe konten : application/json
+Accept: application/json
*Body :
 
 {
    "judul" : "string",
    "deskripsi" : "string",
    "gambar":"string"

}

*Respone :

{
    "message": "kategori masalah added",
    "result": {
        "judul" : "string",
        "deskripsi" : "string",
        "gambar":"string",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date",
        "__v": 0
    }
}

b. Read All kategori masalah
Router ini terhubung ke kategori masalah collection di MongoDB. user dengan admin dan role dapat melihat info kategori masalah.

Request :

*Method : GET
*Endpoint : /kategori
*Header :
+Accept: application/json
*Response :

{
        "_id": "ObjectId",
        "judul" : "string",
        "deskripsi" : "string",
        "gambar":"string",
        "createdAt": "Date",
        "updatedAt": "Date"
}

c. Read by Id kategori masalah
Router ini terhubung ke kategori masalah collection di MongoDB. user dengan admin dan role dapat melihat kategori masalah berdasarkan Id.

Request :

*Method : GET
*Endpoint : /kategori/:id
*Header :
+Accept: application/json
*Response :

{
        "_id": "ObjectId",
        "judul" : "string",
        "deskripsi" : "string",
        "gambar":"string",
        "createdAt": "Date",
        "updatedAt": "Date"
}

d. Update kategori masalah
Router ini terhubung ke kategori masalah collection di MongoDB. hanya role admin yang dapat update data kategori masalah berdasarkan Id.
Request :

*Method : PATCH
*Endpoint : /edit-kategori/:id
*Header :
+Content-Type: application/json
+Accept: application/json
*Body :

{
    "judul" : "string",
    "deskripsi" : "string",
    "gambar" : "string"

}

*Respone :

{
    "message": "kategori masalah updated"
}

e. Delete kategori masalah
Router ini terhubung ke kategori masalah collection di MongoDB. hanya role admin yang dapat delete data kategori masalah berdasarkan Id.
Request :

*Method : DELETE
*Endpoint : /delete-kategori/:id
*Header :
Accept: application/json

*Respone :

{
    "message": "kategori masalah deleted"
}

## 9. admin Collection

| Judul    | Tipe     | Deskripsi                                                                   |
| -------- | -------- | --------------------------------------------------------------------------- |
| _id      | ObjectId | ID Artikel dibuat secara otomatis oleh MongoDB saat admin menambahkan data  |
| name     | string   | nama admin                                                                  |
| email    | string   | email admin                                                                 |
| password | string   | password dari admin                                                         |
| role     | string   | password dari admin                                                         |
                                

a. Create admin
Router ini terhubung dengan admin collection di mongoDB.

Request :

*Method : POST
*Endpoint : /admin/add-users
*Header :
+Tipe konten : application/json
+Accept: application/json
*Body :
 
 {
    "name": "string",
    "email": "string",
    "password": "string",
    "role": "string"

}

*Respone :

{
    "message": "user added",
    "result": {
        "name": "string",
        "email": "string",
        "password": "string",
        "role": "string",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date",
        "__v": 0
    }
}

b. Read All admin
Router ini terhubung ke admin collection di MongoDB. hanya admin dapat melihat info user.

Request :

*Method : GET
*Endpoint : /users
*Header :
+Accept: application/json
*Response :

{
        "_id": "ObjectId",
        "name": "string",
        "email": "string",
        "password": "string",
        "role": "string",
        "createdAt": "Date",
        "updatedAt": "Date"
}

c. Read by Id admin
Router ini terhubung ke admin collection di MongoDB. admin role dapat melihat user berdasarkan Id.

Request :

*Method : GET
*Endpoint : /users/:id
*Header :
+Accept: application/json
*Response :

{
        "_id": "ObjectId",
        "name": "string",
        "email": "string",
        "password": "string",
        "role": "string",
        "createdAt": "Date",
        "updatedAt": "Date"
}

d. Update admin
Router ini terhubung ke admin collection di MongoDB. hanya role admin yang dapat update data user berdasarkan Id.
Request :

*Method : PATCH
*Endpoint : /edit-users/:id
*Header :
+Content-Type: application/json
+Accept: application/json
*Body :

{
        "name": "string",
        "email": "string",
        "password": "string",
        "role": "string"

}

*Respone :

{
    "message": "user updated"
}

e. Delete admin
Router ini terhubung ke user collection di MongoDB. hanya role admin yang dapat delete data user Id.
Request :

*Method : DELETE
*Endpoint : /delete-users/:id
*Header :
Accept: application/json

*Respone :

{
    "message": "user deleted"
}

## 10. Psikolog Collection

| Judul    | Tipe     | Deskripsi                                                                      |
| -------- | -------- | ------------------------------------------------------------------------------ |
| _id      | ObjectId | ID Artikel dibuat secara otomatis oleh MongoDB saat psikolog menambahkan data  |
| name     | string   | nama psikolog                                                                  |
|spesialis | string   | spesialis psikolog                                                             |
| deskripsi| string   | deskripsi dari psikolog                                                        |
|testimoni | string   | testimoni dari psikolog                                                        |
|gambar    | string   | gambar dari psikolog                                   |                           

a. Create psikolog
Router ini terhubung dengan psikolog collection di mongoDB.

Request :

*Method : POST
*Endpoint : /psikolog/add-users
*Header :
+Tipe konten : application/json
+Accept: application/json
*Body :
 
 {
    "name": "string",
    "spesialis": "string",
    "deskripsi": "string",
    "testimoni": "string",
    "gambar": "string"

}

*Respone :

{
    "message": "psikolog added",
    "result": {
        "name": "string",
        "spesialis": "string",
        "deskripsi": "string",
        "testimoni": "string",
        "gambar": "string",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date",
        "__v": 0
    }
}

b. Read All psikolog
Router ini terhubung ke psikolog collection di MongoDB. hanya psikolog dapat melihat info psikolog.

Request :

*Method : GET
*Endpoint : /psikolog
*Header :
+Accept: application/json
*Response :

{
        "_id": "ObjectId",
        "name": "string",
        "spesialis": "string",
        "deskripsi": "string",
        "testimoni": "string",
        "gambar": "string",
        "createdAt": "Date",
        "updatedAt": "Date"
}

c. Read by Id psikolog
Router ini terhubung ke psikolog collection di MongoDB. psikolog role dapat melihat psikolog berdasarkan Id.

Request :

*Method : GET
*Endpoint : /psikologs/:id
*Header :
+Accept: application/json
*Response :

{
        "_id": "ObjectId",
        "name": "string",
        "spesialis": "string",
        "deskripsi": "string",
        "testimoni": "string",
        "gambar": "string",
        "createdAt": "Date",
        "updatedAt": "Date"
}

d. Update psikolog
Router ini terhubung ke psikolog collection di MongoDB. hanya role psikolog yang dapat update data psikolog berdasarkan Id.
Request :

*Method : PATCH
*Endpoint : /edit-psikologs/:id
*Header :
+Content-Type: application/json
+Accept: application/json
*Body :

{
        "name": "string",
        "spesialis": "string",
        "deskripsi": "string",
        "testimoni": "string",
        "gambar": "string"

}

*Respone :

{
    "message": "psikolog updated"
}

e. Delete psikolog
Router ini terhubung ke psikolog collection di MongoDB. hanya role psikolog yang dapat delete data psikolog Id.
Request :

*Method : DELETE
*Endpoint : /delete-psikolog/:id
*Header :
Accept: application/json

*Respone :

{
    "message": "psikolog deleted"
}

## 10. hubungiCollection

| Judul    | Tipe     | Deskripsi                                                                      |
| -------- | -------- | ------------------------------------------------------------------------------ |
| _id      | ObjectId | ID Artikel dibuat secara otomatis oleh MongoDB saat hubungimenambahkan data    |
| email    | string   | nama user                                                                      |
|keluhan   | string   | keluhan dari user                                                              |
                         

a. Create Hubungi Kami 
Router ini terhubung dengan hubungi kami collection di mongoDB.

Request :

*Method : POST
*Endpoint : /hubungi/send-message
*Header :
+Tipe konten : application/json
+Accept: application/json
*Body :
 
 {
    "email": "string",
    "keluhan": "string"

}

*Respone :

{
    "message": "message submitted",
    "result": {
        "email": "string",
        "keluhan": "string",
        "_id": "ObjectId",
        "createdAt": "Date",
        "updatedAt": "Date",
        "__v": 0
    }
}

b. Read All hubungi kami
Router ini terhubung ke hubungicollection di MongoDB. hanya hubungidapat melihat info psikolog.

Request :

*Method : GET
*Endpoint : /hubungi
*Header :
+Accept: application/json
*Response :

{
        "_id": "ObjectId",
        "email": "string",
        "keluhan": "string",
        "createdAt": "Date",
        "updatedAt": "Date"
}

c. Read by Id hubungi kami
Router ini terhubung ke hubungi kami collection di MongoDB. hanya admin role dapat melihat data hubungi kami berdasarkan Id.

Request :

*Method : GET
*Endpoint : /hubungi/:id
*Header :
+Accept: application/json
*Response :

{
        "_id": "ObjectId",
        "email": "string",
        "keluhan": "string",
        "createdAt": "Date",
        "updatedAt": "Date"
}

