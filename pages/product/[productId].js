import { useState } from "react";
import { client } from "../../utils/shopify";
import { Grid, Image, List, Input } from "semantic-ui-react";

const { Row, Column } = Grid;

const ProductPage = ({ product }) => {
  const [image, setImage] = useState(product.images[0]);

  const [quantity, setQuantity] = useState(0);

  const addToCart = async () => {
    const checkout = await client.checkout.create();
    console.log("checoucktId:", checkout.id);
  };

  return (
    <Grid container centered>
      <Row columns={2}>
        <Column width={10}>
          <Row>
            <Image src={image.src} />
          </Row>
          <Row>
            <List horizontal relaxed>
              {product.images.map((image, index) => {
                return (
                  <List.Item onClick={() => setImage(image)}>
                    <Image size={"small"} src={image.src} />
                  </List.Item>
                );
              })}
            </List>
          </Row>
        </Column>
        <Column style={{ marginTop: 50 }} width={6}>
          <Input
            action={{
              color: "teal",
              labelPosition: "left",
              icon: "cart",
              content: "Checkout",
              onClick: addToCart,
            }}
            type="number"
            actionPosition="left"
            placeholder="Search..."
            defaultValue="52.03"
          />
        </Column>
      </Row>
    </Grid>
  );
};

export default ProductPage;

export async function getServerSideProps({ query }) {
  const productId = query.productId;
  const product = await client.product.fetch(productId);

  return { props: { product: JSON.parse(JSON.stringify(product)) } };
}
