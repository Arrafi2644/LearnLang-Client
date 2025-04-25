import { easeIn, easeInOut, easeOut, motion } from "framer-motion"
import { useContext } from "react";
import { ThemeContext } from '../../context/ThemeContext';


const Faq = () => {
     const {themeColor} = useContext(ThemeContext)
    return (
        <div className="my-10 md:my-14 mx-4">
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: easeIn }}
            >


                {/* Section Heading */}
               
            <h2 className='text-3xl md:text-4xl text-primary-light font-bold text-center'>Frequently Asked Questions</h2>
            <p className={`text-center mb-6 ${themeColor === 'light' ? 'text-text-light' : 'text-text-dark'}`}>Find answers to common queries about booking tutors, live sessions, and using learnLang.</p>

                {/* Main content */}
                <div className="mt-6 grid gap-4 grid-cols-1 lg:grid-cols-2 px-4">
                    <figure>
                        <img
                            className="w-full h-full max-w-[98rem] object-cover rounded-md"
                            src="https://i.ibb.co.com/xtvFgtPQ/unknown-9102970-1280.jpg"
                            alt="Image of Care Matrix Building"
                        />
                    </figure>
                    <div className="space-y-4">
                        <div className="collapse collapse-arrow bg-white border border-base-300">
                            <input type="radio" name="my-accordion-2" defaultChecked />
                            <div className="collapse-title font-semibold">
                                What is learnLang and how does it work?
                            </div>
                            <div className="collapse-content text-sm">
                                learnLang is an online platform where you can easily book experienced language tutors. Browse tutors, check reviews, schedule sessions, and start learning—all in one place.
                            </div>
                        </div>

                        <div className="collapse collapse-arrow bg-white border border-base-300">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold">
                                How do I choose the right tutor for me?
                            </div>
                            <div className="collapse-content text-sm">
                                You can filter tutors by language, experience, availability, and student ratings to find the perfect match for your learning style and goals.
                            </div>
                        </div>

                        <div className="collapse collapse-arrow bg-white border border-base-300">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold">
                                Are the classes live or pre-recorded?
                            </div>
                            <div className="collapse-content text-sm">
                                All learnLang sessions are live and interactive, allowing you to communicate with your tutor in real-time for personalized learning.
                            </div>
                        </div>

                        <div className="collapse collapse-arrow bg-white border border-base-300">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold">
                                What languages can I learn on learnLang?
                            </div>
                            <div className="collapse-content text-sm">
                                We offer a wide range of languages including English, Spanish, French, Mandarin, Japanese, Arabic, and more.
                            </div>
                        </div>

                        <div className="collapse collapse-arrow bg-white border border-base-300">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold">
                                Is my personal and payment information secure?
                            </div>
                            <div className="collapse-content text-sm">
                                Absolutely. We use end-to-end encryption and secure payment gateways to ensure your data and transactions are fully protected.
                            </div>
                        </div>

                        <div className="collapse collapse-arrow bg-white border border-base-300">
                            <input type="radio" name="my-accordion-2" />
                            <div className="collapse-title font-semibold">
                                Can I reschedule or cancel a class?
                            </div>
                            <div className="collapse-content text-sm">
                                Yes! You can reschedule or cancel sessions according to the tutor's policy. Just go to your dashboard and manage your bookings easily.
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </div>
    );
};

export default Faq;
