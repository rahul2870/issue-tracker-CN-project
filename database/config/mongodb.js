const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://2870rahul:JqgaEFWwiTBuoLCe@cluster0.lhtagrz.mongodb.net/?retryWrites=true&w=majority'


// pw : JqgaEFWwiTBuoLCe

async function getEmpData() {
    let client = await MongoClient.connect(url);
    let connection = client.db('issueTracker'); // Establish connection
    return connection.collection('IssueTracker2023'); // creating a collection and naming it also
}

module.exports = getEmpData;