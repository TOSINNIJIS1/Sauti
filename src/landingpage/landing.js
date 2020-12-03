import React from 'react';
import './styles/landingNavBar.scss';
import './styles/landingHeader.scss';
import './styles/services.scss';
import './styles/join.scss';
import './styles/review.scss';
import { Link } from 'react-router-dom';

function Nav () {
    return (
        <div>
            <nav className='landingNav'>
                <ul className='left'>
                    <li className='landingLogo'> Sauti. </li>
                </ul>

                <ul className='right'>
                    <Link to='/about' className='about'> About </Link>
                    <Link to='/login' className='login'> Sign In  </Link>
                </ul>
            </nav>
            
        </div>
    )
}

function Header () {
    return (
        <div className='header-container'>
            <h1 className='h1'> Cross-Border Traders </h1>
            <p className='p'>Empowering women-led SMEs to trade legally, safely and profitably across borders.</p>
        </div>
    )
}

function Service () {
    return (
        <div>
            <h4 className='h4' 
            style={{color: 'black', fontFamily: 'Poppins', fontSize: '24px', lineHeight: '36px', textAlign: 'center', fontWeight: '700', marginTop: '12%' }}> Our services for East Africa’s traders 
            </h4>

            <Services />
            <Join />
            <Testimonial />
        </div>
    )
}

function Services () {
    // const image = [
    //     {
    //         imgUrl: 'https://lh3.googleusercontent.com/aWAbdAK199Sm215zxgYWDmoJdjiAZRXViqxBz63FqISIjLMJzVaQH0p80xE3VkQqUVgrfpTNNbD6TxKF76axYaXT_rmUnuoDfhXnPl7NkvkXfINUv8zSelkV1YYf6PnozUNJC3t_0w9dLaclZgXD1ZgHw3Y2UKsSLdGlRMGv9vtpyj6LBimlCI-K-FEfjdAHZDxDKmd9C7xw0EZZT259U1P_bqGmyFj7MCdKKxfO5mpLeYsU1xjS83AGJtmhuaWhKx18O9JM8Yc_-j6es5z4jdlU42a8ab_lghqH8NMYRZcro7ycWGVpB_2qYHblE5IPwEqVH9N5vaUdMIIYWpPCt6POMVbJoT-gegadWCgUqrL6iV0dTinvPavrBmUWaUmTgTjBFqJCe7f-GvkrZ21qCWSvLkn4q3ZX8fNO1xJpPLmV70lUx3mLcIS8x5m_gYHUMyIGF1cN5fwEI3sUd_qeQm96DNW5rrcF2nHnl8y1gHS4LSEi8qHYW7SFo_qPu7-X1M_XX5RXezNH2HW1ZBEPUpDLuTLaAlyy-d6DqUV4f9dL6b0gDOM7n9dUfcsQlNaO9JYxNwM4bG60Ms5p__oB94W6FmudHIcUMhIkZJAT8jWFWX9yQNc2preI9MYKDaofXHF3IohK9cBBZEKN30u5mbC57z6ia6GMdiSUOrtPTwEhlLGGCyvltpHtpMD7=w82-h130-no?authuser=0',
    //         service: 'Mobile Based Services',
    //         description: 'SMS Technologies Mobile & Web Applications'
    //     },
    //     {
    //         imgUrl: 'https://lh3.googleusercontent.com/Bj4804-rSWUfwbH1CQj3VAuuecvsD1e0c3KZKGH-6HSaOA3-6Nw2Gz_MCqfZALljs0j58K1iu1VFeBa4iO0LOJFVHOjBobet7bXKSHAvQNszK_ym7XwbYgrpEkRjCHkKQ2cP5cIHsUJvsmSdLxTuol3IMeK-hQ_6IQikW_feuCQB9Hzz4vj-in-H8Bvu1v0aJ67n6TU5p-l95kGYe2uRtOSvaKYx4J290V_jaNT0CCQnpQFF0psuMcqe4_KWflg7dqjxZ13_nbsJaZlIkGHl3wnq7FBslt5Col97nh0rUQqcajra_n7U7b5nLagwARWUqOQNv0pwCYFzjvppdT_1k8EItul_9BRUJLA7joY8S7VTnT1pG-xazjXT90d-P4K7u5x8EWs_JwgLpKuD7mVxTe70pV7yiqLVTUGR9wCoER9xmDHTNaxKqsbB-U5VxjVCHD9DteAdo5iwhN-36HWKFslIoHAGyWX4FeW8b8JqbcYOsULux80gwHxFDxySr9IjslxOfDOn8zLN9io5CNnDiHewsF7h1zq3bWYnfzb19X1DU5-NX7zN2uRODYuhsvwNvCSuZULM6h_3g0uTsFMSMTBuVhWgA1ESdOt3RHVkXxau0Y7deS8W1aXcmrmPLkKmPsfea27HWxLvIQ4JMPfqM-9Hefc_7d0Pk1bDz1vPp5bNxv6K9BB2RSgVbUTM=s250-k-rw-no',
    //         service: 'Trading Procedures',
    //         description: 'Simplied regulatory procedures for cross border trade'
    //     },
    //     {
    //         imgUrl: 'https://lh3.googleusercontent.com/fife/ABSRlIo1J9upsZHeXyyrSmJH7zY7soiUhS0Qp-hlXjZgH-8VJnoQzdc4pqbldo6miGLWyomCUj68-nsKVKTJe-1nzVRYJW5C6AS4xojyuV95cRCTkUyKvlDph9h1JokxbrhRxeyr62p5hNgu0esI_FApjB3tUOfOEIpz4GfjcISSQa7UJCH-GynvY_PODUFZV0umECt8lFDM3ABNJD5MDyQrMBajwtbV0aNslxbKQLUGh3Zuh3oDA65mAhjUffSW2XX1OszhuKDBW8U5ZIAXkqic-Rkw1M8VDac3WR4mkVxDCEz-bzscqTCctwxg_N3HVGsz5eJAMn5WYXkrm08WGhEZT7GCytWlJlbpEIT394ymfwtpFZEsgVRMBAPQ98kRaZVYXupZqwaQntMMaguOuNBjy-_R9HoMhGHwWbG0zjdHKvElXTiyghqy4xPqtG0BDkT7Y41Vh2g_wnPUE2_HyON3EbOkL0rZPYEUXg8ji120IzyC9HK3aq0x2SK8deFU8OyabPQUSQTYzWNAOU9A-O3y59fBPIzOh0MN6KXW-j8ddVWSIm4hMC4ERLs1owxJpv17B7IHgj5HKdUig5Y4y6t3IwgZvIUWIo2TyVJr75cZqr5yL9bFBRnAS47MkymMCrWGQj0tGzzWVw1_gnZSWHr4HNxathzxx7wGEu2WySJ66F9rqHzjKREX1-CO62uTOJMs4G-BRCT4tUUdXKby2BZn0kwJZUxkuEl9upJv=s136-w136-h126-no?authuser=0',
    //         service: 'Market Prices',
    //         description: 'Daily wholesale and retail price comparison for over 100 products' 
    //     }
    // ]

    return (
        <div className='servicesContainer'>
            <div className='mobile'>
                <img src='https://lh3.googleusercontent.com/aWAbdAK199Sm215zxgYWDmoJdjiAZRXViqxBz63FqISIjLMJzVaQH0p80xE3VkQqUVgrfpTNNbD6TxKF76axYaXT_rmUnuoDfhXnPl7NkvkXfINUv8zSelkV1YYf6PnozUNJC3t_0w9dLaclZgXD1ZgHw3Y2UKsSLdGlRMGv9vtpyj6LBimlCI-K-FEfjdAHZDxDKmd9C7xw0EZZT259U1P_bqGmyFj7MCdKKxfO5mpLeYsU1xjS83AGJtmhuaWhKx18O9JM8Yc_-j6es5z4jdlU42a8ab_lghqH8NMYRZcro7ycWGVpB_2qYHblE5IPwEqVH9N5vaUdMIIYWpPCt6POMVbJoT-gegadWCgUqrL6iV0dTinvPavrBmUWaUmTgTjBFqJCe7f-GvkrZ21qCWSvLkn4q3ZX8fNO1xJpPLmV70lUx3mLcIS8x5m_gYHUMyIGF1cN5fwEI3sUd_qeQm96DNW5rrcF2nHnl8y1gHS4LSEi8qHYW7SFo_qPu7-X1M_XX5RXezNH2HW1ZBEPUpDLuTLaAlyy-d6DqUV4f9dL6b0gDOM7n9dUfcsQlNaO9JYxNwM4bG60Ms5p__oB94W6FmudHIcUMhIkZJAT8jWFWX9yQNc2preI9MYKDaofXHF3IohK9cBBZEKN30u5mbC57z6ia6GMdiSUOrtPTwEhlLGGCyvltpHtpMD7=w82-h130-no?authuser=0' />
                <h1> Mobile Based Services </h1>
                <p> SMS Technologies <br/> Mobile & Web Applications </p>
            </div>

            <div className='trading'>
                <img src='https://lh3.googleusercontent.com/Bj4804-rSWUfwbH1CQj3VAuuecvsD1e0c3KZKGH-6HSaOA3-6Nw2Gz_MCqfZALljs0j58K1iu1VFeBa4iO0LOJFVHOjBobet7bXKSHAvQNszK_ym7XwbYgrpEkRjCHkKQ2cP5cIHsUJvsmSdLxTuol3IMeK-hQ_6IQikW_feuCQB9Hzz4vj-in-H8Bvu1v0aJ67n6TU5p-l95kGYe2uRtOSvaKYx4J290V_jaNT0CCQnpQFF0psuMcqe4_KWflg7dqjxZ13_nbsJaZlIkGHl3wnq7FBslt5Col97nh0rUQqcajra_n7U7b5nLagwARWUqOQNv0pwCYFzjvppdT_1k8EItul_9BRUJLA7joY8S7VTnT1pG-xazjXT90d-P4K7u5x8EWs_JwgLpKuD7mVxTe70pV7yiqLVTUGR9wCoER9xmDHTNaxKqsbB-U5VxjVCHD9DteAdo5iwhN-36HWKFslIoHAGyWX4FeW8b8JqbcYOsULux80gwHxFDxySr9IjslxOfDOn8zLN9io5CNnDiHewsF7h1zq3bWYnfzb19X1DU5-NX7zN2uRODYuhsvwNvCSuZULM6h_3g0uTsFMSMTBuVhWgA1ESdOt3RHVkXxau0Y7deS8W1aXcmrmPLkKmPsfea27HWxLvIQ4JMPfqM-9Hefc_7d0Pk1bDz1vPp5bNxv6K9BB2RSgVbUTM=s250-k-rw-no' />
                <h1> Trading Procedures </h1>
                <p> Simplied regulatory procedures <br/> for cross border trade </p>
            </div>

            <div className='market'>
                <img src='https://lh3.googleusercontent.com/fife/ABSRlIo1J9upsZHeXyyrSmJH7zY7soiUhS0Qp-hlXjZgH-8VJnoQzdc4pqbldo6miGLWyomCUj68-nsKVKTJe-1nzVRYJW5C6AS4xojyuV95cRCTkUyKvlDph9h1JokxbrhRxeyr62p5hNgu0esI_FApjB3tUOfOEIpz4GfjcISSQa7UJCH-GynvY_PODUFZV0umECt8lFDM3ABNJD5MDyQrMBajwtbV0aNslxbKQLUGh3Zuh3oDA65mAhjUffSW2XX1OszhuKDBW8U5ZIAXkqic-Rkw1M8VDac3WR4mkVxDCEz-bzscqTCctwxg_N3HVGsz5eJAMn5WYXkrm08WGhEZT7GCytWlJlbpEIT394ymfwtpFZEsgVRMBAPQ98kRaZVYXupZqwaQntMMaguOuNBjy-_R9HoMhGHwWbG0zjdHKvElXTiyghqy4xPqtG0BDkT7Y41Vh2g_wnPUE2_HyON3EbOkL0rZPYEUXg8ji120IzyC9HK3aq0x2SK8deFU8OyabPQUSQTYzWNAOU9A-O3y59fBPIzOh0MN6KXW-j8ddVWSIm4hMC4ERLs1owxJpv17B7IHgj5HKdUig5Y4y6t3IwgZvIUWIo2TyVJr75cZqr5yL9bFBRnAS47MkymMCrWGQj0tGzzWVw1_gnZSWHr4HNxathzxx7wGEu2WySJ66F9rqHzjKREX1-CO62uTOJMs4G-BRCT4tUUdXKby2BZn0kwJZUxkuEl9upJv=s136-w136-h126-no?authuser=0' />
                <h1> Market Prices </h1>
                <p> Daily wholesale and retail price comparison for over 100 products </p>
            </div>
        </div>
    )
}


function Join () {

    return (
        <div className='join'>
            <p
            style={{
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: 'bold',
                fontSize: '18px',
                lineHeight: '27px',
                color: '#20141D',
                textAlign: 'center',
                marginTop: '10%'
                }}
            > 
            Join Sauti and take control of your border business today  
            </p>

            <div className='reg'>
                <Link to='/register' className='p'> Sign Up </Link>
            </div>
            
        </div>
    )
}

function Testimonial () {
    return (
        <div>
            <h1 style={{
                textAlign: 'center',
                fontWeight: '700',
                fontFamily: 'Poppins',
                fontSize: '24px',
                lineHeight: '36px',
                color: '#20141D',
                marginTop: '10%',
                marginBottom: '5%'
            }}> What traders are saying about Sauti </h1>

            <Review />
        </div>
    )
}

function Review () {

    return (
        <div className='reviewContainer'>
            <div className='review1'>
                <p> “With Sauti now, at the comfort of my couch or kitchen, I can get all <br /> the business and customs information I need right in my cheap old <br /> phone. I’m now more confident to pass through the gazetted route <br /> and not scared of personally clearing my goods."</p>
                <h1>-Middy Amule, Cross-Border Trader, Busia, Uganda</h1>
            </div>

            <div className='review2'>
                <p> “Sauti is like a secret partner in my business – it’s there to give me <br /> information before I go to the market and help me estimate my <br /> profit. Before I even leave my house I know the price of groundnuts <br /> in Gulu and Lira, the current exchange rate and the amount of tax I <br /> will pay” </p>
                <h1> -Edna Mudibo, Cross-Border Trader, Busia, Kenya </h1>
            </div>
        </div>
    )
}

export default function Landing () {
    return (
        <div>
            <div className='bb'>
                <Nav />
                <Header />
                <Service />
            </div>
        </div>
    )
}