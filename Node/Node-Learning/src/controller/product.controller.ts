import type { IncomingMessage, ServerResponse } from "http";
import { readProduct } from "../service/product.service";
import type { IProduct } from "../types/product.type";

export const productController = (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  const url = req.url;
  const method = req.method;

  const urlParts = url?.split("/");
  console.log(urlParts);
  const id = urlParts && urlParts[1] === 'products' ? Number(urlParts[2]) : null
  console.log("This is prouct id :", id );
  
  //Get all products
  if (url === "/products" && method === "GET") {

    // const products = [
    //     {
    //         id : 1,
    //         name : "Product - 1"
    //     },
    //     {
    //         id : 2,
    //         name : "Product - 2"
    //     },
    //     {
    //         id : 3,
    //         name : "Product - 3"
    //     },
    // ];

    const products = readProduct();

    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Products found successfully ", 
    data: products }));
  }
  else if(method === "GET" && id !== null){
    const products = readProduct();
    const product = products.find((p : IProduct )=>p.id === id)
    console.log(product);
    res.writeHead(200, { "content-type": "application/json" });
    res.end(JSON.stringify({ message: "Product found successfully ", 
    data: product }));
  }
};
