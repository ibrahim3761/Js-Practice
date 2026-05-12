import type { IncomingMessage, ServerResponse } from "http";
import { readProduct, writeProduct } from "../service/product.service";
import type { IProduct } from "../types/product.type";
import { parseBody } from "../utility/parseBody";
import { sendResponse } from "../utility/sendResponse";

export const productController = async (
  req: IncomingMessage,
  res: ServerResponse,
) => {
  //console.log("Req",req);

  const url = req.url;
  const method = req.method;

  const urlParts = url?.split("/");
  console.log(urlParts);
  const id =
    urlParts && urlParts[1] === "products" ? Number(urlParts[2]) : null;
  //console.log("This is prouct id :", id);

  //Get all products
  if (url === "/products" && method === "GET") {
    try {
      const products = readProduct();

      return sendResponse(
        res,
        200,
        true,
        "Products found successfully",
        products,
      );
    } catch (error) {
      return sendResponse(res, 500, false, "Something went wrong!", error);
    }
  }
  // GET single product
  else if (method === "GET" && id !== null) {
    try {
      const products = readProduct();
      const product = products.find((p: IProduct) => p.id === id);
      if (!product) {
        return sendResponse(res, 404, false, "Product not found");
      }
      //console.log(product);
      return sendResponse(
        res,
        200,
        true,
        "Product found successfully",
        product,
      );
    } catch (error) {
      return sendResponse(res, 500, false, "Something went wrong!", error);
    }
  }
  //POST product
  else if (method === "POST" && url === "/products") {
    try {
      const body = await parseBody(req);
      console.log("Body", body);
      const newProduct = {
        id: Date.now(),
        ...body,
      };
      //console.log(newProduct);
      const products = readProduct();
      products.push(newProduct);
      // console.log(products);
      writeProduct(products);

      return sendResponse(
        res,
        200,
        true,
        "Product created successfully",
        newProduct,
      );
    } catch (error) {
      return sendResponse(res, 500, false, "Something went wrong!", error);
    }
  }
  //PUT
  else if (method === "PUT" && id !== null) {
    try {
      const body = await parseBody(req);
      const products = readProduct();
      const index = products.findIndex((p: IProduct) => p.id === id);
      //console.log(index);
      if (index < 0) {
        return sendResponse(res, 404, false, "Product not found");
      }
      products[index] = { id: products[index].id, ...body };

      writeProduct(products);

      return sendResponse(
        res,
        200,
        true,
        "Product updated successfully",
        products[index],
      );
    } catch (error) {
      return sendResponse(res, 500, false, "Something went wrong!", error);
    }
  }
  //DELETE
  else if (method === "DELETE" && id !== null) {
    try {
      const products = readProduct();
      const index = products.findIndex((p: IProduct) => p.id === id);
      if (index < 0) {
        return sendResponse(res, 404, false, "Product not found");
      }
      products.splice(index, 1);

      writeProduct(products);

      return sendResponse(
        res,
        200,
        true,
        "Product deleted successfully",
        products,
      );
    } catch (error) {
      return sendResponse(res, 500, false, "Something went wrong!", error);
    }
  }
};
