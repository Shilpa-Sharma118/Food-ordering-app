import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering header", () => {
  //loading Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const logo = header.getAllByTestId("logo");
  //Remember this will give you an array
  //console.log(logo[0]);
  expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Check online status on rendering header", () => {
  //loading Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const onlineStatus = header.getByTestId("online-status");
  //Remember this will give single element
  //console.log(logo[0]);
  expect(onlineStatus.innerHTML).toBe("Online");
});

test("Cart should have zero items", () => {
  //loading Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  const cart = header.getByTestId("cart");
  //Remember this will give single element
  //console.log(logo[0]);
  expect(cart.innerHTML).toBe("Cart-0");
});
