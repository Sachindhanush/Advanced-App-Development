import React from 'react';
import Navbar from './Navbar';
import './Watch.css'; 

const Watch = () => {
    const watchData = [
        {
            title: 'Classic Leather Watch',
            price: '3,999',
            link: '/watches',
            imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQtTuJF7z3C0T1_ANor3PP2-fIDISVL7UX4y0bJqk7K1q3VImuTo9q1G9aCybG5vvjd5iOBP9ZAW57DfQ9uvW2c0UouJtEbSpVr5cZTprZ13sV6N5E3aU2Pk-W5QAjshRXlo_ezr1AqnA&usqp=CAc',
        },
        {
            title: 'Sporty Chronograph Watch',
            price: '5,499',
            link: '/watches',
            imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQiprmGv7sBnjo1WdAPP5wsf_3JjSBVoht98e7Zda5NrMlFz6N36qFzq7HeIor2DAm670oCicSVvLveH4S5gZ7IZ9pMYsqqNUaiJNarRUaZKTmesf7meeDdsH0yeF08Ep2siPI457SbQ30&usqp=CAc',
        },
        {
            title: 'Mast & Harbour Unisex Black Chronograph Watch',
            price: '1,019',
            link: '/watches',
            imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQUJ6Klrqpa9XQRzi3PcQmJ6zBrg-D56Qmf35ApTdvp-bmA5SCFF8RY2pDFas4WOcH-PdBm081aO_jfljSAEMADJA_VwbBNNpmNZPpG-FQ&usqp=CAE',
        },
        {
            title: 'Daniel Klein DK11599-4 Analog Watch for Men',
            price: '2,640',
            link: '/watches',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcROZeuR6CJERo0WZPG4_fzLvqnq79UnXsbpYBEEM00bJvkC9xxSGYmspgRj7eqEd82yDaoyZw8Jli8j-kCdjilid4GSNRJRqXAyY6COwIAW1TTnDPtxpfUntg&usqp=CAE',
        },
        {
            title: 'IK COLOURING Bestn Mens Luxury Skeleton Automatic Mechanical Wrist Watche',
            price: '12,619',
            link: '/watches',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRPj5nLHZBevLAm-e6d3kfI3PZSibAOXisOeL9FxELazVd_dIobAEM--rHv_LEv4Tp8lNAHfx4Wzidu3vwVBw81t8O4HJB76hus87OYfcHAn0o5sL5H1bN7&usqp=CAE',
        },
        {
            title: 'Beatxp Marv Neo 1.85 Hd Display With Bt Calling, Metal Body Health Tracking',
            price: '1,499',
            link: '/watches',
            imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQZfI6lGbpk02XdCck1fMQ45oRdr8Kcgc7u29SoZlj9cTkXKJZJ8_qj58vxRPLfOplwdzOIMvrpsh_WOaazNUanMPgLGY6OI4vM8YDqE-s&usqp=CAE',
        },
        {
            title: 'Galaxy Watch6 Classic',
            price: '33,999',
            link: '/watches',
            imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJNUyCctyjz6vkdcIe9-jZPag-azJmqLiYOqmI-EcBPRJ6AgOOEMBBU_X2KR4o7cF4FpK2be0oF6IQRUhdok4Zfe_Chn_rPjK6555PyfMOzrrzoXQ2SR8YkWJDA5YXXsaoahEoPw&usqp=CAc',
        },
        {
            title: 'Joker & Witch',
            price: '999',
            link: '/watches',
            imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRfVb9-VIlrrTcHnqCVwAC3CzsIPvy1D9B_QnF8Mkugv1pfKRahrCn_JLYxTe38xw7l1RpvpgCN-m0ty3Gp2XH8kS7s6oUJ07wn635kXtzwQUhlMJBD8eHWn5E&usqp=CAc',
        },
        {
            title: 'Titan Memento Grey Dial Analog Leather Strap Watch for Couple',
            price: '9,240',
            link: '/watches',
            imageUrl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTjnCXmQD2MXSJ5fnzz8Fr84WcRchBALI8u15n6Xz-12UtqCD9KOII7RcKDk2uwKm4sdod0VvStChsRYAWxIeFvroa5aljcV4YBWVtlDx1p6ujX83NcD_h3TWyiKmtyw5HyKJfiFNma7g&usqp=CAc',
        },
        {
            title: 'FireBolt Destiny',
            price: '11,499',
            link: '/watches',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcS2FsHSIZa9KVbD6aDhOLb3JZVDjb1oCqZovsYzQiFqP3kcTM5pn7coPH88uahLWHN7DluPdtDdjVB_2wygN5QYaY3UydKNprkm_S55MsmfmARIbHFGWXq32Uh9GM-EG_EQOrmReQ&usqp=CAc',
        },
        {
            title: 'Couple Watch set ( The Pride Mahogany )',
            price: '5,999',
            link: '/watches',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTdXZGC6ujS6VWZhw4PPuNKBAERbQxGStumlo86_z_iyUwQORG4CNkL0AE7bBMWTS9QZiu72M_eaTGi-0dTEP9ZJXaw6iAy_yZm6LONanSem5jYEjEPvHSr-A&usqp=CAc',
        },
        {
            title: 'JOKER & WITCH Women Black & White ',
            price: '1,499',
            link: '/watches',
            imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRj_0ER_NgddstmO3LqXbDjvdDx4xjN5J6RUGqxfXF89poWfrL2P2kwORNlPzcqDzkrLzAevRhsnS2LIZCGzwsUg7wICaf7x_U6tNuMeZI&usqp=CAE',
        },
       
    ];

    return (
<div>
            <Navbar />
            <div className="text-center mb-4">
                <br />
                <h1 className="fw-bold">Elegant Watches</h1>
                Explore our sophisticated collection
                <hr className="w-25 mx-auto" />
            </div>
            <div className="watch-container">
                {watchData.map((watch, index) => (
                    <div className="watch-item col-lg-3 col-md-4 col-sm-6" key={index} >
                        <div className="card" style={{maxHeight:'auto'}}>
                            <a href={watch.link}>
                                <img alt={watch.title} className="card-img-top" src={watch.imageUrl} style={{minHeight:'300px',maxHeight:'300px'}}/>
                            </a>
                            <div className="card-body">
                                <h5 className="card-title" style={{maxHeight:'40px'}}>{watch.title}</h5>
                                <p className="card-text">Price: ₹{watch.price}</p>
                                <div className="button-group d-flex justify-content-between">
                                    <a href="#" className="btn btn-success flex-fill">Add to Cart</a>
                                    <a href="#" className="btn btn-primary flex-fill me-2">Add to Wishlist</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Watch;