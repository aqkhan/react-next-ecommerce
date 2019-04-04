// Import Next Head
import Head from 'next/head'
import Header from '../components/Header';
import ProductsArchive from '../components/ProductsArchive';

const Index = () => {

    return (
        <div>
            <Head>
                <title>E-commerce example SSR & CSR</title>
            </Head>
            <Header />
            <ProductsArchive />
        </div>
    )
}

export default Index;