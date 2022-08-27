import React, { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';

import './Badge.scss';
import gsap from 'gsap';

const animation = {
  duration: 0.5,
  y: 50,
  opacity: 0,
};

function Badge({ type, title, data }) {
  const titleRef = useRef();
  const badgesRef = useRef();

  const badges = gsap.utils.selector(badgesRef);

  useEffect(() => {
    const title = titleRef.current;

    ScrollTrigger.saveStyles([title, badges('.badge')]);

    ScrollTrigger.matchMedia({
      '(min-width: 960px)': function () {
        gsap.from(title, {
          ...animation,

          scrollTrigger: {
            start: '70% 80%',
            trigger: title,
            toggleActions: 'restart none none none',
          },
        });

        gsap.from(badges('.badge'), {
          delay: 0.5,
          ...animation,

          ease: 'power4.out',

          stagger: 0.2,

          scrollTrigger: {
            start: '70% 80%',
            trigger: title,
            toggleActions: 'restart none none none',

            onLeaveBack: () => {
              gsap.to(badges('.badge'), {
                ...animation,

                stagger: {
                  from: 'end',
                  amount: 0.2,
                },

                onComplete: () => {
                  gsap.to(title, {
                    ...animation,
                  });
                },
              });
            },
          },
        });
      },
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="badge-wrapper">
      <h4 ref={titleRef}>{title}</h4>

      <ul ref={badgesRef} className="badges">
        {data.map(({ title, image, fact, skills }, index) => (
          <li key={index} className="badge">
            {type === 'text' ? (
              <>
                <h5>{title}</h5>
                <p>{skills.join(' | ')}</p>
              </>
            ) : (
              <>
                <div>
                  <img src={image} alt={title} />
                </div>
                <p>{fact}</p>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Badge;
