import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios'
import {useEffect, useState} from "react";
import Link from 'next/link';
import Container from "../components/Container";
import Layout from "../components/Layout";
import Card from "../components/Card";

export default function Home() {

  const [products,setProducts]=useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const path = "products"
    const options = {
      method: "GET",
      url: `https://dummyjson.com/${path}/?limit=15`,
    };
    if (sessionStorage.getItem(path)) {
      setLoading(false);
      setProducts(JSON.parse(sessionStorage.getItem(path)));
    } else {
      setLoading(true);
      axios
        .request(options)
        .then((res) => {
          const json = res.data.products;
          console.log(json)
          setProducts(json);
          setLoading(false);
          sessionStorage.setItem(path, JSON.stringify(json));
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  }, []);

  return (
    <Layout>
      <Head>
        <title>Iek Ergasia</title>
      </Head>
      <Container className={styles.homeContainer}>
        <div className={styles.grid}>
          {products.map(product => {
            return (
              <Card product={product} key={product.id}/>
            );
          })}
        </div>
      </Container>
    </Layout>
  )
}
