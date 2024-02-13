import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import "./index.css";

const Badge = styled.div`
  background-color: #d04848;
  padding: 10px;
  color: #fff;
  border-radius: 5px;
  width: 70px;
  text-align: center;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid #ddd;
  padding: 20px;
  width: 300px;
  border-radius: 10px;
  text-align: center;

  img {
    width: 100%;
  }
  &:hover {
    box-shadow: 1px 2px 10px blue;
  }

  filter: ${(props) => (props.$active ? "opacity(1)" : "opacity(0.5)")};
`;

const Price = styled.div`
  span {
    margin-right: 10px;
  }
  span:nth-child(2) {
    color: green;
  }
`;

const Discounted = styled.span`
  text-decoration: ${(props) => (props.$discounted ? "line-through" : "")};
  color: red;
`;

const Icons = styled.div`
  a {
    margin-right: 10px;
  }
`;

function App() {
  return (
    <>
      <Card $active={true}>
        <Badge>Hot</Badge>
        <div>
          <img src="https://i.imgur.com/xdbHo4E.png" alt="" />
        </div>

        <div>
          <span>Women,bag</span>
          <h4>
            <a href="">Women leather bag</a>
          </h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
          <div>
            <Price>
              <Discounted $discounted={true}>
                <small>$96.00</small>
              </Discounted>
              <span>$230.99</span>
            </Price>
            <Icons>
              <a href="#">
                <FontAwesomeIcon icon={faHeart} beatFade size="xl" style={{ color: "tomato" }} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faCartShopping} spin size="xl" />
              </a>
            </Icons>
          </div>
        </div>
      </Card>
    </>
  );
}

export default App;
