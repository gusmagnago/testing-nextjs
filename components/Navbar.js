import { useState } from "react";
import Link from "next/link";

import { Container, Menu, Segment, Visibility } from "semantic-ui-react";

function Navbar() {
  const { fixed, setFixed } = useState(false);
  return (
    <Visibility
      once={false}
      /*  onBottomPassed={() => setFixed(true)} */
      /* onBottomPassedReversed={() => setFixed(false)} */
    >
      <Segment
        inverted
        textAlign="center"
        style={{ minHeigt: 50, padding: "1em 2em" }}
      >
        <Menu
          fixed={fixed ? "top" : null}
          inverted={!fixed}
          pointing={!fixed}
          secondary={!fixed}
          size={"large"}
        >
          <Container>
            <Link href="/">
              <Menu.Item>Home</Menu.Item>
            </Link>
            <Link href="/about">
              <Menu.Item>About us</Menu.Item>
            </Link>
            <Link href="/products">
              <Menu.Item>Products</Menu.Item>
            </Link>
          </Container>
        </Menu>
      </Segment>
    </Visibility>
  );
}

export default Navbar;
