import Link from "next/link";
import { NavElem } from ".";
import { ArrowRightIcon } from "@heroicons/react/outline";
import { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

import navData from "../../content/navData";

const Footer: React.FC = () => {
  const MOUSE_INTERVAL = 10; // In Milliseconds – Throttle in case of performance issues

  let mouseX = useRef<number>();
  let mouseY = useRef<number>();
  let containerRef = useRef<any>();

  const mouseMove = () => {
    setTimeout(mouseMove, MOUSE_INTERVAL);
    if (containerRef?.current?.childNodes) {
      let children = containerRef.current.childNodes;
      if (children.length) {
        children.forEach((child: any) => {
          if (child.classList.contains("arrow")) {
            let arrowX = child.offsetLeft + child.clientWidth / 2;
            let arrowY = child.offsetTop + child.clientHeight / 2;

            let diffX = (mouseX.current || 0) - arrowX;
            let diffY =
              (mouseY.current || 0) -
              arrowY +
              (window.scrollY - containerRef.current.offsetTop);

            let rot = (Math.atan2(diffY, diffX) * 180) / Math.PI;

            child.style.transform = "rotate(" + rot + "deg)";
          }
        });
      }
    }
  };

  useEffect(() => {
    if (window) {
      mouseMove();
      const handleWindowMouseMove = (event: MouseEvent) => {
        mouseX.current = event.clientX;
        mouseY.current = event.clientY;
      };
      window.addEventListener("mousemove", handleWindowMouseMove);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Arrow = (props: any) => (
    <div
      {...props}
      className="
			pb-[100%]
			relative
			arrow
			hidden
			md:block
			"
    >
      <ArrowRightIcon className="absolute hidden md:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary w-8" />
    </div>
  );

  const EmailBase = (props: any) => (
    <a
      {...props}
      href="mailto:mail@pbg.wtf"
      className={
        "md:-translate-x-1/2 md:-translate-y-1/2 " +
        (props.className ? props.className : "") // TODO: This is a workaround since twin macro for some reason dosnt support transform (properly)
      }
    >
      <span data-aos="fade-up">mail@pbg.wtf</span>
    </a>
  );

  const Email = styled(EmailBase)`
    /* The a tag - positioning */
    ${tw`
			md:absolute
			md:left-1/2
			md:top-1/2
			flex
			justify-center
			items-center
		`}
    /* The span tag - all styling */
		& > span {
      ${tw`
				font-heading
				font-bold
				text-h1
				leading-h1
				tracking-h1
				text-primary
				bg-black
				py-4
				px-8
				lg:text-[60px]
			`}
      transform-origin: 50% 50%;
      &:hover {
        animation: shake-animation 4.72s ease infinite;
      }
      /* prettier-ignore */
      @keyframes shake-animation {
				0% { transform: translate(0, 0); }
				1.78571% { transform: translate(5px, 0); }
				3.57143% { transform: translate(0, 0); }
				5.35714% { transform: translate(5px, 0); }
				7.14286% { transform: translate(0, 0); }
				8.92857% { transform: translate(5px, 0); }
				10.71429% { transform: translate(0, 0); }
				100% { transform: translate(0, 0); }
			}
    }
  `;

  return (
    <footer
      className="
				bg-black
				overflow-hidden

				flex
				flex-col
				justify-center
				items-center

				py-10
				md:p-[25px]
				md:relative
				md:grid
				md:grid-cols-12
				md:grid-rows-6
			"
      ref={containerRef}
      id="footer"
    >
      {new Array(12 * 6).fill(null).map((_, idx) => (
        <Arrow key={idx} />
      ))}
      <Email />
      <nav
        className="
				bg-black
				md:absolute
				md:bottom-8
				md:left-1/2
				md:-translate-x-1/2
				md:py-4
				md:px-8"
      >
        <ul className="flex">
          {navData.map((data: NavElem, idx) => (
            <li
              key={idx}
              className="mx-3 text-copy leading-copy tracking-copy text-white py-3 px-2"
            >
              <Link href={"/" + data.slug}>{data.title}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
