import React from "react";
import DetalleProducto from "./DetalleProducto";
import { MemoryRouter, Route, Routes } from "react-router-dom";

export default {
  title: "Pages/DetalleProducto",
  component: DetalleProducto,
  tags:['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
        "Documentación Narrativa de Detalle Producto: Componente que nos va a mostrar toda la información que contiene el producto que seleccionemos. Necesario para cuando en una lista de productos no se muestra toda la información que tiene cada producto almacenada"
      }
    }
  }
};

const renderWithRouter = (id) => 
  React.createElement(
    MemoryRouter,
    { initialEntries: [`/producto/${id}`] },
    React.createElement(
      Routes,
      null,
      React.createElement(Route, { path: "/producto/:id", element: React.createElement(DetalleProducto) })
    )
  );

export const ProductoExistente = {
  render: () => renderWithRouter(3),
};

