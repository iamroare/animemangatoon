// ->for registering a user in app
// POST-> localhost:3000/api/auth/register
// {
//     "username":"example",
//     "password":"asdf"
// }

// for logging in user& for getting access token
// POST->locahost:3000/api/auth/login
// {
//     "username":"example",
//     "password":"asdf"
// }



// NOTE , YOU NEED TO GIVE ACCESS TOKEN FOR DOING ALL API OPERATIONS in 'auth'->'bearer'


//for getting all cats
// GET->localhost:3000/api/catperson/getAll

//for adding a cat data
// POST-> localhost:3000/api/catperson/addCatData
// ->in json body
// {
//     "name":"catName",
//     "bread":"catBread",
//     "details":"catDetails"
//   }


// for updating cat data
// PUT-> localhost:3000/api/catperson/updateCat/:cat_id
// {
    //     "name":"catName",
    //     "bread":"catBread",
    //     "details":"catDetails"
    //   }



// for deleting whole cat data by id
// DELETE ->localhost:3000/api/catperson/deleteById/:id





// table creation for catmeow
// -- Table: public.catmeow

// -- DROP TABLE IF EXISTS public.catmeow;

// CREATE TABLE IF NOT EXISTS public.catmeow
// (
//     id integer NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 2147483647 CACHE 1 ),
//     name character varying(255) COLLATE pg_catalog."default",
//     bread character varying(255) COLLATE pg_catalog."default",
//     details character varying(255) COLLATE pg_catalog."default",
//     CONSTRAINT catmeow_pkey PRIMARY KEY (id)
// )

// TABLESPACE pg_default;

// ALTER TABLE IF EXISTS public.catmeow
//     OWNER to postgres;




// table creation for userInfo
// -- Table: public.user

// -- DROP TABLE IF EXISTS public."user";

// CREATE TABLE IF NOT EXISTS public."user"
// (
//     username character varying(255) COLLATE pg_catalog."default" NOT NULL,
//     password character varying(255) COLLATE pg_catalog."default" NOT NULL,
//     CONSTRAINT "PK_78a916df40e02a9deb1c4b75edb" PRIMARY KEY (username)
// )

// TABLESPACE pg_default;

// ALTER TABLE IF EXISTS public."user"
//     OWNER to postgres;