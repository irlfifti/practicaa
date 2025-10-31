import React from 'react';
import Container from '../components/container';

const Services: React.FC = () => {
    const services = [
        {
            title: "Ремонт стиральных машин",
            image: "/static/stitalka.png"
        },
        {
            title: "Ремонт вытяжки",
            image: "/static/st.png"
        },
        {
            title: "Ремонт посудомоек",
            image: "/static/posuda.png"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <Container>
                <h2 className="text-4xl text-gray-900 font-bold text-center mb-16">Ремонт любых побутовой техники INOVAC</h2>
                <div className="grid grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-[#efefef] rounded-xl p-8 text-center justify-center content-center text-gray-900">
                            <div className="w-full h-48 mb-6 rounded-lg overflow-hidden">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <button className="bg-[#0391d3] cursor-pointer text-white px-8 py-3 rounded-lg text-base font-medium hover:bg-blue-600 transition-colors">
                                Вызвать мастера
                            </button>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Services;
