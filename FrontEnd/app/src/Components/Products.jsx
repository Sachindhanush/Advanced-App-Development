import React from 'react';
import Navbar from './Navbar';
import './Products.css';

const Products = () => {
    const personalizedGiftsData = [
        {
            title: 'Mugs',
            price: '245',
            link: '/personalised-gifts',
            imageUrl:
                'https://assets.winni.in/groot/2022/07/22/homepage/desktop/persomug.jpg?w=385',
        },
        {
            title: 'Cushion',
            price: '349',
            link: '/personalised-gifts',
            imageUrl:
                'https://assets.winni.in/groot/2022/07/22/homepage/desktop/persocushion.jpg?w=385',
        },
        {
            title: 'Photo Frames',
            price: '349',
            link: '/personalised-gifts',
            imageUrl:
                'https://assets.winni.in/groot/2022/07/22/homepage/desktop/persoframe.jpg?w=385',
        },
        {
            title: 'Wallet',
            price: '500',
            link: '/personalised-gifts',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMzF7KqfEr0NJCAmn6Gepv44ubrap4wwxe3Q&usqp=CAU',
        },
        {
            title: 'Lamps',
            price: '649',
            link: '/personalised-gifts',
            imageUrl:
                'https://assets.winni.in/groot/2022/07/22/homepage/desktop/perolamp.jpg?w=385',
        },
        {
            title: 'Personalized Indian Wedding Caricature with Wooden Stand',
            price: '700',
            link: '/personalised-gifts',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRwlVMqQsmKAFmAR1wCljRrbaf8srIajjgU4vMkFEJgNxJVKlao7NJFXDcX1EphXYdFrI&usqp=CAU',
        },
        {
            title: 'Embroidered Caps',
            price: '300',
            link: '/personalised-gifts',
            imageUrl:
                'https://cms.cloudinary.vpsvc.com/image/upload/c_scale,dpr_auto,f_auto,q_auto:good,w_900/india%20lob/embroidered%20and%20printed%20caps/in_embroidered-caps_overview',
        },
        {
            title: 'Gold Plated Secret Custom Name Bar Pendant Chain - Unisex',
            price: '1500',
            link: '/personalised-gifts',
            imageUrl:
                'https://myjewelindia.com/cdn/shop/products/img1_720x.jpg?v=1644487721',
        },
        {
            title: 'MOON LAMP LIGHT',
            price: '700',
            link: '/personalised-gifts',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcShuUzeYeq2YTe6PDqUpEEO_cWferx9AtGaVA42oxUkqMKeqCeo6QS3I9F8Hb4Ok29tev0-88_Cy1nU4BSfYlUNwe3Lb3JFHRe34u87Ags&usqp=CAc',
        },
        {
            title: 'Click Love Personalized Stainless Steel Water Bottle ',
            price: '695',
            link: '/personalised-gifts',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRn7Ma6jwsgWu53VhQ1tZB4AiQg7icb2rUjYlNIhfzHJUf6Vh98qcG2QOCDNx-oGfDMnPL24_-RgcZOuYyNXLVhl1OyAT0dHj1WH76dRDa_bW965AwiTO2zOA&usqp=CAE',
        },
        {
            title: 'Oil Painting Photo Frame',
            price: '1,299',
            link: '/personalised-gifts',
            imageUrl:
                'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQsaKaTcCvSJwQ_cAns_Jie10UIJSSe4r0VN2SbULR9SbkDwMmmDP_56WRxSIqT5uX2nGkzPXu9tomBLJxQLn1QuKwnFWmsG9W8zQiOtKOT&usqp=CAE',
        },
        {
            title: 'IMPACTGift 3D Personalized Name Engraved Acrylic LED lamp Gifts for Her/Him Gift Table Lamp  ',
            price: '799',
            link: '/personalised-gifts',
            imageUrl:
                'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTL4M6S-2VWbRJJYhmtq6CBT0YQ2_6XRwDrtdxC4US09Sy40r4Q4fPjTC_VmYvXD9d7YDvcgX5DK6-MjoeOtq0ySUo32g4-7g1-P2vNMYj3&usqp=CAE',
        },
      ];

    return (
<div>
            <Navbar />
            <div className="text-center mb-4">
                <br />
                <h1 className="fw-bold">Treasured Connections</h1>
                thoughtful gifts for every special person
                <hr className="w-25 mx-auto" />
            </div>
            <div className="row rowapd catEventHomeWithTitle" style={{maxHeight:'100px', margin: 'auto', marginLeft: '15px', marginRight: '15px' }}>
                {personalizedGiftsData.map((gift, index) => (
                    <div className="col-3" key={index}>
                        <div className="card" style={{ borderRadius: '5px', boxShadow: 'none', overflow: 'hidden', margin: '0', backgroundColor: '#FFFFFF!important', marginBottom: '20px' }}>
                            <a className="center-align" href={gift.link}>
                                <img alt={gift.title} widgettype="personalized category" className="card-img-top" src={gift.imageUrl} style={{ width: '220px', height: '200px' }} />
                            </a>
                            <div className="card-body" style={{ padding: '17px 5px 13px' }}>
                                <div className="col-10 truncate" style={{ paddingRight: '0', textAlign: 'left', color: '#404040', lineHeight: '19px' }}>
                                    <h5 className="card-title " style={{ fontSize: '17px', fontWeight: 'bold' }}>{gift.title}</h5>
                                    <p className="card-text" style={{ fontSize: '13px', margin: '0' }}>Starting From</p>
                                    <p className="card-text" style={{ fontSize: '13px', margin: '0', fontWeight: 'bold' }}>
                                        ₹ {gift.price}
                                    </p>
                                </div>
                                <div className="button-group">
                                    <button className="btn btn-primary mt-3" style={{ width: '100%' }}>Add to Cart</button>
                                    <button className="btn btn-secondary mt-2" style={{ width: '100%' }}>Add to Wishlist</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Products;