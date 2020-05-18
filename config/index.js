var connection =  require("./connection2");

class DB {
    constructor(connection){
        this.connection = connection;
    }
    findUsers() {
        return this.connection.query(
            "SELECT f_name, l_name, email, birthday, gender_identity, gender_of_partner from timbr_user"
        );
    }
}
module.exports = new DB(connection);