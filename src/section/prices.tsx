import React from 'react';
import Container from '../components/container';

const Prices: React.FC = () => {
    const prices = [
        { service: "Ремонт стиральных машин", price: "От 500р." },
        { service: "Ремонт посудомоек", price: "От 400р." },
        { service: "Ремонт холодильников и сплит систем", price: "От 1500р." }
    ];

    return (
        <section className="py-20 bg-[#3ca7db]">
            <Container>
                <h2 className="text-4xl font-bold text-white text-center mb-16">Цены на наши услуги</h2>
                <div className="max-w-4xl mx-auto space-y-4">
                    <div className="bg-[#efefef] rounded-xl p-8" style={{ backgroundColor: 'rgba(239, 239, 239, 0.09)' }}>
                        {prices.map((item, index) => (
                            <div key={index} className="bg-[#efefef] rounded-xl p-6 flex justify-between items-center mb-4 last:mb-0" style={{ backgroundColor: 'rgba(239, 239, 239, 0.3)' }}>
                                <span className="text-xl text-white">{item.service}</span>
                                <span className="text-xl font-bold text-white">{item.price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Prices;
