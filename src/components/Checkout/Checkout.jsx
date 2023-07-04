import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import { collection, addDoc } from "firebase/firestore";

import { db } from "../../services/firebase/firebaseConfig";

import Form from "react-bootstrap/Form";

import MessageSuccess from "../MessageSuccess/MessageSuccess";

const initialState = {
  name: "",
  lastName: "",
  phone: "",
  email: "",
  emailConfirmation: "",
  total: "",
  cart: "",
  date: new Date(),
};

const Checkout = () => {
  const [values, setValues] = useState(initialState);
  const [orderID, setOrderID] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false); // Estado para controlar si el formulario fue enviado
  const [emailError, setEmailError] = useState(""); // Estado para controlar el error del email

  const { clearCart, total, cart } = useContext(CartContext);

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value, total: total(), cart: cart });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Logica para verificar que ambos email sean iguales antes de enviar el formulario
    if (values.email !== values.emailConfirmation) {
      setEmailError("Los correos electrónicos no coinciden.");
      return;
    }

    const docRef = await addDoc(collection(db, "orders"), {
      values,
    });
    console.log("Document written with ID: ", docRef.id);
    setOrderID(docRef.id);
    setValues(initialState);
    clearCart();
    setFormSubmitted(true); // Establece formSubmitted a true después de enviar el formulario
  };

  return (
    <div>
      <h1 style={{ color: "black" }}>Orden de compra</h1>
      {!formSubmitted && (
        <form onSubmit={onSubmit}>
          <div className="container">
            <div className="d-flex justify-content-center">
              <div style={{ width: 400 }}>
                <Form.Control
                  placeholder="Nombre"
                  style={{ margin: 10 }}
                  name="name"
                  value={values.name}
                  onChange={handleOnChange}
                  required
                />
                <Form.Control
                  placeholder="Apellido"
                  style={{ margin: 10 }}
                  name="lastName"
                  value={values.lastName}
                  onChange={handleOnChange}
                  required
                />
                <Form.Control
                  placeholder="Telefono"
                  style={{ margin: 10 }}
                  name="phone"
                  value={values.phone}
                  onChange={handleOnChange}
                  required
                />
                <Form.Control
                  placeholder="Email"
                  style={{ margin: 10 }}
                  name="email"
                  value={values.email}
                  onChange={handleOnChange}
                  required
                />
                <Form.Control
                  placeholder="Confirmar Email"
                  style={{ margin: 10 }}
                  name="emailConfirmation"
                  value={values.emailConfirmation}
                  onChange={handleOnChange}
                  required
                />
                {emailError && <p style={{ color: "red" }}>{emailError}</p>}
                <button className="btn btn-primary" type="submit">
                  Realizar compra
                </button>
              </div>
            </div>
          </div>
        </form>
      )}
      {formSubmitted && <MessageSuccess orderID={orderID} />}
      {/* Muestra el mensaje de éxito solo si formSubmitted es true */}
    </div>
  );
};

export default Checkout;
