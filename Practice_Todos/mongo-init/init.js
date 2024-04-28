

conn = new Mongo();
db = conn.getDB("bizzyDataBase");

db.getSiblingDB('admin').auth(
    process.env.MONGO_INITDB_ROOT_USERNAME,
    process.env.MONGO_INITDB_ROOT_PASSWORD
    );
    db.createUser({
        user: process.env.MONGO_INITDB_ROOT_USERNAME,
        pwd: process.env.MONGO_INITDB_ROOT_PASSWORD,
        roles: ["readWrite"],
    });
    
//insert first record into bizzyDatabase

db.todos.insert({ title:"1st todo", description:"just testing ", completed:"", createAt:""});