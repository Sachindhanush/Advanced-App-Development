
import React from 'react';
import Navbar from './Navbar';
import './Handbag.css'; 

const Handbag = () => {
    const handbagData = [
        {
            title: 'Leather Handbag',
            price: '1,599',
            link: '/handbags',
            imageUrl:
                'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQA5JbVLcNxE_9aG7g50ei4P2kuOwpD97X5tVIqVJkb2Sd2YMwEKG24srsG1qhKvBs-6-WDGWu2RIpmUpziwow52sblC-I5TmUJgX9vR9JE5sJfS2TC2DGk&usqp=CAc',
        },
        {
            title: 'Designer Tote Bag',
            price: '1,999',
            link: '/handbags',
            imageUrl:
                'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSGVf3ZEb9cV_8ccNCw_SvU30SkCDAqFcOm1fY716rUSXklOEZbOVEVkB_npTG0REIc-ajkTIghktEcRYSyoYAZD22CtDEnatc1d5T5d9Mj0EiEsject5eUxx05_YGfZUcj5LJwR2DT58o&usqp=CAc',
        },
        {
            title: 'Canvas Shoulder Bag',
            price: '3,499',
            link: '/handbags',
            imageUrl:
                'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRH4qyaAhvUoNgrXtdjBencRjF_1cCo2nUgqKzbXAZ8UmedzkXgV19UOQ45WcjQ1dOHa_kYppWWio5QmM6uEQD9eO_A5_9dH09AQGMjZLGOdAttUhZjeI0yaEQ&usqp=CAc',
        },
        {
            title: 'Casual Sling Bag',
            price: '3,422',
            link: '/handbags',
            imageUrl:
                'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQrmKRR--pjJpbg26QZ981SDkQJ9fg6rDWFusMrpziMm6ysekIEU_spFwSvkN2kFq_sFlcVAG585nJ4yhc-19Np28P-bxhD-rr6p3pjAJQB3omt0KotMgnYsg&usqp=CAc',
        },
        {
            title: 'Fashion Crossbody Bag',
            price: '449',
            link: '/handbags',
            imageUrl:
                'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRN07d7v9heKSnpGjqFwd-DWYdP6oXErSzNTW6UWjuSq4FwfYq5KaXnNbINU5eCi06pDYG9gXxDLRyAbkdS38YL5QcUblH9BZ_fxwXmn_L_46AXe7cjj1WDFTh15O4CuLX3UPWEWSfT3v0&usqp=CAc',
        },
        {
            title: 'Vintage Backpack',
            price: '1,799',
            link: '/handbags',
            imageUrl:
                'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTry4F7Fv-9VTbsz-pDjuugd-Qvmhp8k4Wf-LYO7DcGpV0XvqeroJEslGmB9XXL7zTGg--OgzOGTKn75UOPJKvCAYSlJz90Sw7QX6xMZehj5CU8D9bNkm-J99VAtgyoek1QTIPRDk1ViA&usqp=CAc',
        },
        {
            title: 'FLORAL CREEPER BOX CLUTCH',
            price: '2,999',
            link: '/handbags',
            imageUrl:
                'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRebgL25TJM_1OTpv6qAqX-XXdGKX7bdE5mKa2BGBmpvuaSEOg9tt2ZK6zSQRF2KiOi8V7TpgkEN-9zX_HxnzyLov9l4Heupa7YkqYkvdGqrsTJ3bwE_IOTCPLdCgvA0uKtErlc_mYJ0w&usqp=CAc',
        },
        {
            title: 'Asera Unicorn Sling Bags Shoulder Bag Hand Bag',
            price: '499',
            link: '/handbags',
            imageUrl:
                'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTTS8o9Nzqe7egtOixZztnyCD3r5WbHfR3xQwpmrMEQrzOQIi_0O1wyUvjHZ8LivJZc_CqfQo5qHT_QLCPAMACpsMdRSWcghonixmeimHzXiFuiLEoq1nYK1PdWC_Yv9SNc41gzuHWljQ&usqp=CAc',
        },
        {
            title: 'STYBUZZ Peach-Coloured Floral Textured Oversized Shopper Tote Bag ',
            price: '799',
            link: '/handbags',
            imageUrl:
                'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSaOURtQjiPaai7OWetU9293EyXFZnuO4fq8N8RpT61zHSi7_FzOgadbZazIG1JClENO11YkZG3IKRzCc0wWVkpsXX1oLhT9Is--q0LkK6XmlMTyjIOM0udVw&usqp=CAE',
        },
        {
            title: 'The Clownfish Women Multicolor Handbag',
            price: '1,719',
            link: '/handbags',
            imageUrl:
                'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSGMYW1T28G8nYwYx3criAcY6CFjWwteT8vuInwKAEGwo5TxNktcBXralFYwCMI_WrAZ01qwOFhCgoaafa36TGqvtVG1SJpkHVwg8onSJbv&usqp=CAE',
        },
        {
            title: 'Khatushyam Collection Women White Hand-held Bag',
            price: '399',
            link: '/handbags',
            imageUrl:
                'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS7Y7UqIcFaG3ENXFiWvIvvH7pCx8JYaP0RiP7E9RMN1-LNKPh_OCKmNZ4kGhMXMvmDqNrsRzj0269NFzYWN6Xas-UCuYOo3MaaR6mit3G0&usqp=CAE',
        },
        {
            title: 'Womens Handbag (Pink)',
            price: '799',
            link: '/handbags',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRRf28w8ZBCwrOOFEqf9MXHHZ8DyCGgf01Q0rkp7M1eaLMzdsqBkKZvwaEb6HvZommTnKENhTRWeLvQfDSH5mQfdrWB3P3UyFqvh7wQeR67PqG5ZzCGzZkX&usqp=CAE',
        },
    ];

    return (
       
               <div>
            <Navbar />
            <div className="text-center mb-4">
                <br />
                <h1 className="fw-bold">Stylish Handbags</h1>
                Explore our trendy collection
                <hr className="w-25 mx-auto" />
            </div>
            <div className="row rowapd catEventHomeWithTitle" style={{ margin: 'auto', marginLeft: '15px', marginRight: '15px' }}>
                {handbagData.map((handbag, index) => (
                    <div className="col-4" key={index}>
                        <div className="card" style={{maxHeight:'500px' ,maxWidth: '300px',borderRadius: '5px', boxShadow: 'none', overflow: 'hidden', margin: '0', backgroundColor: '#FFFFFF!important', marginBottom: '20px' }}>
                            <a className="center-align" href={handbag.link}>
                                <img alt={handbag.title} widgettype="handbags category" className="card-img-top" src={handbag.imageUrl} style={{ width: '250px', height: '240px' }} />
                            </a>
                            <div className="card-body" style={{ padding: '17px 5px 13px' }}>
                                <div className="col-10 truncate" style={{ paddingRight: '0', textAlign: 'left', color: '#404040', lineHeight: '19px' }}>
                                    <h5 className="card-title " style={{ fontSize: '17px', fontWeight: 'bold' }}>{handbag.title}</h5>
                                    <p className="card-text" style={{ fontSize: '13px', margin: '0' }}>Price</p>
                                    <p className="card-text" style={{ fontSize: '13px', margin: '0', fontWeight: 'bold' }}>
                                        ₹ {handbag.price}
                                    </p>
                                </div>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-primary" style={{ width: '100%' }}>Add to Cart</button>
                                    <button className="btn btn-outline-primary mt-2" style={{ width: '100%' }}>Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Handbag;