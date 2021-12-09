// #region Global Imports
const nextRoutes = require("next-routes");

// #endregion Global Imports

const Routers = [
    {
        pattern : "/home",
        page: "home",
        name: "home"
    },
    {
        pattern : "/",
        page: "home",
        name: "default"
    }
]

const nextRouters = (module.exports = nextRoutes());

Routers.forEach((router) => {
    nextRouters.add(router);
})

// export default nextRouters;
