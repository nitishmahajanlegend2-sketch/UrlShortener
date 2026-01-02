import clientPromise from "../../../lib/mongodb"
export async function POST(request) {
    const body=await request.json();
    let client=await clientPromise;
    const db=client.db("bitlinks");
    const collection=db.collection("url");
    const doc=await collection.findOne({shorturl:body.shorturl})
    console.log(doc)
    if(doc){
        return Response.json({success:false,error:true,message:"URL already existed",url:doc.url})
    }
    //check if short url exist
   const result= await collection.insertOne({
        url:body.url,
        shorturl:body.shorturl
    })
  return Response.json({succes:true,error:false,message:'URL generated successfully',url:body.url})

}