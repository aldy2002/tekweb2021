# User

## Menampilkan data user


GET: /user

response:
[
    {
        "id"            : "",
        "nama"          : "",
        "nim"           : "",
        "title"         : "",
    },
    ...
]


## Menampilkan data user dengan "id" tertentu


GET: /user/[id]

reponse:
{
        "id"            : "",
        "nama"          : "",
        "nim"           : "",
        "title"         : "",
}


# Menambahkan data pengguna


POST: /user

data:
{
        "nama"          : "",
        "nim"           : "",
        "title"         : "",
}

response:
true    // if success
false   // if failure


## Edit data pengguna


PUT: /user

data:
{
        "id"            : "",
        "nama"          : "",
        "nim"           : "",
        "title"         : "",
}

response:
true    // if success
false   // if failure



## Menghapus data anggota


DELETE: /user/[id]

response:
true    // if success
false   // if failure


## Artikel

## Menampilkan data semua artikel


GET: /article

response:
[
    {
        "id"            : "",
        "judul"         : "",
        "slug"          : "",
        "penulis"       : "",
        "title"         : "",
        "deskripsi      : "",
        "sampul"        : "",
    }
    ....
]


## Menampilkan data artikel dengan id  tertentu


GET: /article/[id]

response:
{
        "id"            : "",
        "judul"         : "",
        "slug"          : "",
        "penulis"       : "",
        "title"         : "",
        "deskripsi      : "",
        "sampul"        : "",
}


## Menambahkan data artikel


POST: /artikel

data:
{       
        "judul"         : "",
        "slug"          : "",
        "penulis"       : "",
        "title"         : "",
        "deskripsi      : "",
        "sampul"        : "",
}

response:
true    // if success
false   // if failure


## Mengedit data artikel


PUT: /article

data:
{      
        "id"            : "",
        "judul"         : "",
        "slug"          : "",
        "penulis"       : "",
        "title"         : "",
        "deskripsi      : "",
        "sampul"        : "",
}

response:
true    // if success
false   // if failure


## Menghapus data artikel


DELETE: /article/[id]

response:
true    // if success
false   // if failure