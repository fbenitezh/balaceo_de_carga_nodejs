import { Router } from "express";
import ProductoController from "../controllers/productos.controller.js";
import RandomController from "../controllers/randomController.js";

class ApiRoute extends Router {
  constructor(props) {
    super(props);
    this.productoController = new ProductoController();
    this.randomController = new RandomController();

    this.get("/productos-test",this.productoController.listarUsuarios);
    this.get("/randoms",this.randomController.calcularAleatorio);
  }
}

export default ApiRoute;
