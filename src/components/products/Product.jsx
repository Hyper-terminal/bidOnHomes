import { Container, Card, Grid, Image, Text } from "@nextui-org/react";
import React from "react";

const Product = (props) => {
  const defaultImage =
    "https://github.com/nextui-org/nextui/blob/next/apps/docs/public/nextui-banner.jpeg?raw=true";

  return (
    <Container>
      <Card isHoverable isPressable css={{ p: "$4", mw: "500px" }}>
        <Grid.Container>
          <Grid xs={12} sm={4}>
            <Image
              showSkeleton
              objectFit="cover"
              src={props.item.image !== "" ? props.item.image : defaultImage}
            />
          </Grid>

          <Grid xs={12} sm={8}>
            <Container css={{ p: "$4", pl: "$10" }}>
              <Text h4 b>
                {props.item.title.toUpperCase()}
              </Text>
              <Text css={{ opacity: "0.6" }} h6>
                {props.item.description}
              </Text>
              <Text h5 color="primary">
                Price: ${props.item.price}
              </Text>
              <Text h5 color="warning">
                Total Price (qty: x{props.item.quantity}) = $
                {props.item.totalPrice}
              </Text>
            </Container>
          </Grid>
        </Grid.Container>
      </Card>
    </Container>
  );
};

export default Product;
