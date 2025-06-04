'use client';
import React from 'react';
import { theme } from '@/styles/theme';


export const AboutValue: React.FC = () => {
    return (
        <section
            className="py-16 lg:py-24"
            style={{ backgroundColor: theme.colors.background.tertiary + '30' }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2
                        className="text-3xl lg:text-4xl font-display font-bold mb-6"
                        style={{ color: theme.colors.text.primary }}
                    >
                        Our Core Values
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: "🎯",
                            title: "Excellence",
                            description: "We strive for excellence in every aspect of our service, from driver training to vehicle maintenance."
                        },
                        {
                            icon: "🤝",
                            title: "Reliability",
                            description: "Count on us to be there when you need us most. Punctuality and dependability are our promises to you."
                        },
                        {
                            icon: "💫",
                            title: "Innovation",
                            description: "We continuously embrace new technologies and practices to enhance your transportation experience."
                        }
                    ].map((value, index) => (
                        <div
                            key={index}
                            className="text-center group animate-fade-in-up"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div
                                className="w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
                                style={{ background: theme.gradients.gold }}
                            >
                                {value.icon}
                            </div>
                            <h3
                                className="text-xl font-bold mb-3 group-hover:opacity-80 transition-colors duration-300"
                                style={{ color: theme.colors.text.primary }}
                            >
                                {value.title}
                            </h3>
                            <p
                                className="leading-relaxed"
                                style={{ color: theme.colors.text.secondary }}
                            >
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}