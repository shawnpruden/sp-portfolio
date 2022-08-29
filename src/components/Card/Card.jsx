import React, { useState, useEffect, useRef } from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { RiGithubLine, RiShareForwardBoxLine } from 'react-icons/ri';

import './Card.scss';

function Card({ item: { name, image, skills, url, repo }, index }) {
  const [isActive, setIsActive] = useState(false);

  const leftCardRef = useRef();
  const rightCardRef = useRef();
  const cardRef = index % 2 === 0 ? leftCardRef : rightCardRef;

  useEffect(() => {
    const leftCard = leftCardRef.current;
    const rightCard = rightCardRef.current;

    ScrollTrigger.saveStyles([leftCard, rightCard]);

    ScrollTrigger.matchMedia({
      '(min-width: 960px)': function () {
        if (index % 2 === 0) {
          gsap.from(leftCard, {
            duration: 1,
            x: '100%',
            opacity: 0,

            scrollTrigger: {
              start: 'top center',
              trigger: leftCard,
              toggleActions: 'restart complete none reverse',

              onEnter: () => {
                setTimeout(() => {
                  setIsActive(true);
                }, 1000);
              },
              onLeaveBack: () => {
                setIsActive(false);
              },
            },
          });
        } else {
          gsap.from(rightCard, {
            duration: 1,
            x: '-100%',
            opacity: 0,

            scrollTrigger: {
              start: 'top center',
              trigger: rightCard,
              toggleActions: 'restart complete none reverse',

              onEnter: () => {
                setTimeout(() => {
                  setIsActive(true);
                }, 1000);
              },

              onLeaveBack: () => {
                setIsActive(false);
              },
            },
          });
        }
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();

    window.open(repo, '_blank');
  };

  return (
    <li
      className={`card ${!isActive && 'disabled'}`}
      ref={cardRef}
      onClick={() => window.open(url, '_blank')}
    >
      <div className="card-image">
        <img src={image} alt={name} />
      </div>

      <div className="card-wrapper-left">
        <div className="card-content">
          <h4 className="card-title">{name}</h4>

          <p className="card-skills">{skills.join(' | ')}</p>
          <p className="card-overview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            velit quo error! Architecto, officiis reiciendis?
          </p>
        </div>
      </div>

      <div className="card-wrapper-right">
        <div className="card-content">
          <div className="card-buttons">
            <button position="left" onClick={handleClick}>
              <i>
                <RiGithubLine />
              </i>
              <span>Details</span>
            </button>

            <button position="right">
              <i>
                <RiShareForwardBoxLine />
              </i>
              <span>Website</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Card;
