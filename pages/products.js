import { client } from "../utils/shopify";
import { Container, Card, Image, Header } from "semantic-ui-react";
import Link from "next/link";

const Products = ({ products }) => {
  console.log(products);
  return (
    <Container>
      <Card.Group itemsPerRow={2}>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Link href={`/product/${product.id}`}>
                <Card>
                  <Image src={product.images[0].src} size="small" />
                  <Card.Content>
                    <Header as="h3">{product.title}</Header>
                    {/*  <span>{product.price}</span> */}
                  </Card.Content>
                </Card>
              </Link>
            </div>
          );
        })}
      </Card.Group>
    </Container>
  );
};

export default Products;

export async function getServerSideProps() {
  const products = await client.product.fetchAll();

  // Pass data to the page via props
  return { props: { products: JSON.parse(JSON.stringify(products)) } };
}
