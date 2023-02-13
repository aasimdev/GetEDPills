import Checkout from '@/components/checkout/Index'
import Head from 'next/head'

export default function CheckoutPage() {
    return (
        <>
            <Head>
                <title>Checkout | FastEDPills</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Checkout />
        </>
    )
}
