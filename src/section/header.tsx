import React from 'react';
import Container from '../components/container';
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
    return (
        <header className="w-full bg-white shadow-sm">
            <Container>
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center gap-2">
                        <div className="w-12 h-12 rounded flex items-center justify-center">
                            <Link href="/">
                                <Image src="/static/logo.png" alt="Логотип" width={60} height={55} className="rounded"/>
                            </Link>
                        </div>
                    </div>

                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <div className="rounded-full flex items-center justify-center">
                                <Link href="/">
                                    <Image src="/static/gps.png" alt="Логотип" width={20} height={25} className="rounded"/>
                                </Link>
                            </div>
                            <div className="text-gray-700">
                                <div className="font-medium">Ваш город: Волгоград</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="rounded-full flex items-center justify-center">
                                <Link href="/">
                                    <Image src="/static/watch.png" alt="Логотип" width={20} height={26} className="rounded"/>
                                </Link>
                            </div>
                            <div className="text-gray-700">
                                <div className="font-medium">Время работы:</div>
                                <div className="text-sm">с 9:30 до 18:00 Пн-Пт</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2">
                            <div className="rounded-full flex items-center justify-center">
                                <Link href="/">
                                    <Image src="/static/phone.png" alt="Логотип" width={20} height={25} className="rounded"/>
                                </Link>
                            </div>
                            <div className="text-gray-700">
                                <div className="font-medium">+7(863) 203 60 48</div>
                                <div className="font-medium">+7(863) 203 70 33</div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;