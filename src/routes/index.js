import React, { Suspense, lazy }from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Authentication, { Authorization } from "../components/Authentication/Authentication";
import Products from "../containers/Products";
import SingleItem from "../containers/SingleItem";
import Login from "../containers/Login";
import SignUp from "../containers/SignUp";
import ShoppingCart from "../containers/ShoppingCart";
import Customer from "../containers/Customer";
import Stripe from "../containers/Stripe";
import MyOrders from "../containers/MyOrders";
import SingleOrder from "../containers/SingleOrder";

// introduction of route-based code-splitting with React.lazy (improves performance)
const Testing = lazy(() => import('../components/Testing'));

/**
 * Implements routing in the application
 */
export const AppRoutes = () => (
    <Router>
        <React.Fragment>
            <Suspense fallback={<div/>}>
                <Switch>
                    <Route
                        path={[
                            "/",
                            "/products",
                            "/products/inCategory/:id",
                            "/products/inDepartment/:id"
                        ]}
                        component={Products}
                        exact
                    />
                    <Route path="/products/:id" component={SingleItem} exact />
                    <Route path="/auth/login" component={Login} exact />
                    <Route path="/auth/register" component={SignUp} exact />
                    <Route
                        path="/shoppingcart/:cartId"
                        component={ShoppingCart}
                        exact
                    />
                    <Route
                        path="/customer"
                        component={Authentication(Authorization(Customer))}
                        exact
                    />
                    <Route
                        path="/stripe/charge"
                        component={Authentication(Authorization(Stripe))}
                        exact
                    />
                    <Route
                        path="/myorders"
                        component={Authentication(Authorization(MyOrders))}
                        exact
                    />
                    <Route path="/orders/:order_id" component={SingleOrder} exact />
                    <Route path="/testing" component={Testing} exact />
                </Switch>
            </Suspense>
        </React.Fragment>
    </Router>
);

export default AppRoutes;
