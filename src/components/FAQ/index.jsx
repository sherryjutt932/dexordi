import React, { useState } from 'react';
import "./style.css";
import subIcon from "../../assets/subIcon.svg";
import addIcon from "../../assets/addIcon.svg";

export default function FAQ() {
    const faqs = [
        {
            title:"What is Dexordi and its core offerings?",
            detail: "Dexordi is a decentralized platform that encompasses various features, including an exchange, NFT marketplace, Cybord Pool for staking, swap functionality, bridge capabilities, and a launchpad for new projects.",
        },
        {
            title:"How does governance work in Dexordi?",
            detail: "Dexordi's governance is driven by $ODI (BRC20) token holders who stake their tokens. The amount of staked $ODI directly influences voting power in governance polls, allowing users to actively participate in decision-making processes.",
        },
        {
            title:"What benefits do $ODI (CBRC20) holders enjoy in the Dexordi ecosystem?",
            detail: "$ODI (CBRC20) is a utility token within Dexordi, offering advantages such as fee reduction, staking opportunities, and other utility functions, contributing to user engagement and platform sustainability.",
        },
        {
            title:"Tell us more about the Cybord Pool program.",
            detail: "The Cybord Pool program enables users to stake $ODI tokens and receive tokens from Dexordi's partner projects. The specific tokens available for earning depend on the partners participating in the program.",
        },
        {
            title:"What is the purpose of the Dexordi Launchpad?",
            detail: "The Dexordi Launchpad serves as a platform for the introduction of new projects. It allows the community to explore and engage with upcoming ventures, fostering innovation and providing opportunities for early involvement in promising initiatives.",
        },
    ];

    const [faqStates, setFaqStates] = useState(Array(faqs.length).fill(false));

    const toggleFAQ = (index) => {
    const newFaqStates = [...faqStates];
    newFaqStates[index] = !newFaqStates[index];
    setFaqStates(newFaqStates);
  };

  return (
    <section className='FAQ'>
        <h1 className='mountAnimBelow'>FAQ</h1>

        <div className='FAQCon'>
            {
                faqs.map((item, index)=>{
                    return(
                        <div key={index} className='card mountAnimBelow'>
                            <div className='head'>
                                <h3>
                                {item.title}
                                </h3>
                                <button onClick={() => toggleFAQ(index)} className={`${faqStates[index] ? 'close' : 'open'}`}>
                                    <img src={subIcon} alt="subicon" className='sub' />
                                    <img src={addIcon} alt="addicon" className='add' />
                                </button>
                            </div>
                            <div className='body' style={{ maxHeight: faqStates[index] ? `${document.getElementById(`faq-${index}`).scrollHeight}px` : '0px' }}>
            <p id={`faq-${index}`}>
              {item.detail}
            </p>
          </div>
                        </div>
                    )
                })
            }
        </div>
    </section>
  )
}
