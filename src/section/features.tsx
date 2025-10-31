import React from 'react';
import Container from '../components/container';
import Image from "next/image";
import Link from "next/link";

const Features: React.FC = () => {
    const features = [
        {
            title: "Выезд мастера",
            description: "В удобное для Вас время. На дом или в офис!",
            image: "/static/bag.jpg"
        },
        {
            title: "Диагностика",
            description: "С использованием современного оборудования",
            image: "/static/feat.jpg"
        },
        {
            title: "Расширенная гарантия",
            description: "На все запчасти и выполненные услуги",
            image: "/static/med.jpg"
        }
    ];

    return (
        <section className="py-20 bg-[#3ca7db] relative overflow-hidden">
            <Container>
                <h2 className="text-4xl font-bold text-white text-center mb-16">Сервис <span className="text-red-500">INOVAC</span> предлагает лучшее</h2>
                <div className="w-full h-full grid grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="  rounded-xl h-48 flex flex-col"
                            style={{
                                backgroundImage: `url(${feature.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            <div className="absolute inset-0  bg-opacity-50 rounded-xl"></div>
                            <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                                    <p className="text-white mb-6 whitespace-pre-line">{feature.description}</p>
                                </div>
                                <div className="flex items-end">
                                    <div></div>
                                    <p className="flex text-2xl font-bold text-red-500">БЕСПЛАТНО</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

            <div className="absolute top-10 left-10 w-32 h-32 ">
                <Image src="/static/gr.png" alt="Логотип" width={150} height={170} className="rounded"/>
            </div>
            <div className="absolute bottom-10 right-10 w-32 h-32"><Image src="/static/gr.png" alt="Логотип" width={150} height={170} className="rounded"/></div>
        </section>
    );
};

export default Features;
