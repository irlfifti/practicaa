import React from 'react';
import Container from '../components/container';

const Reviews: React.FC = () => {
    const reviews = [
        {
            name: "Константин",
            text: "С сайтом и сервисом этой компании всё просто отлично! Качество товара соответствует заявленному. Буду и впреть пользоваться товарами с этого сайта, и смело могу рекомендовать его людям.",
            avatar: "/static/kosta.png"
        },
        {
            name: "Алина",
            text: "Хочу выразить благодарность компании за качественно выполненную работу по ремонту стиральной машины! Все было качественно и оперативно: от принятия заявки диспетчером до работы мастера!",
            avatar: "/static/alina.png"
        },
        {
            name: "Дмитрий",
            text: "Благодарны за качественное и профессиональное обслуживание, быстро откликнулись. Мастер Сергей приехал в назначенное время, сделал все хорошо",
            avatar: "/static/dima.png"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <Container>
                <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">Отзывы</h2>
                <div className="grid grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="border border-[#3ca7db] rounded-lg p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-16 h-16 rounded-full"
                                />
                                <h3 className="text-lg text-gray-700 font-bold">{review.name}</h3>
                            </div>
                            <p className="text-gray-600 leading-relaxed">{review.text}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Reviews;