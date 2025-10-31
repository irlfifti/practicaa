import React from 'react';
import Container from '../components/container';

const Hero: React.FC = () => {
    return (
        <section className="relative bg-[#f8f8f8] pt-20 pb-32 overflow-hidden">
            <Container>
                <div className="flex items-center gap-12">
                    <div className="flex-1">
                        <h1 className="text-5xl font-bold text-gray-900 mb-6">
                            Сервисный центр<br />
                            <span className="text-[#0391d3]">INOVAC</span> в Волгограде
                        </h1>
                        <p className="text-2xl text-gray-700 mb-10">
                            Обходитесь без лишних затрат
                        </p>
                        <button className="bg-[#0391d3] text-white px-12 py-4 rounded-full text-lg font-medium hover:bg-blue-600 transition-colors">
                            Вызвать мастера
                        </button>
                    </div>

                    <div className="flex-1  ">
                        <div className="   "></div>
                        <div className=" relative  z-10 ">
                            <img
                                src="/static/mas.png"
                                alt="Мастер с инструментами"
                                className=" z-20 relative    "
                                width={325}

                            />


                        </div>
                    </div>
                    <img
                        src="/static/Rec.png"
                        alt="Мастер с инструментами"
                        className="    absolute right-0 lg:relative sm:hidden bg-none  "
                        width={720}

                    />
                </div>
            </Container>
        </section>
    );
};

export default Hero;