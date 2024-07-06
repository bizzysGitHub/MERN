

conn = new Mongo();

db = conn.getDB(process.env.MONGO_INITIAL_DATABASE);

db.getSiblingDB('admin').auth(
    process.env.MONGO_INITIAL_USERNAME,
    process.env.MONGO_INITIAL_PASSWORD
    );
    db.createUser({
        user: process.env.MONGO_INITIAL_USERNAME,
        pwd: process.env.MONGO_INITIAL_PASSWORD,
        roles: ["readWrite"],
    });


const _getEnv = (env) => {
    return process.env[env] || ''
}
    
//insert first record into bizzyDatabase

// db.dontdos.insert({ title:"1st todo", description:"just testing ", completed:false},{timestamps: true});


/**
 * 
 *  !!!! work on figuring out why env variables dont work here!!!
 */

