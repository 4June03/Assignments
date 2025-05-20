// Replace the following with your Atlas connection string

import { MongoClient } from "mongodb";
const uri =
  "mongodb+srv://huunghia:lpn5M6D2ac3wjkok@cluster0.9nlgicz.mongodb.net/huunghiadb?retryWrites=true&w=majority&appName=Cluster0";

async function run() {
  const client = new MongoClient(uri);
  try {
    // Connect to the Atlas cluster
    await client.connect();

    // Get the database and collection on which to run the operation
    const db = client.db("huunghiadb");
    const col = db.collection("products");

    // Create new documents
    const peopleDocuments = [
      {
        productId: "6",
        title: "Áo thun polo sọc",
        description:
          "Áo thun polo có sọc ngang, chất liệu cotton co giãn thoải mái.",
        price: "29.90",
        compareAtPrice: "35.00",
        imageUrl:
          "https://i.pinimg.com/736x/a1/b2/c3/a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6.jpg",
      },
      {
        productId: "7",
        title: "Quần short kaki",
        description: "Quần short kaki nam, dáng ôm vừa phải, thoáng mát.",
        price: "19.50",
        compareAtPrice: "24.00",
        imageUrl:
          "https://i.pinimg.com/736x/07/af/31/07af310423e79f6f4a670df09b5e52da.jpg",
      },
      {
        productId: "8",
        title: "Đầm suông hoa nhí",
        description: "Đầm suông in họa tiết hoa nhí, nhẹ nhàng, nữ tính.",
        price: "45.00",
        compareAtPrice: "55.00",
        imageUrl:
          "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/10/30/11/gareth-bale.jpg",
      },
      {
        productId: "9",
        title: "Áo khoác jean nữ",
        description: "Áo khoác jean wash nhẹ, phong cách trẻ trung.",
        price: "60.00",
        compareAtPrice: "70.00",
        imageUrl: "https://static.independent.co.uk/2022/08/18/18/newFile.jpg",
      },
      {
        productId: "10",
        title: "Chân váy xòe midi",
        description: "Chân váy xòe dài midi, chất liệu voan mềm mại.",
        price: "32.00",
        compareAtPrice: "40.00",
        imageUrl:
          "https://pbs.twimg.com/media/GPA-TFYWAAAdeYq?format=jpg&name=4096x4096",
      },
      {
        productId: "11",
        title: "Áo sơ mi tay ngắn",
        description: "Áo sơ mi tay ngắn công sở, chất liệu linen thoáng mát.",
        price: "28.00",
        compareAtPrice: "34.00",
        imageUrl:
          "https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2021/6/17/921718/Marcelo-Vieira-828X5-01.jpg",
      },
      {
        productId: "12",
        title: "Quần legging thể thao",
        description: "Quần legging co giãn 4 chiều, phù hợp tập gym và yoga.",
        price: "22.50",
        compareAtPrice: "30.00",
        imageUrl:
          "https://i.pinimg.com/736x/g7/h8/i9/g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2.jpg",
      },
      {
        productId: "13",
        title: "Áo blazer vest",
        description: "Áo blazer vest dáng ôm, phong cách thanh lịch.",
        price: "75.00",
        compareAtPrice: "90.00",
        imageUrl:
          "https://i.pinimg.com/736x/h8/i9/j0/h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3.jpg",
      },
      {
        productId: "14",
        title: "Đầm dạ hội",
        description: "Đầm dạ hội dài, chi tiết drap eo sang trọng.",
        price: "120.00",
        compareAtPrice: "150.00",
        imageUrl:
          "https://i.pinimg.com/736x/i9/j0/k1/i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4.jpg",
      },
      {
        productId: "15",
        title: "Áo hoodie nỉ",
        description: "Áo hoodie nỉ dày, giữ ấm, có mũ và túi trước tiện lợi.",
        price: "50.00",
        compareAtPrice: "60.00",
        imageUrl:
          "https://i.pinimg.com/736x/j0/k1/l2/j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5.jpg",
      },
    ];

    // Insert the documents into the specified collection
    await col.insertMany(peopleDocuments);

    // Find the document
    const filter = { "name.last": "Turing" };
    const document = await col.findOne(filter);

    // Print results
    console.log("Document found:\n" + JSON.stringify(document));
  } catch (err) {
    if (err instanceof Error) {
      console.error("Error:", err.message);
    } else {
      console.error("Unknown error:", err);
    }
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
