import Alert from "react-bootstrap/Alert";

const MessageSuccess = ({ orderID }) => {
  return (
    <Alert variant="success">
      Gracias por su compra! Su ID de transacción es: {orderID}
    </Alert>
  );
};

export default MessageSuccess;
