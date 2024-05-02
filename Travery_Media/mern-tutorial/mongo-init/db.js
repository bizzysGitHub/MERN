conn = new Mongo();
db = conn.getDB("Goals");

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

// db.goals.insert({ title:"2st todo", description:"just testing ", completed:"", createAt:""});

