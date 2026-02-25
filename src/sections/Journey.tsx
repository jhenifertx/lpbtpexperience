"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatedBlobs } from '@/components/ui/AnimatedBlobs';

import { JOURNEY_STEPS } from '@/lib/constants';

export const Journey = () => {
    const [expandedIndices, setExpandedIndices] = useState<number[]>(
        JOURNEY_STEPS.map((_, index) => index)
    );

    const toggleAccordion = (index: number) => {
        setExpandedIndices(prev =>
            prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
        );
    };

    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden" id="services">
            {/* Animated Light Effects (Prime Design System) */}
            <AnimatedBlobs />

            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
                <div className="text-center mb-20 relative z-10">
                    <div className="inline-block px-4 py-2 bg-[var(--primary)]/5 text-[var(--primary)] rounded-full text-sm font-bold mb-6 border border-[var(--primary)]/10">
                        NOSSOS SERVIÇOS
                    </div>
                    <h2 className="text-3xl lg:text-[40px] font-bold font-heading text-[var(--secondary)] mb-6 leading-tight">
                        Da avaliação à <span className="text-[var(--primary)]">operação inteligente</span>
                    </h2>
                </div>

                {/* Vertical Accordion Timeline */}
                <div className="max-w-3xl mx-auto mb-32">
                    <div className="flex flex-col gap-4 relative">
                        {JOURNEY_STEPS.map((step, index) => {
                            const isExpanded = expandedIndices.includes(index);

                            return (
                                <div key={index} className="flex gap-6 lg:gap-8 group">
                                    {/* Timeline Node & Line */}
                                    <div className="relative shrink-0 flex flex-col items-center">
                                        <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-white border-4 flex items-center justify-center text-lg lg:text-xl font-bold shadow-sm transition-all duration-300 z-10 relative 
                                            ${isExpanded ? 'border-[var(--primary)] text-[var(--primary)]' : 'border-gray-100 text-[var(--secondary)] group-hover:border-[var(--primary-light)] group-hover:text-[var(--primary-light)]'}`}>
                                            {step.number}
                                        </div>
                                        {/* Connector Line */}
                                        {index !== JOURNEY_STEPS.length - 1 && (
                                            <div className={`w-1 bg-gray-100 flex-grow transition-all duration-300 ${isExpanded ? 'bg-gradient-to-b from-[var(--primary)] to-transparent opacity-30' : ''} my-1`}></div>
                                        )}
                                    </div>

                                    {/* Accordion Content */}
                                    <div className="flex-grow pt-2 lg:pt-3 pb-8">
                                        <button
                                            onClick={() => toggleAccordion(index)}
                                            className="w-full flex items-center justify-between text-left focus:outline-none group/btn"
                                            aria-expanded={isExpanded}
                                        >
                                            <h3 className={`font-bold font-heading text-xl lg:text-2xl transition-colors duration-300 ${isExpanded ? 'text-[var(--primary)]' : 'text-[var(--secondary)] group-hover/btn:text-[var(--primary-light)]'}`}>
                                                {step.title}
                                            </h3>
                                            <div className={`shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isExpanded ? 'bg-[var(--primary)]/10 text-[var(--primary)] rotate-180' : 'bg-gray-50 text-gray-400 group-hover/btn:bg-[var(--primary-light)]/10 group-hover/btn:text-[var(--primary-light)]'}`}>
                                                <ChevronDown className="w-5 h-5" />
                                            </div>
                                        </button>

                                        <div
                                            className={`grid transition-all duration-300 ease-in-out origin-top
                                                ${isExpanded ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'}
                                            `}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100/50">
                                                    <p className="text-gray-600 font-medium leading-relaxed text-[15px] lg:text-base">
                                                        {step.subtitle}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>


            </div>
        </section>
    );
};
