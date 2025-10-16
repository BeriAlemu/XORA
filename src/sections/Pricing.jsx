import { useState } from "react";
import { Element } from "react-scroll";
import { clsx } from "clsx";

function Pricing (){
   const [monthly, setMonthly] = useState(false);
    return(
        <section>
            <Element name="pricing">
                <div className="container">
                    <div className="max-w-960 pricing-ead_before relative mx-auto border-l border-r border-s2
                    bg-s1/50 pb-40 pt-28 max-xl:max-w-4xl max-lg:border-none max-md:pb-32 max-md:pt-16">
                        <h3 className="h3 max-lg:h4 max-md:h5 z-3 relative mx-auto mb-14 
                        max-w-lg text-center text-p4 max-md:mb-11 max-sm:max-w-sm">
                           Flexible pricing for teams of all sizes
                        </h3>

                        <div className="relative z-4 mx-auto flex w-[375px] rounded-3xl 
                        border-[3px] border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px] max-md:w-[310px]">
                            <button onClick={() => setMonthly(true)} 
                            className={clsx("pricing-head_btn", monthly && "text-p4" )}>
                                Monthly
                            </button>
                            <button onClick={() => setMonthly(true)} 
                            className={clsx("pricing-head_btn", !monthly && "text-p4")}>
                                Annual
                            </button>

                            <div className="g4 rounded-14 pricing-head_btn_before 
                            absolute top-2 left-2s before:h-100 h-[calc(100%-16px)] w-[calc(50%-8px)] 
                            overflow-hidden shadow-400 transition-transform duration-500"/>
                        </div>
                    </div>
                </div>
            </Element>
        </section>
    )
}

export default Pricing;
