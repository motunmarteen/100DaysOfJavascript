let family = {
    father : "Motun",
    mother : "Yetunde",
    daughter: "Ateeyah",
    son : "Azfar",
    another : "noname",
    "like foods" : true
}

alert(family.son)
alert(family.daughter)
alert(family.father)
alert(family.mother)
alert(family.another)

family.admin = true // Admin can be added this way
alert(family.admin)

delete (family.another) // how to delete things in object
alert(family.another)

alert(family["like foods"]) // This is how to access multi words key in a javascript object
