import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import Spinner from "../Spinner/Spinner";

import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase/firebaseConfig";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const collectionRef = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(collectionRef)
      .then((response) => {
        const productsAdapted = response.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  const catFilter = products.filter((prod) => prod.category === categoryId);
  return (
    <div>
      {loading ? (
        <div className="Spinner">
          <Spinner />
        </div>
      ) : (
        <div>
          <div>
            {categoryId ? (
              <ItemList products={catFilter} />
            ) : (
              <ItemList products={products} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
