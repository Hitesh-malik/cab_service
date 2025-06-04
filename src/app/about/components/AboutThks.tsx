'use client';
import React from 'react';
import { theme } from '@/styles/theme';


export const AboutThks: React.FC = () => {
    return (
        <section className="py-16 lg:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-fade-in-up">
                    <div
                        className="rounded-2xl p-8 lg:p-12"
                        style={{
                            background: theme.gradients.gold,
                            color: theme.colors.primary.black
                        }}
                    >
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                            Thank You for Choosing Penta Cab
                        </h3>
                        <p className="text-lg lg:text-xl leading-relaxed mb-8">
                            We look forward to serving you and being your trusted partner on the road ahead.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                className="px-8 py-3 rounded-lg font-bold transition-colors duration-300"
                                style={{
                                    backgroundColor: theme.colors.primary.black,
                                    color: theme.colors.accent.gold
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = theme.colors.background.tertiary;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = theme.colors.primary.black;
                                }}
                            >
                                Book Your Ride
                            </button>
                            <a
                                href="/contact"
                                className="border-2 px-8 py-3 rounded-lg font-bold transition-all duration-300 inline-block"
                                style={{
                                    borderColor: theme.colors.primary.black,
                                    color: theme.colors.primary.black
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.backgroundColor = theme.colors.primary.black;
                                    e.currentTarget.style.color = theme.colors.accent.gold;
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = theme.colors.primary.black;
                                }}
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}               