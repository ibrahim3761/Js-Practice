// utility types

type Product = {
  id: number;
  name: string;
  price: string;
  stock: number;
  color?: string;
};

type ProductsSummury = Pick<Product, "id" | "name" | "price">;

type ProductWithOutStock = Omit<Product, "stock">;

type ProductWithColor = Required<Product>;

const product: ProductWithColor = {
  id: 1,
  name: "hp",
  price: "12",
  stock: 100,
  color: "red",
};

type OptionalProduct = Partial<Product>;

type ProductReadOnly = Readonly<Product>;

const emptyObj : Record<string, unknown> = {}

const product1 = {
    id: 2,
  name: "hp",
  price: "12",
}