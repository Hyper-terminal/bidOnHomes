import { Container, Input, Text, Grid } from "@nextui-org/react";
import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Products from "../components/products/Products";
import { productActions } from "../store/product-Slice";

const Inevntory = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const products = useSelector((state) => state.product.filteredArray);

  const filteredArray = useMemo(() => {
    return products.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
  }, [products, query]);

  return (
    <Container>
      <Grid.Container gap={4}>
        <Grid>
          <Input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="search with name..."
            color="secondary"
          />
        </Grid>
        <Grid>
          <Input
            onChange={(e) =>
              dispatch(productActions.filterPrice(Number(e.target.value)))
            }
            type="search"
            placeholder="search with price"
          />
        </Grid>
      </Grid.Container>
      {filteredArray.length === 0 && (
        <Text
          color="warning"
          weight="semibold"
          css={{ mt: "$20", textAlign: "center" }}
          size={50}
        >
          No Products
        </Text>
      )}
      {filteredArray.length > 0 && <Products products={filteredArray} />}
    </Container>
  );
};

export default Inevntory;
