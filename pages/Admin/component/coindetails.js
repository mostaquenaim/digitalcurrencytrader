import Image from 'next/image'

export default function CoinDetails() {
  return (
    <>
      <section className="text-gray-600 body-font" style={{ marginLeft: '250px', backgroundColor: '#f8f8f8' }}>
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Cryptocurrency Coin Details</h1>
              <div className="h-1 w-20 bg-red-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Explore the details of various cryptocurrencies including Bitcoin, Ethereum, Dogecoin, and more.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://images.barrons.com/im-405914?width=300&size=1.5" alt="Bitcoin" />
                <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">Cryptocurrency</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Bitcoin</h2>
                <p className="leading-relaxed text-base">Bitcoin is the first and most well-known cryptocurrency. It was created in 2009 by an anonymous person or group of people using the pseudonym Satoshi Nakamoto.</p>
                {/* <!-- Add more details about Bitcoin like its price, sold details, etc. --> */}
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://www.forbes.com/advisor/wp-content/uploads/2021/03/ethereum-1.jpeg" alt="Ethereum" />
                <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">Cryptocurrency</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Ethereum</h2>
                <p className="leading-relaxed text-base">Ethereum is a decentralized, open-source blockchain platform that enables the creation of smart contracts and decentralized applications (DApps).</p>
                {/* <!-- Add more details about Ethereum like its price, sold details, etc. --> */}
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://www.vauld.com/insights/wp-content/uploads/2021/11/shutterstock_1907571817.jpg" alt="Dogecoin" />
                <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">Cryptocurrency</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Dogecoin</h2>
                <p className="leading-relaxed text-base">Dogecoin is a cryptocurrency that was created as a joke in 2013. Despite its origins, it has gained a significant following and has been used for charitable causes.</p>
                {/* <!-- Add more details about Dogecoin */}
                {/* <!-- Add more details about Dogecoin like its price, sold details, etc. --> */}
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://v2.cimg.co/news/96875/241177/xrp.jpg" alt="Ripple" />
                <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">Cryptocurrency</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Ripple</h2>
                <p className="leading-relaxed text-base">Ripple is both a digital payment protocol and a cryptocurrency. It aims to enable fast, low-cost international money transfers and financial settlements.</p>
                {/* <!-- Add more details about Ripple like its price, sold details, etc. --> */}
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
    <div className="bg-gray-100 p-6 rounded-lg">
      <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://img.freepik.com/premium-vector/cardano-ada-gold-coin-white-background-cryptocurrency-blockchain-digital-currency_674449-383.jpg?w=2000" alt="Cardano" />
      <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">Cryptocurrency</h3>
      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Cardano</h2>
      <p className="leading-relaxed text-base">Cardano is a blockchain platform that aims to provide a more secure and sustainable platform for the development of decentralized applications and smart contracts.</p>
      {/* <!-- Add more details about Cardano like its price, sold details, etc. --> */}
    </div>
  </div>
  <div className="xl:w-1/4 md:w-1/2 p-4">
    <div className="bg-gray-100 p-6 rounded-lg">
      <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://img.capital.com/imgs/articles/1200x627x1/shutterstock_1977349304.jpg" alt="Polkadot" />
      <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">Cryptocurrency</h3>
      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Polkadot</h2>
      <p className="leading-relaxed text-base">Polkadot is a multi-chain platform that enables various blockchains to interoperate and share information securely and efficiently.</p>
      {/* <!-- Add more details about Polkadot like its price, sold details, etc. --> */}
    </div>
  </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className="bg-gray-100 p-6 rounded-lg">
                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://originstamp.com/blog/what-is-litecoin-and-what-is-it-used-for/litecoin.jpeg" alt="Litecoin" />
                <h3 className="tracking-widest text-red-500 text-xs font-medium title-font">Cryptocurrency</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Litecoin</h2>
                <p className="leading-relaxed text-base">Litecoin is a peer-to-peer cryptocurrency that was created as a "lite" version of Bitcoin. It offers faster transaction confirmation times and a different hashing algorithm.</p>
                {/* <!-- Add more details about Litecoin like its price, sold details, etc. --> */}
              </div>
            </div>
            {/* <!-- Add more cryptocurrency coins and their details here --> */}
          </div>
        </div>
      </section>
    </>
  );
}

