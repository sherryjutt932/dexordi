import React from "react";
import "./style.css";
import TextEffect from "../TextEffect";

import twitter from "../../assets/logos/twitter.png";
import telegram from "../../assets/logos/telegram.png";
import discord from "../../assets/logos/discord.png";
import gitbook from "../../assets/logos/book.png";

import HIRO from "../../assets/wallets/HIRO.png";
import PHANTOM from "../../assets/wallets/PHANTOM.jpeg";
import ordinal from "../../assets/wallets/ordinal.jpeg";
import OKX from "../../assets/wallets/OKX.png";
import Xverse from "../../assets/wallets/Xverse.png";
import UNISAT from "../../assets/wallets/UNISAT.jpg";

export default function Wallets() {
    const cardData = [
        {
            img:OKX,
            src:"https://www.okx.com/web3",
            title:"OKX WALLET",
            detail:"The ordinals marketplace for pro NFT traders.",
            links:{
                twitter:"https://twitter.com/okxweb3?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
                telegram:"https://t.me/OKXOfficial_English",
                discord:"https://discord.com/invite/okx",
                gitbook:"https://bisoswap.gitbook.io/bisoswap/how-to-connect-okx-wallet",
            }
        },
        {
            img:Xverse,
            src:"https://www.xverse.app/",
            title:"Xverse WALLET",
            detail:"The ordinals marketplace for pro NFT traders.",
            links:{
                twitter:"https://twitter.com/xverseApp?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
                telegram:"https://www.xverse.app/",
                discord:"https://www.xverse.app/",
                gitbook:"https://onchainmonkey.gitbook.io/wiki/im-new-start-here/buying-my-first-bitcoin-ordinal/setting-up-a-bitcoin-wallet",
            }
        },
        {
            img:UNISAT,
            src:"https://unisat.io/",
            title:"UNISAT WALLET",
            detail:"The ordinals marketplace for pro NFT traders.",
            links:{
                twitter:"https://twitter.com/unisat_wallet",
                telegram:"https://link3.to/unisat",
                discord:"https://discord.com/invite/unisat",
                gitbook:"https://docs.unisat.io/dev/unisat-developer-service",
            }
        },
        {
            img:HIRO,
            src:"https://leather.io/",
            title:"HIRO WALLET",
            detail:"The ordinals marketplace for pro NFT traders.",
            links:{
                twitter:"https://twitter.com/hirowallet?lang=en",
                telegram:"https://leather.io/",
                discord:"https://discord.com/invite/67cZyTz8w6",
                gitbook:"https://leather.gitbook.io/developers/home/welcome",
            }
        },
        {
            img:PHANTOM,
            src:"https://phantom.app/",
            title:"PHANTOM MARKET",
            detail:"The ordinals marketplace for pro NFT traders.",
            links:{
                twitter:"https://twitter.com/phantom",
                telegram:"https://phantom.app/",
                discord:"https://docs.phantom.app/introduction/readme",
                gitbook:"https://docs.phantom.app/introduction/readme",
            }
        },
        {
            img:ordinal,
            src:"https://ordinalswallet.com/",
            title:"ORDINALS MARKET",
            detail:"The ordinals marketplace for pro NFT traders.",
            links:{
                twitter:"https://twitter.com/ordinalswallet",
                telegram:"https://t.me/s/OrdinalsDaily?q=%23Ordinals",
                discord:"https://discord.com/channels/987504378242007100/1071168059160674475",
                gitbook:"https://ordinals-wallet.gitbook.io/api/",
            }
        }
    ]
  return (
    <div className="wallets">
        <div className="bg"></div>

      <div className="content mountAnimBelow">
        <h1>
          <TextEffect>
            <span>integrated WALLET</span>
          </TextEffect>
        </h1>
        <p>
        securely store, send, and receive Bitcoin, and create and store Ordinal NFT inscriptions 
        </p>
        <small>
        Special thanks to the Okx wallet team for their help!
        </small>
      </div>

      <div className="cardContainer">
       {
        cardData.map((item, index)=>{
            return(
                <div key={index} className="WalletCard mountAnimBelow">
                <div className="imgCon">
                    <a href={item.src} target="_blank"  rel="noreferrer">
                    <img src={item.img} alt={item.title + "image"} />
                    </a>
                </div>
                <div className="detailCon">
                  <h2>{item.title}</h2>
                  <p>{item.detail}</p>
                </div>
                <div className="icons">
                  <a target="_blank"  rel="noreferrer" href={item.links.twitter}>
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a target="_blank"  rel="noreferrer" href={item.links.telegram}>
                    <img src={telegram} alt="telegram" />
                  </a>
                  <a target="_blank"  rel="noreferrer" href={item.links.discord}>
                    <img src={discord} alt="discord" />
                  </a>
                  <a target="_blank"  rel="noreferrer" href={item.links.gitbook}>
                    <img src={gitbook} alt="gitbook" />
                  </a>
                </div>
              </div>
            )
        })
       }
      </div>
    </div>
  );
}
