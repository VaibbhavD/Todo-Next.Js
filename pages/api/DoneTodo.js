import { MongoClient } from "mongodb";
export default async function Post(req, res) {
  if (req.method === "POST") {
    const data = req.body;
    const Client = await MongoClient.connect(
      "mongodb+srv://vaibhavdhamanage12:FnNmAenYGVoZKLCK@cluster0.t5bx9cq.mongodb.net/done?retryWrites=true&w=majority&appName=Cluster0"
    );
    const db = Client.db();
    const Todocollection = db.collection("done");
    const result = await Todocollection.insertOne(data);
    Client.close();

    res.status(201).json({ message: "Post Successfull !", data: result });
  }
}
