const mongodb=require('mongoose');

const querySchema = new mongodb.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    message: {
        type: String
    },
});

const Query = mongodb.model('query', querySchema);
module.exports=Query;