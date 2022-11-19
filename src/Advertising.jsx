import React from 'react'
import AdvertisingCSS from './Advertising.module.css'
import image1 from './assets/picture.png'
import image2 from './assets/image2.png'
import image3 from './assets/image3.png'
import image4 from './assets/image4.png'
import image5 from './assets/image5.png'
import image6 from './assets/image6.png'

const Advertising = () => {
  return (
    <section className={AdvertisingCSS.advertiser}>
        <div className={AdvertisingCSS.section1}>
            <div className={AdvertisingCSS.diver}>
                <h2 className={AdvertisingCSS.Intro}>
                    You want to target <span>developers</span> right?
                </h2>
                <p>
                    If you want to target devlopers you are in the right place to post your ads. 
                    DevAsk puts your brand in the faces of thousands of developers to boost your ad conversion.
                </p>
                <button>
                    Get Started
                </button>
            </div>
            <div>
                <img src={image1} alt="" className={AdvertisingCSS.headerimg}/>
            </div>
        </div>

        <div className={AdvertisingCSS.card}>
            <h2>
                What can we do for you?
            </h2>
            <div className={AdvertisingCSS.cardlist}>
                <div className={AdvertisingCSS.cards}>
                    <h3>
                        Build brand awareness
                    </h3>
                    <p>
                        Become popular in your niche and 
                        increase brand recognition, trustworthiness, and credibility.
                    </p>
                </div>
                <div className={AdvertisingCSS.cards}>
                    <h3>
                        Target & convert leads
                    </h3>
                    <p>
                        Influence high-intent prospects searching for solutions during their 
                        consideration phase.
                    </p>            
                </div>
                <div className={AdvertisingCSS.cards}>
                    <h3>
                        Increase your website traffic
                    </h3>
                    <p>
                        Promote marketing content, 
                        drive traffic to your tech-related website, and boost conversions.
                    </p>
                </div>
            </div>
            <div className={AdvertisingCSS.button}>
                <button>Get Started</button>
            </div>
        </div>

        <div className={AdvertisingCSS.partners}>
            <h3>
                Join other brands advertising on DevAsk
            </h3>
            <div className={AdvertisingCSS.partnerlist}>
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
                <img src={image6} alt="" />
                <img src={image5} alt="" />
            </div>
        </div>

        <div className={AdvertisingCSS.finaltext}>
            <h3>
                Are you ready to get conversion?
            </h3>
            <p>Let's get you started </p>
            <button>Get Started</button>
        </div>
    </section>
  )
}

export default Advertising