import { Card, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
    const productCart = useSelector(state => state.cart);

    const dispatch = useDispatch();

    const removeFromCart = (id) => {
        //Dispatch remove action

        dispatch(remove(id));
    };
    
    const cards = productCart.map((product) => (
        <div className="col-md-12" style={{ marginBottom: "10px" }}>
          <Card key={product.id} className="h-100">
            <div class="text-center">
              <Card.Img
                variant="top"
                src={product.image}
                style={{ width: "100px", height: "130px" }}
              />
            </div>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>${product.price}</Card.Text>
            </Card.Body>
            <Card.Footer style={{ backgroundColor: "white" }}>
              <Button variant="danger" onClick={() => removeFromCart(product.id)}>
                Remove Item
              </Button>
            </Card.Footer>
          </Card>
        </div>
      ));
    return (
        <>
            <h2>Cart</h2>
            {cards}
        </>
    );
};

export default Cart;
