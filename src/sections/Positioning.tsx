import React from 'react';

export const Positioning = () => {
    const listItems = [
        "Joule e IA generativa",
        "SAP Business Technology Platform (BTP)",
        "Clean Core sustentável",
        "Integrações modernas e governadas",
        "Arquitetura preparada para escala"
    ];

    return (
        <section className="py-24 bg-[#E8EFF3] relative overflow-hidden flex justify-center items-center">
            {/* Background Decoration */}
            <div className="absolute left-[-128px] top-[254px] w-[256px] h-[256px] bg-[#004A8F]/5 shadow-[64px_64px_64px_rgba(0,0,0,0)] rounded-full blur-[32px]"></div>

            <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col lg:flex-row justify-center items-center z-10 gap-12 lg:gap-16">
                {/* Left Content */}
                <div className="flex-1 flex flex-col justify-start items-start gap-6 lg:ml-8 w-full">
                    <div className="px-4 py-2 bg-[#05183A]/5 rounded-full border border-[#05183A]/10 inline-flex justify-start items-start">
                        <div className="text-[#05183A] text-sm font-bold font-sans leading-tight">
                            NOSSA EXPERTISE
                        </div>
                    </div>

                    <div className="w-full pb-0.5 flex flex-col justify-start items-start">
                        <h2 className="text-[#05183A] text-3xl lg:text-[40px] font-bold font-heading leading-tight break-words">
                            <span className="md:whitespace-nowrap">Aplicamos IA no negócio real,</span><br />
                            conectando:
                        </h2>
                    </div>

                    <div className="w-full pt-2 pb-4 flex flex-col justify-start items-start gap-5">
                        {listItems.map((item, index) => (
                            <div key={index} className="w-full inline-flex justify-start items-center gap-4">
                                <div className="p-2 bg-[#2FC2FE]/10 rounded-full inline-flex flex-col justify-start items-start">
                                    <div className="relative w-5 h-5 flex justify-center items-center">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 18.3333C14.6024 18.3333 18.3334 14.6023 18.3334 9.99996C18.3334 5.39759 14.6024 1.66663 10 1.66663C5.39765 1.66663 1.66669 5.39759 1.66669 9.99996C1.66669 14.6023 5.39765 18.3333 10 18.3333Z" stroke="#004A8F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M7.5 10L9.16667 11.6667L12.5 8.33337" stroke="#004A8F" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="inline-flex flex-col justify-start items-start">
                                    <span className="text-[#333333] text-lg font-medium font-sans leading-7">
                                        {item}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full lg:w-[600px] flex justify-center relative aspect-square max-w-[600px] lg:scale-125 lg:origin-center">
                    <img
                        src="/images/img-btp25.png"
                        alt="Processo SAP BTP e Inteligência Artificial"
                        className="w-full h-full object-contain"
                    />
                </div>
            </div>
        </section>
    );
};
