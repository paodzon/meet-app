import { MongoClient } from "mongodb";

// /api/new-meetup

const handler = async (req, res) =>{
  if(req.method === 'POST'){
    const data = req.body;

    const client = await MongoClient.connect('mongodb+srv://paodzon:pawpaw@cluster0.a4zpiwo.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db();

    const meetupsCollection = db.collection('meetups');
    const result = await meetupsCollection.insertOne(data);

    console.log(result);
    res.status(201).json({message: 'Meetup inserted!'});
  }
};

export default handler;