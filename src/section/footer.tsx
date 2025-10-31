import React from 'react';
import Container from '../components/container';
import Image from "next/image";
import Link from "next/link";

const Footer: React.FC = () => {
    return (
        <section className="bg-[#f5f7f9] py-12">
            <Container>
                <div className="grid grid-cols-3 gap-8">
                    <div className="flex items-start gap-4">
                        <Link href="/">
                            <Image src="/static/logo.png" alt="Логотип" width={60} height={55} className="rounded"/>
                        </Link>
                        <div>
                            <p className="text-gray-600 text-sm">
                                Ремонт бытовой техники в Волгограде.<br />
                                Обслуживание по Европейским стандартам качества
                            </p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl text-gray-900 font-bold mb-6">Контакты</h3>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Link href="/#">
                                    <Image src="/static/phone.png" alt="Логотип" width={20} height={25} className="rounded"/>
                                </Link>
                                <div className="grid">
                                <span className="text-gray-700">+7(863) 203 60 48</span>
                                <span className="text-gray-700">+7(863) 203 70 33</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl text-gray-900 font-bold mb-6">Адрес</h3>
                        <div className="flex gap-2 items-center "> <Link className="" href="/#">
                            <Image src="/static/gps.png" alt="Логотип" width={20} height={25} className="m-2 rounded"/>
                        </Link>
                            <p className="text-gray-700 ">
                                Октябрьская улица, 22, Краснослободск,<br />
                                Среднеахтубинский район,<br />
                                Волгоградская область
                            </p>
                        </div>

                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
                    © 2024 INOVAC. Все права защищены.
                </div>
            </Container>
        </section>
    );
};

export default Footer;