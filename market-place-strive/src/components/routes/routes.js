import Home from '../views/Home'
import BackOffice from "../views/BackOffice";
import ProductDetails from "../views/ProductDetails";
import NotFound from "../views/NotFound";
const routes = [
	{
		path: "/",
		component: Home,
		exact: true,
	},
	{
		path: "/product/:id",
		component: ProductDetails,
		exact: true,
	},
	{
		path: "/backoffice",
		component: BackOffice,
		exact: true,
	},
	{
		path: "/404",
		component: NotFound,
		exact: true,
	},
];

export default routes;
