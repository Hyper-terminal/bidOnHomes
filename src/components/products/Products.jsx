import { Container, Grid } from "@nextui-org/react";
import React from "react";
import Product from "./Product";

const Products = (props) => {
  return (
    <Container>
      <Grid.Container gap={4}>
        {props.products.map((item, index) => {
          const lastItem = props.products[props.products.length - 1 - index];
          return (
            <Grid key={lastItem.title} xs={12} sm={6}>
              <Product item={lastItem} />
            </Grid>
          );
        })}
      </Grid.Container>
    </Container>
  );
};

export default Products;
