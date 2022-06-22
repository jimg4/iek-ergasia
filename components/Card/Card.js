import React from 'react';
import styles from "../../styles/Home.module.css";
import Link from "next/link";

function Card({product}) {
  return (
    <div key={product.id} className={styles.card}>
      <Link href={`/products/${product.id}`}>
        <a>
          <img src={product.images[0]} alt={`Preview of ${product.title}`} />
          <h3>{ product.title }</h3>
          <p className={styles.cardDescription}>{ product.description }</p>
          <p>${ product.price }</p>
        </a>
      </Link>
      <p>
        <button className="snipcart-add-item"
                data-item-id={product.id}
                data-item-image={product.images[0]}
                data-item-name={product.title}
                data-item-price={product.price}
        >
          Add to Cart
        </button>
      </p>
    </div>
  );
}

export default Card;