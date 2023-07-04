import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import Spinner from "../Spinner/Spinner";

import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [dataExists, setDataExists] = useState(true); // Estado para controlar si el producto existe

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    const docRef = doc(db, "products", itemId);

    getDoc(docRef)
      .then((response) => {
        const data = response.data();
        const productAdapted = { id: response.id, ...data };
        setProduct(productAdapted);
        if (!data) setDataExists(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div>
      {loading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        <div>
          {dataExists ? (
            <ItemDetail {...product} />
          ) : (
            <h1>El producto no existe!</h1>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
