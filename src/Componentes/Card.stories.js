import React from "react";
import Card from "./Card";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Components/Card",
  component: Card,
  tags: ['autodocs']
};

// Función para renderizar la Card dentro de un Router
const renderCard = (props) =>
  React.createElement(
    MemoryRouter,
    null,
    React.createElement(Card, props)
  );

// Historia: Card con producto 1
export const Producto1 = {
  render: () =>
    renderCard({
      image: "/ruta/a/imagen1.jpg",
      name: "Vela Aromática",
      price: "$15",
      to: "/producto/1",
      children: "Vela con aroma a lavanda",
    }),
};

