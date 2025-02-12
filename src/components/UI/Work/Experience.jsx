import './experience.css';
import React, { useState } from 'react';

function Experience() {
    const [activeTab, setActiveTab] = useState('Shaligram');

    const handleTabClick = (company) => {
        setActiveTab(company);
    };

    return (
        <div className="experience-container" id='experience'>
            <h2 className="experience-heading">Experience</h2>
            <div className="experience-content">
                <div className="tabs">
                    <button 
                        className={`tab-button ${activeTab === 'Shaligram' ? 'active' : ''}`} 
                        onClick={() => handleTabClick('Shaligram')}>
                        <strong>02.</strong> Shaligram Infotech LLP
                    </button>
                    
                    <button 
                        className={`tab-button ${activeTab === 'Kudos' ? 'active' : ''}`} 
                        onClick={() => handleTabClick('Kudos')}>
                        <strong>01.</strong> KudosIntech Software Pvt. Ltd.
                    </button>
                </div>

                <div className="tab-content">
                    {activeTab === 'Shaligram' && (
                        <div className="experience-details fade-in">
                            <h4>Sr. Software Engineer <span>[ Oct 2023 - Present ]</span></h4>
                            <ul>
                                <li>Leveled up to <span className='highlighted-text'>Sr. Software Engineer</span> at Shaligram—finally, my code had a title as cool as it deserved!</li>
                                <li>Took on <span className='highlighted-text'>higher-level, complex projects</span> that pushed my limits and sharpened my problem-solving ninja skills. 🥷</li>
                                <li>Went deep into <span className='highlighted-text'>core PHP</span>, polished my <span className='highlighted-text'>WordPress</span> and <span className='highlighted-text'>WooCommerce</span> expertise, and built some seriously <span className='highlighted-text'>complex jQuery modules</span> (yes, it got <span className='highlighted-text'>that</span> intense).</li>
                                <li>The experience environment? <span className='highlighted-text'>Friendly and chill</span>—perfect for balancing intense coding sessions with occasional coffee-fueled brainstorming!</li>
                                <li>With a bit of breathing room after experience, I started exploring the <span className='highlighted-text'>React</span> universe and diving deeper into <span className='highlighted-text'>JavaScript</span>. (Spoiler: I’m loving it! 🚀)</li>
                                <li>Still at Shaligram, still learning new things every day, and after experience hours, you’ll find me refining my <span className='highlighted-text'>React skills</span> and plotting my next big tech adventure.</li>
                            </ul>
                        </div>
                    )}
                    
                    {activeTab === 'Kudos' && (
                        <div className="experience-details fade-in">
                            <h4>Software Engineer <span>[ Oct 2019 - Sep 2023 ]</span></h4>
                            <ul>
                                <li>Joined Kudos as a <span className='highlighted-text'>fresh-faced Software Engineer</span> — with a head full of dreams and code!</li>
                                <li>Kicked things off with <span className='highlighted-text'>3 months of training</span>, diving into the <span className='highlighted-text'>building blocks of web development</span>: PHP, HTML, CSS, and jQuery (aka my new best friends).</li>
                                <li>After training, Kudos saw my <span className='highlighted-text'>potential and unstoppable curiosity</span> — they confirmed my employment and threw me into <span className='highlighted-text'>real projects</span> (no pressure, right?).</li>
                                <li>Learned the ropes of the <span className='highlighted-text'>corporate world</span>: from navigating office coffee machines to mastering <span className='highlighted-text'>WordPress framework</span> and crafting slick <span className='highlighted-text'>frontend solutions</span> with jQuery.</li>
                                <li>Took charge of <span className='highlighted-text'>solo projects</span> like a boss, trained <span className='highlighted-text'>junior developers</span>, and even became the go-to person for <span className='highlighted-text'>client communication</span>—yes, <span className='highlighted-text'>I can code and talk</span>!</li>
                                <li>Specialized in <span className='highlighted-text'>custom WordPress solutions</span>, building everything from <span className='highlighted-text'>eCommerce stores</span> to <span className='highlighted-text'>custom field blocks</span> and integrating those tricky <span className='highlighted-text'>payment gateways</span>.</li>
                                <li>Four years flew by faster than a jQuery function call! I grew, learned, and loved every minute at Kudos. 🚀</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Experience;
