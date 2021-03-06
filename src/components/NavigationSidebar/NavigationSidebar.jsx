import React, { useState, useEffect } from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
// import '../../assets/scss/navigationSidebar.scss';
import classNames from 'classnames';
import {useSelector} from 'react-redux';

const NavigationSidebar = ({config}) => {
  const [colorSvg, setColorSvg] = useState(false);
  const [linkIdColor, setLinkIdColor] = useState('');
  const {url} = useRouteMatch();
  const users = useSelector(
    (state) => state.reducerContactBook.users
  );

  let pathname = window.location.pathname

  useEffect(() => {
    pathname = window.location.pathname;
  }, [window.location.pathname]);

  const linkId = ({ currentTarget: { id } }) => {
    setLinkIdColor(id);
  }

  return (
    <>
      <ul className="metismenu list-unstyled contact-book__list-nav" id="side-menu">
        <li>
          <Link
            id="all-contacts"
            to={`/contact-book/all-contacts`}
            className={classNames(`contact-book__item-${config?.style}`, {
              [`contact-book__item-active-${config?.style}`]: pathname.match(
                `/all-contacts`
              ),
            })}
            onMouseMove={(e) => {
              setColorSvg(true);
              linkId(e);
            }}
            onMouseOut={(e) => {
              setColorSvg(false);
              linkId(e);
            }}
          >
            {config?.style === 'sumra-chat' || config?.style === 'sumra-meet'
              ? config?.style === 'sumra-chat'
                ? <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                  <path 
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.34662 6.33329C3.34662 3.99996 5.18726 2.16663 7.5299 2.16663C9.87253 2.16663 11.7132 3.99996 11.7132 6.33329C11.7132 8.66663 9.87253 10.5 7.5299 10.5C5.18726 10.5 3.34662 8.66663 3.34662 6.33329ZM15.0598 16.3333V18C15.0598 18.5 14.7251 18.8333 14.2231 18.8333C13.7211 18.8333 13.3865 18.5 13.3865 18V16.3333C13.3865 14.9166 12.2988 13.8333 10.8765 13.8333H4.18328C2.76096 13.8333 1.67331 14.9166 1.67331 16.3333V18C1.67331 18.5 1.33865 18.8333 0.836655 18.8333C0.334662 18.8333 0 18.5 0 18V16.3333C0 14 1.84064 12.1666 4.18328 12.1666H10.8765C13.2192 12.1666 15.0598 14 15.0598 16.3333ZM7.52989 8.83329C6.10758 8.83329 5.01993 7.74996 5.01993 6.33329C5.01993 4.91663 6.10758 3.83329 7.52989 3.83329C8.95221 3.83329 10.0399 4.91663 10.0399 6.33329C10.0399 7.74996 8.95221 8.83329 7.52989 8.83329ZM16.9004 12.3333C16.4821 12.25 15.9801 12.5 15.8964 12.9166C15.8128 13.3333 16.0638 13.8333 16.4821 13.9166C17.5698 14.1666 18.3227 15.1666 18.3227 16.3333V18C18.3227 18.5 18.6574 18.8333 19.1594 18.8333C19.6614 18.8333 19.9961 18.5 19.9961 18V16.3333C20.0797 14.4166 18.8247 12.75 16.9004 12.3333ZM12.5498 2.91662C12.7172 2.41662 13.1355 2.16663 13.5538 2.33329C15.8128 2.83329 17.1514 5.16662 16.5658 7.49996C16.2311 8.99996 15.0598 10.0833 13.5538 10.5H13.3865C12.9682 10.5 12.6335 10.25 12.5498 9.83329C12.3825 9.41663 12.7172 8.91663 13.1355 8.83329C14.0558 8.58329 14.7251 7.91663 14.9761 6.99996C15.3108 5.58329 14.4741 4.24996 13.1355 3.91662C12.7172 3.83329 12.4662 3.33329 12.5498 2.91662Z"
                    fill={colorSvg && config?.style === 'sumra-chat'
                      ? linkIdColor === "all-contacts" ? '#DD7021' : '#8A94A6'
                      : pathname.match(`/all-contacts`) ? '#DD7021' : '#8A94A6'
                    }
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.34662 6.33329C3.34662 3.99996 5.18726 2.16663 7.5299 2.16663C9.87253 2.16663 11.7132 3.99996 11.7132 6.33329C11.7132 8.66663 9.87253 10.5 7.5299 10.5C5.18726 10.5 3.34662 8.66663 3.34662 6.33329ZM15.0598 16.3333V18C15.0598 18.5 14.7251 18.8333 14.2231 18.8333C13.7211 18.8333 13.3865 18.5 13.3865 18V16.3333C13.3865 14.9166 12.2988 13.8333 10.8765 13.8333H4.18328C2.76096 13.8333 1.67331 14.9166 1.67331 16.3333V18C1.67331 18.5 1.33865 18.8333 0.836655 18.8333C0.334662 18.8333 0 18.5 0 18V16.3333C0 14 1.84064 12.1666 4.18328 12.1666H10.8765C13.2192 12.1666 15.0598 14 15.0598 16.3333ZM7.52989 8.83329C6.10758 8.83329 5.01993 7.74996 5.01993 6.33329C5.01993 4.91663 6.10758 3.83329 7.52989 3.83329C8.95221 3.83329 10.0399 4.91663 10.0399 6.33329C10.0399 7.74996 8.95221 8.83329 7.52989 8.83329ZM16.9004 12.3333C16.4821 12.25 15.9801 12.5 15.8964 12.9166C15.8128 13.3333 16.0638 13.8333 16.4821 13.9166C17.5698 14.1666 18.3227 15.1666 18.3227 16.3333V18C18.3227 18.5 18.6574 18.8333 19.1594 18.8333C19.6614 18.8333 19.9961 18.5 19.9961 18V16.3333C20.0797 14.4166 18.8247 12.75 16.9004 12.3333ZM12.5498 2.91662C12.7172 2.41662 13.1355 2.16663 13.5538 2.33329C15.8128 2.83329 17.1514 5.16662 16.5658 7.49996C16.2311 8.99996 15.0598 10.0833 13.5538 10.5H13.3865C12.9682 10.5 12.6335 10.25 12.5498 9.83329C12.3825 9.41663 12.7172 8.91663 13.1355 8.83329C14.0558 8.58329 14.7251 7.91663 14.9761 6.99996C15.3108 5.58329 14.4741 4.24996 13.1355 3.91662C12.7172 3.83329 12.4662 3.33329 12.5498 2.91662Z"
                    fill={colorSvg && config?.style === 'sumra-chat'
                      ? linkIdColor === "all-contacts" ? '#DD7021' : '#8A94A6'
                      : pathname.match(`/all-contacts`) ? '#DD7021' : '#8A94A6'
                    }
                  />
                  </svg>
                : <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.34662 6.33329C3.34662 3.99996 5.18726 2.16663 7.5299 2.16663C9.87253 2.16663 11.7132 3.99996 11.7132 6.33329C11.7132 8.66663 9.87253 10.5 7.5299 10.5C5.18726 10.5 3.34662 8.66663 3.34662 6.33329ZM15.0598 16.3333V18C15.0598 18.5 14.7251 18.8333 14.2231 18.8333C13.7211 18.8333 13.3865 18.5 13.3865 18V16.3333C13.3865 14.9166 12.2988 13.8333 10.8765 13.8333H4.18328C2.76096 13.8333 1.67331 14.9166 1.67331 16.3333V18C1.67331 18.5 1.33865 18.8333 0.836655 18.8333C0.334662 18.8333 0 18.5 0 18V16.3333C0 14 1.84064 12.1666 4.18328 12.1666H10.8765C13.2192 12.1666 15.0598 14 15.0598 16.3333ZM7.52989 8.83329C6.10758 8.83329 5.01993 7.74996 5.01993 6.33329C5.01993 4.91663 6.10758 3.83329 7.52989 3.83329C8.95221 3.83329 10.0399 4.91663 10.0399 6.33329C10.0399 7.74996 8.95221 8.83329 7.52989 8.83329ZM16.9004 12.3333C16.4821 12.25 15.9801 12.5 15.8964 12.9166C15.8128 13.3333 16.0638 13.8333 16.4821 13.9166C17.5698 14.1666 18.3227 15.1666 18.3227 16.3333V18C18.3227 18.5 18.6574 18.8333 19.1594 18.8333C19.6614 18.8333 19.9961 18.5 19.9961 18V16.3333C20.0797 14.4166 18.8247 12.75 16.9004 12.3333ZM12.5498 2.91662C12.7172 2.41662 13.1355 2.16663 13.5538 2.33329C15.8128 2.83329 17.1514 5.16662 16.5658 7.49996C16.2311 8.99996 15.0598 10.0833 13.5538 10.5H13.3865C12.9682 10.5 12.6335 10.25 12.5498 9.83329C12.3825 9.41663 12.7172 8.91663 13.1355 8.83329C14.0558 8.58329 14.7251 7.91663 14.9761 6.99996C15.3108 5.58329 14.4741 4.24996 13.1355 3.91662C12.7172 3.83329 12.4662 3.33329 12.5498 2.91662Z"
                      fill={colorSvg && config?.style === 'sumra-meet'
                        ? linkIdColor === "all-contacts" ? '#377DFF' : '#8A94A6'
                        : pathname.match(`/all-contacts`) ? '#377DFF' : '#8A94A6'
                      }
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.34662 6.33329C3.34662 3.99996 5.18726 2.16663 7.5299 2.16663C9.87253 2.16663 11.7132 3.99996 11.7132 6.33329C11.7132 8.66663 9.87253 10.5 7.5299 10.5C5.18726 10.5 3.34662 8.66663 3.34662 6.33329ZM15.0598 16.3333V18C15.0598 18.5 14.7251 18.8333 14.2231 18.8333C13.7211 18.8333 13.3865 18.5 13.3865 18V16.3333C13.3865 14.9166 12.2988 13.8333 10.8765 13.8333H4.18328C2.76096 13.8333 1.67331 14.9166 1.67331 16.3333V18C1.67331 18.5 1.33865 18.8333 0.836655 18.8333C0.334662 18.8333 0 18.5 0 18V16.3333C0 14 1.84064 12.1666 4.18328 12.1666H10.8765C13.2192 12.1666 15.0598 14 15.0598 16.3333ZM7.52989 8.83329C6.10758 8.83329 5.01993 7.74996 5.01993 6.33329C5.01993 4.91663 6.10758 3.83329 7.52989 3.83329C8.95221 3.83329 10.0399 4.91663 10.0399 6.33329C10.0399 7.74996 8.95221 8.83329 7.52989 8.83329ZM16.9004 12.3333C16.4821 12.25 15.9801 12.5 15.8964 12.9166C15.8128 13.3333 16.0638 13.8333 16.4821 13.9166C17.5698 14.1666 18.3227 15.1666 18.3227 16.3333V18C18.3227 18.5 18.6574 18.8333 19.1594 18.8333C19.6614 18.8333 19.9961 18.5 19.9961 18V16.3333C20.0797 14.4166 18.8247 12.75 16.9004 12.3333ZM12.5498 2.91662C12.7172 2.41662 13.1355 2.16663 13.5538 2.33329C15.8128 2.83329 17.1514 5.16662 16.5658 7.49996C16.2311 8.99996 15.0598 10.0833 13.5538 10.5H13.3865C12.9682 10.5 12.6335 10.25 12.5498 9.83329C12.3825 9.41663 12.7172 8.91663 13.1355 8.83329C14.0558 8.58329 14.7251 7.91663 14.9761 6.99996C15.3108 5.58329 14.4741 4.24996 13.1355 3.91662C12.7172 3.83329 12.4662 3.33329 12.5498 2.91662Z"
                      fill={colorSvg && config?.style === 'sumra-meet'
                        ? linkIdColor === "all-contacts" ? '#377DFF' : '#8A94A6'
                        : pathname.match(`/all-contacts`) ? '#377DFF' : '#8A94A6'
                      }
                    />
                  </svg>
              : <i className="icon-users" />
            }
            <span>All contacts</span>
          </Link>
        </li>

        <li>
          <Link
            id="my-favourites"
            to={`/contact-book/my-favourites`}
            className={classNames(`contact-book__item-${config?.style}`, {
              [`contact-book__item-active-${config?.style}`]: pathname.match(
                '/my-favourites'
              ),
            })}
            onMouseMove={(e) => {
              setColorSvg(true);
              linkId(e);

            }}
            onMouseOut={(e) => {
              setColorSvg(false);
              linkId(e);
            }}
          >
            {config?.style === 'sumra-chat' || config?.style === 'sumra-meet'
              ? config?.style === 'sumra-chat'
                ? <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.4711 6.34447C18.8033 6.42767 19.0525 6.59407 19.1355 6.92686C19.2186 7.17646 19.1355 7.50925 18.8864 7.67565L15.066 11.4196L15.9796 16.7443C16.0626 17.0771 15.8965 17.4099 15.6474 17.5763C15.4813 17.6595 15.3152 17.7427 15.1491 17.7427H14.7338L9.99998 15.2467L5.26612 17.7427C4.93392 17.9091 4.60172 17.8259 4.35257 17.6595C4.10341 17.4931 3.93731 17.1603 4.02036 16.8275L4.93392 11.5028L1.11361 7.75885C0.864457 7.59245 0.781407 7.25965 0.864457 6.92686C1.03056 6.59407 1.27971 6.34447 1.61191 6.34447L6.84407 5.51248L9.25253 0.770166C9.50168 0.187777 10.4983 0.187777 10.7474 0.770166L13.1559 5.59568L18.4711 6.34447ZM13.322 11.3364C13.322 11.0868 13.405 10.8372 13.5711 10.5876L16.5609 7.67565L12.4915 7.09326C12.1593 7.09326 11.9101 6.92686 11.8271 6.67726L9.99998 3.01653L8.17288 6.76046C8.00678 6.92686 7.75763 7.17646 7.50847 7.17646L3.43901 7.75885L6.42882 10.5876C6.59492 10.8372 6.67797 11.0868 6.67797 11.3364L5.93052 15.4131L9.58473 13.4995C9.83388 13.3332 10.083 13.3332 10.3322 13.4995L13.9864 15.4131L13.322 11.3364Z"
                      fill={colorSvg && config?.style === 'sumra-chat'
                        ? linkIdColor === "my-favourites" ? '#DD7021' : '#8A94A6'
                        : pathname.match('/my-favourites') ? '#DD7021' : '#8A94A6'
                      }
                    />
                  </svg>
                : <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M18.4711 6.34447C18.8033 6.42767 19.0525 6.59407 19.1355 6.92686C19.2186 7.17646 19.1355 7.50925 18.8864 7.67565L15.066 11.4196L15.9796 16.7443C16.0626 17.0771 15.8965 17.4099 15.6474 17.5763C15.4813 17.6595 15.3152 17.7427 15.1491 17.7427H14.7338L9.99998 15.2467L5.26612 17.7427C4.93392 17.9091 4.60172 17.8259 4.35257 17.6595C4.10341 17.4931 3.93731 17.1603 4.02036 16.8275L4.93392 11.5028L1.11361 7.75885C0.864457 7.59245 0.781407 7.25965 0.864457 6.92686C1.03056 6.59407 1.27971 6.34447 1.61191 6.34447L6.84407 5.51248L9.25253 0.770166C9.50168 0.187777 10.4983 0.187777 10.7474 0.770166L13.1559 5.59568L18.4711 6.34447ZM13.322 11.3364C13.322 11.0868 13.405 10.8372 13.5711 10.5876L16.5609 7.67565L12.4915 7.09326C12.1593 7.09326 11.9101 6.92686 11.8271 6.67726L9.99998 3.01653L8.17288 6.76046C8.00678 6.92686 7.75763 7.17646 7.50847 7.17646L3.43901 7.75885L6.42882 10.5876C6.59492 10.8372 6.67797 11.0868 6.67797 11.3364L5.93052 15.4131L9.58473 13.4995C9.83388 13.3332 10.083 13.3332 10.3322 13.4995L13.9864 15.4131L13.322 11.3364Z"
                      fill={colorSvg && config?.style === 'sumra-meet'
                        ? linkIdColor === "my-favourites" ? '#377DFF' : '#8A94A6'
                        : pathname.match('/my-favourites') ? '#377DFF' : '#8A94A6'
                      }
                    />
                  </svg>
              : <i className="icon-star" />
            }
            <span>My favourites</span>
          </Link>
        </li>

        <li>
          <Link
            id="recently-added"
            to={`/contact-book/recently-added`}
            className={classNames(`contact-book__item-${config?.style}`, {
              [`contact-book__item-active-${config?.style}`]: pathname.match(
                '/recently-added'
              ),
            })}
            onMouseMove={(e) => {
              setColorSvg(true);
              linkId(e);

            }}
            onMouseOut={(e) => {
              setColorSvg(false);
              linkId(e);
            }}
          >
             {config?.style === 'sumra-chat' || config?.style === 'sumra-meet'
              ? config?.style === 'sumra-chat'
                ? <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.99998 1.33331C4.91665 1.33331 0.833313 5.41665 0.833313 10.5C0.833313 15.5833 4.91665 19.6666 9.99998 19.6666C15.0833 19.6666 19.1666 15.5833 19.1666 10.5C19.1666 5.41665 15.0833 1.33331 9.99998 1.33331ZM9.99998 18C5.83331 18 2.49998 14.6666 2.49998 10.5C2.49998 6.33331 5.83331 2.99998 9.99998 2.99998C14.1666 2.99998 17.5 6.33331 17.5 10.5C17.5 14.6666 14.1666 18 9.99998 18ZM13.0833 13.5833C13.4166 13.25 13.4166 12.75 13.0833 12.4166L10.8333 10.1666V5.49998C10.8333 4.99998 10.5 4.66665 9.99998 4.66665C9.49998 4.66665 9.16665 4.99998 9.16665 5.49998V10.5C9.16665 10.75 9.24998 10.9166 9.41665 11.0833L11.9166 13.5833C12.0833 13.75 12.25 13.8333 12.5 13.8333C12.75 13.8333 12.9166 13.75 13.0833 13.5833Z"
                      fill={colorSvg && config?.style === 'sumra-chat'
                        ? linkIdColor === "recently-added" ? '#DD7021' : '#8A94A6'
                        : pathname.match('/recently-added') ? '#DD7021' : '#8A94A6'
                      }
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.99998 1.33331C4.91665 1.33331 0.833313 5.41665 0.833313 10.5C0.833313 15.5833 4.91665 19.6666 9.99998 19.6666C15.0833 19.6666 19.1666 15.5833 19.1666 10.5C19.1666 5.41665 15.0833 1.33331 9.99998 1.33331ZM9.99998 18C5.83331 18 2.49998 14.6666 2.49998 10.5C2.49998 6.33331 5.83331 2.99998 9.99998 2.99998C14.1666 2.99998 17.5 6.33331 17.5 10.5C17.5 14.6666 14.1666 18 9.99998 18ZM13.0833 13.5833C13.4166 13.25 13.4166 12.75 13.0833 12.4166L10.8333 10.1666V5.49998C10.8333 4.99998 10.5 4.66665 9.99998 4.66665C9.49998 4.66665 9.16665 4.99998 9.16665 5.49998V10.5C9.16665 10.75 9.24998 10.9166 9.41665 11.0833L11.9166 13.5833C12.0833 13.75 12.25 13.8333 12.5 13.8333C12.75 13.8333 12.9166 13.75 13.0833 13.5833Z"
                      fill={colorSvg && config?.style === 'sumra-chat'
                        ? linkIdColor === "recently-added" ? '#DD7021' : '#8A94A6'
                        : pathname.match('/recently-added') ? '#DD7021' : '#8A94A6'
                      }
                    />
                  </svg>
                : <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.99998 1.33331C4.91665 1.33331 0.833313 5.41665 0.833313 10.5C0.833313 15.5833 4.91665 19.6666 9.99998 19.6666C15.0833 19.6666 19.1666 15.5833 19.1666 10.5C19.1666 5.41665 15.0833 1.33331 9.99998 1.33331ZM9.99998 18C5.83331 18 2.49998 14.6666 2.49998 10.5C2.49998 6.33331 5.83331 2.99998 9.99998 2.99998C14.1666 2.99998 17.5 6.33331 17.5 10.5C17.5 14.6666 14.1666 18 9.99998 18ZM13.0833 13.5833C13.4166 13.25 13.4166 12.75 13.0833 12.4166L10.8333 10.1666V5.49998C10.8333 4.99998 10.5 4.66665 9.99998 4.66665C9.49998 4.66665 9.16665 4.99998 9.16665 5.49998V10.5C9.16665 10.75 9.24998 10.9166 9.41665 11.0833L11.9166 13.5833C12.0833 13.75 12.25 13.8333 12.5 13.8333C12.75 13.8333 12.9166 13.75 13.0833 13.5833Z"
                      fill={colorSvg && config?.style === 'sumra-meet'
                        ? linkIdColor === "recently-added" ? '#377DFF' : '#8A94A6'
                        : pathname.match('/recently-added') ? '#377DFF' : '#8A94A6'
                      }
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.99998 1.33331C4.91665 1.33331 0.833313 5.41665 0.833313 10.5C0.833313 15.5833 4.91665 19.6666 9.99998 19.6666C15.0833 19.6666 19.1666 15.5833 19.1666 10.5C19.1666 5.41665 15.0833 1.33331 9.99998 1.33331ZM9.99998 18C5.83331 18 2.49998 14.6666 2.49998 10.5C2.49998 6.33331 5.83331 2.99998 9.99998 2.99998C14.1666 2.99998 17.5 6.33331 17.5 10.5C17.5 14.6666 14.1666 18 9.99998 18ZM13.0833 13.5833C13.4166 13.25 13.4166 12.75 13.0833 12.4166L10.8333 10.1666V5.49998C10.8333 4.99998 10.5 4.66665 9.99998 4.66665C9.49998 4.66665 9.16665 4.99998 9.16665 5.49998V10.5C9.16665 10.75 9.24998 10.9166 9.41665 11.0833L11.9166 13.5833C12.0833 13.75 12.25 13.8333 12.5 13.8333C12.75 13.8333 12.9166 13.75 13.0833 13.5833Z"
                      fill={colorSvg && config?.style === 'sumra-meet'
                        ? linkIdColor === "recently-added" ? '#377DFF' : '#8A94A6'
                        : pathname.match('/recently-added') ? '#377DFF' : '#8A94A6'
                      }
                    />
                  </svg>
              : <i className="icon-clock" />
            }
            <span style={{whiteSpace: 'nowrap'}}>Recently added</span>
            <span className={`contact-book__unread-${config?.style}`}>{users.length}</span>
          </Link>
        </li>
        <li>
          <Link
            id="referred-contact-book"
            to={`/contact-book/referred-contact-book`}
            className={classNames(`contact-book__item-${config?.style}`, {
              [`contact-book__item-active-${config?.style}`]: pathname.match(
                '/referred-contact-book'
              ),
            })}
            onMouseMove={(e) => {
              setColorSvg(true);
              linkId(e);

            }}
            onMouseOut={(e) => {
              setColorSvg(false);
              linkId(e);
            }}
          >
            {config?.style === 'sumra-chat' || config?.style === 'sumra-meet'
              ? config?.style === 'sumra-chat'
                ? <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.833313 10.5C0.833313 5.41665 4.91665 1.33331 9.99998 1.33331C15.0833 1.33331 19.1666 5.41665 19.1666 10.5C19.1666 15.5833 15.0833 19.6666 9.99998 19.6666C4.91665 19.6666 0.833313 15.5833 0.833313 10.5ZM10.8333 15.5V17.9166C14.3333 17.5833 17.0833 14.8333 17.4166 11.3333H15C14.5 11.3333 14.1666 11 14.1666 10.5C14.1666 9.99998 14.5 9.66665 15 9.66665H17.4166C17.0833 6.24998 14.3333 3.49998 10.8333 3.08332V5.49998C10.8333 5.99998 10.5 6.33332 9.99996 6.33332C9.49996 6.33332 9.16663 5.99998 9.16663 5.49998V3.08332C5.66663 3.41665 2.91663 6.16665 2.5833 9.66665H4.99996C5.49996 9.66665 5.8333 9.99998 5.8333 10.5C5.8333 11 5.49996 11.3333 4.99996 11.3333H2.5833C2.91663 14.75 5.66663 17.5 9.16663 17.9166V15.5C9.16663 15 9.49996 14.6666 9.99996 14.6666C10.5 14.6666 10.8333 15 10.8333 15.5Z"
                      fill={colorSvg && config?.style === 'sumra-chat'
                        ? linkIdColor === "referred-contact-book" ? '#DD7021' : '#8A94A6'
                        : pathname.match('/referred-contact-book') ? '#DD7021' : '#8A94A6'
                      }
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.833313 10.5C0.833313 5.41665 4.91665 1.33331 9.99998 1.33331C15.0833 1.33331 19.1666 5.41665 19.1666 10.5C19.1666 15.5833 15.0833 19.6666 9.99998 19.6666C4.91665 19.6666 0.833313 15.5833 0.833313 10.5ZM10.8333 15.5V17.9166C14.3333 17.5833 17.0833 14.8333 17.4166 11.3333H15C14.5 11.3333 14.1666 11 14.1666 10.5C14.1666 9.99998 14.5 9.66665 15 9.66665H17.4166C17.0833 6.24998 14.3333 3.49998 10.8333 3.08332V5.49998C10.8333 5.99998 10.5 6.33332 9.99996 6.33332C9.49996 6.33332 9.16663 5.99998 9.16663 5.49998V3.08332C5.66663 3.41665 2.91663 6.16665 2.5833 9.66665H4.99996C5.49996 9.66665 5.8333 9.99998 5.8333 10.5C5.8333 11 5.49996 11.3333 4.99996 11.3333H2.5833C2.91663 14.75 5.66663 17.5 9.16663 17.9166V15.5C9.16663 15 9.49996 14.6666 9.99996 14.6666C10.5 14.6666 10.8333 15 10.8333 15.5Z"
                      fill={colorSvg && config?.style === 'sumra-chat'
                        ? linkIdColor === "referred-contact-book" ? '#DD7021' : '#8A94A6'
                        : pathname.match('/referred-contact-book') ? '#DD7021' : '#8A94A6'
                      }
                    />
                  </svg>
                
                : <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.833313 10.5C0.833313 5.41665 4.91665 1.33331 9.99998 1.33331C15.0833 1.33331 19.1666 5.41665 19.1666 10.5C19.1666 15.5833 15.0833 19.6666 9.99998 19.6666C4.91665 19.6666 0.833313 15.5833 0.833313 10.5ZM10.8333 15.5V17.9166C14.3333 17.5833 17.0833 14.8333 17.4166 11.3333H15C14.5 11.3333 14.1666 11 14.1666 10.5C14.1666 9.99998 14.5 9.66665 15 9.66665H17.4166C17.0833 6.24998 14.3333 3.49998 10.8333 3.08332V5.49998C10.8333 5.99998 10.5 6.33332 9.99996 6.33332C9.49996 6.33332 9.16663 5.99998 9.16663 5.49998V3.08332C5.66663 3.41665 2.91663 6.16665 2.5833 9.66665H4.99996C5.49996 9.66665 5.8333 9.99998 5.8333 10.5C5.8333 11 5.49996 11.3333 4.99996 11.3333H2.5833C2.91663 14.75 5.66663 17.5 9.16663 17.9166V15.5C9.16663 15 9.49996 14.6666 9.99996 14.6666C10.5 14.6666 10.8333 15 10.8333 15.5Z"
                      fill={colorSvg && config?.style === 'sumra-meet'
                        ? linkIdColor === "referred-contact-book" ? '#377DFF' : '#8A94A6'
                        : pathname.match('/referred-contact-book') ? '#377DFF' : '#8A94A6'
                      }
                    />
                    <path
                      fillRule="evenodd" 
                      clipRule="evenodd"
                      d="M0.833313 10.5C0.833313 5.41665 4.91665 1.33331 9.99998 1.33331C15.0833 1.33331 19.1666 5.41665 19.1666 10.5C19.1666 15.5833 15.0833 19.6666 9.99998 19.6666C4.91665 19.6666 0.833313 15.5833 0.833313 10.5ZM10.8333 15.5V17.9166C14.3333 17.5833 17.0833 14.8333 17.4166 11.3333H15C14.5 11.3333 14.1666 11 14.1666 10.5C14.1666 9.99998 14.5 9.66665 15 9.66665H17.4166C17.0833 6.24998 14.3333 3.49998 10.8333 3.08332V5.49998C10.8333 5.99998 10.5 6.33332 9.99996 6.33332C9.49996 6.33332 9.16663 5.99998 9.16663 5.49998V3.08332C5.66663 3.41665 2.91663 6.16665 2.5833 9.66665H4.99996C5.49996 9.66665 5.8333 9.99998 5.8333 10.5C5.8333 11 5.49996 11.3333 4.99996 11.3333H2.5833C2.91663 14.75 5.66663 17.5 9.16663 17.9166V15.5C9.16663 15 9.49996 14.6666 9.99996 14.6666C10.5 14.6666 10.8333 15 10.8333 15.5Z"
                      fill={colorSvg && config?.style === 'sumra-meet'
                        ? linkIdColor === "referred-contact-book" ? '#377DFF' : '#8A94A6'
                        : pathname.match('/referred-contact-book') ? '#377DFF' : '#8A94A6'
                      }
                    />
                  </svg>
              : <i className="icon-crosshair" />
            }
            <span>Referred</span>
            <span className={`contact-book__unread-${config?.style}`}>{users.length}</span>
          </Link>
        </li>
      </ul>
      <Link
        id="add-contact"
        to={`/contact-book/add-contact`}
        className={classNames(
          `contact-book__add-new-group-${config?.style} contact-book__add-new-person-${config?.style}`,
          {
            [`contact-book__add-new-group-visible-${config?.style} contact-book__add-new-person-${config?.style}`]:
              pathname.match('/add-contact'),
          }
        )}
        onMouseMove={(e) => {
          setColorSvg(true);
          linkId(e);

        }}
        onMouseOut={(e) => {
          setColorSvg(false);
          linkId(e);
        }}
      >
        {config?.style === 'sumra-chat' || config?.style === 'sumra-meet'
          ? config?.style === 'sumra-chat'
            ? <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.92504 9.71411C3.98809 10.1566 4.44931 10.5 5.00889 10.5C5.61151 10.5 6.10002 10.1016 6.1 9.61029L6.09403 6.58834L9.11036 6.5823L9.21411 6.57496C9.65658 6.51191 10 6.05069 10 5.49111C9.99998 4.88849 9.60165 4.39998 9.11029 4.4L6.0892 4.40597L6.0823 1.38971L6.07591 1.29277C6.01669 0.847017 5.55365 0.500019 4.9912 0.5L4.86395 0.505981C4.32127 0.557355 3.90002 0.933382 3.9 1.38964L3.90683 4.4108L0.889714 4.4177L0.792773 4.42409C0.347017 4.48331 1.88771e-05 4.94635 0 5.5088L0.00598124 5.63605C0.0573553 6.17873 0.433382 6.59998 0.889641 6.6L3.91166 6.59316L3.9177 9.61036L3.92504 9.71411Z"
                  fill={colorSvg && config?.style === 'sumra-chat'
                    ? linkIdColor === "add-contact" ? '#DD7021' : '#8A94A6'
                    : pathname.match('/add-contact') ? '#DD7021' : '#8A94A6'
                  }
                />
              </svg>
            : <svg
                width="10"
                height="11"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.92504 9.71411C3.98809 10.1566 4.44931 10.5 5.00889 10.5C5.61151 10.5 6.10002 10.1016 6.1 9.61029L6.09403 6.58834L9.11036 6.5823L9.21411 6.57496C9.65658 6.51191 10 6.05069 10 5.49111C9.99998 4.88849 9.60165 4.39998 9.11029 4.4L6.0892 4.40597L6.0823 1.38971L6.07591 1.29277C6.01669 0.847017 5.55365 0.500019 4.9912 0.5L4.86395 0.505981C4.32127 0.557355 3.90002 0.933382 3.9 1.38964L3.90683 4.4108L0.889714 4.4177L0.792773 4.42409C0.347017 4.48331 1.88771e-05 4.94635 0 5.5088L0.00598124 5.63605C0.0573553 6.17873 0.433382 6.59998 0.889641 6.6L3.91166 6.59316L3.9177 9.61036L3.92504 9.71411Z"
                  fill={colorSvg && config?.style === 'sumra-meet'
                    ? linkIdColor === "add-contact" ? '#377DFF' : '#8A94A6'
                    : pathname.match('/add-contact') ? '#377DFF' : '#8A94A6'
                  }
                />
              </svg>
          : <i className="icon-plus"></i>
        }
        <span>Create contact</span>
      </Link>
    </>
  );
};

export default NavigationSidebar;
