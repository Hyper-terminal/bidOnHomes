import { Container, Grid, Text, Image } from "@nextui-org/react";
import React from "react";
import AddForm from "../components/products/AddForm";
import dataProcessing from "../assets/data_processing.svg";

const Home = () => {
  return (
    <Container>
      <Grid.Container gap={4}>
        <Grid sm={8} xs={12}>
          <Image src={dataProcessing} />
        </Grid>
        <Grid direction="column" alignItems="center" justify="center" xs={12} sm={4}>
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $blue600 -20%, $pink600 50%",
            }}
            weight="bold"
          >
            Efficiency
          </Text>
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $purple600 -20%, $pink600 100%",
            }}
            weight="bold"
          >
            at it's
          </Text>
          <Text
            h1
            size={60}
            css={{
              textGradient: "45deg, $yellow600 -20%, $red600 100%",
            }}
            weight="bold"
          >
            Finest
          </Text>

          <AddForm />
        </Grid>
      </Grid.Container>
    </Container>
  );
};

export default Home;
