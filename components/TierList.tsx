import React, { useState } from 'react';
import cn from 'classnames';

import styles from './TierList.module.scss';

const tiers = [
  'Outer Darkness',
  'Outer Darkness',
  'Outer Darkness',
  'Outer Darkness',
  'Telestial',
  'Telestial',
  'Telestial',
  'Terrestrial',
  'Terrestrial',
  'Celestial Heir',
];

export const TierList = ({ teamName }: { teamName: string }) => {
  const [currentSelection, setCurrentSelection] = useState(0);
  const [phoneAFriend, setPhoneAFriend] = useState(false);
  const [pollAudience, setPollAudience] = useState(false);
  const [fiftyFifty, setFiftyFifty] = useState(false);
  const [doubleDip, setDoubleDip] = useState(false);
  const [isPollAudienceVisible, setPollAudienceVisible] = useState(false);

  const handleClick = (index: number) => {
    setCurrentSelection(index);
  };

  return (
    <article className={styles.tierList}>
      <h2>{teamName}</h2>

      <section className={styles.lifelines}>
        <button onClick={() => setFiftyFifty(true)} disabled={!!fiftyFifty}>
          50:50
        </button>
        <button onClick={() => setPhoneAFriend(true)} disabled={!!phoneAFriend}>
          <svg
            width="25"
            height="25"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.2 10.8333C16.0166 10.8333 15.825 10.775 15.6416 10.7333C15.2704 10.6515 14.9055 10.5429 14.55 10.4083C14.1634 10.2677 13.7384 10.275 13.3569 10.4288C12.9754 10.5827 12.6642 10.8722 12.4833 11.2417L12.3 11.6167C11.4883 11.1652 10.7424 10.6044 10.0833 9.95C9.42894 9.29085 8.86815 8.545 8.41663 7.73334L8.76663 7.5C9.1361 7.3191 9.42561 7.00794 9.57946 6.62641C9.7333 6.24488 9.7406 5.81993 9.59996 5.43334C9.46765 5.07702 9.35908 4.71233 9.27496 4.34167C9.2333 4.15834 9.19996 3.96667 9.17496 3.775C9.07377 3.18802 8.76632 2.65645 8.30798 2.27603C7.84964 1.89562 7.27054 1.69134 6.67496 1.7H4.17496C3.81582 1.69663 3.46017 1.77068 3.13222 1.91711C2.80427 2.06354 2.51172 2.27892 2.27449 2.54857C2.03725 2.81823 1.86091 3.13583 1.75745 3.47976C1.654 3.8237 1.62586 4.18588 1.67496 4.54167C2.11891 8.03282 3.71332 11.2766 6.20634 13.7605C8.69936 16.2445 11.9489 17.8271 15.4416 18.2583H15.7583C16.3728 18.2592 16.9661 18.0338 17.425 17.625C17.6886 17.3892 17.8992 17.1002 18.0429 16.7769C18.1865 16.4537 18.2599 16.1037 18.2583 15.75V13.25C18.2481 12.6712 18.0373 12.1138 17.6619 11.6731C17.2865 11.2323 16.7698 10.9355 16.2 10.8333ZM16.6166 15.8333C16.6165 15.9517 16.5911 16.0686 16.5423 16.1764C16.4934 16.2841 16.4222 16.3802 16.3333 16.4583C16.2402 16.5387 16.1313 16.5988 16.0136 16.6347C15.896 16.6705 15.7721 16.6814 15.65 16.6667C12.529 16.2665 9.63016 14.8387 7.41056 12.6086C5.19096 10.3784 3.77697 7.47278 3.39163 4.35C3.37837 4.22793 3.38999 4.10444 3.4258 3.98699C3.4616 3.86955 3.52085 3.76058 3.59996 3.66667C3.67805 3.57778 3.77418 3.50654 3.88194 3.45768C3.98971 3.40883 4.10664 3.38349 4.22496 3.38334H6.72496C6.91875 3.37902 7.10798 3.4424 7.26008 3.56256C7.41218 3.68272 7.51764 3.85214 7.55829 4.04167C7.59163 4.26945 7.6333 4.49445 7.6833 4.71667C7.77956 5.15596 7.90768 5.58765 8.06663 6.00834L6.89996 6.55C6.80021 6.59577 6.71048 6.66079 6.63593 6.74133C6.56137 6.82187 6.50346 6.91635 6.46552 7.01933C6.42758 7.12231 6.41035 7.23178 6.41483 7.34144C6.41932 7.4511 6.44541 7.55879 6.49163 7.65834C7.69096 10.2273 9.756 12.2923 12.325 13.4917C12.5278 13.575 12.7554 13.575 12.9583 13.4917C13.0622 13.4545 13.1577 13.397 13.2393 13.3227C13.3208 13.2483 13.3868 13.1584 13.4333 13.0583L13.95 11.8917C14.3808 12.0457 14.8204 12.1737 15.2666 12.275C15.4889 12.325 15.7139 12.3667 15.9416 12.4C16.1312 12.4407 16.3006 12.5461 16.4207 12.6982C16.5409 12.8503 16.6043 13.0395 16.6 13.2333L16.6166 15.8333Z"
              fill="#FFFFFF"
            />
          </svg>
        </button>
        <button
          onClick={() => setPollAudienceVisible(true)}
          disabled={!!pollAudience}
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.66659 10.8333C2.12682 10.8333 2.49992 11.2064 2.49992 11.6667V16.6667C2.49992 17.1269 2.12682 17.5 1.66659 17.5C1.20635 17.5 0.833252 17.1269 0.833252 16.6667V11.6667C0.833252 11.2064 1.20635 10.8333 1.66659 10.8333Z"
              fill="#FFFFFF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M16.6666 5.83333C17.1268 5.83333 17.4999 6.20643 17.4999 6.66667V16.6667C17.4999 17.1269 17.1268 17.5 16.6666 17.5C16.2063 17.5 15.8333 17.1269 15.8333 16.6667V6.66667C15.8333 6.20643 16.2063 5.83333 16.6666 5.83333Z"
              fill="#FFFFFF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.6666 10C12.1268 10 12.4999 10.3731 12.4999 10.8333V16.6667C12.4999 17.1269 12.1268 17.5 11.6666 17.5C11.2063 17.5 10.8333 17.1269 10.8333 16.6667V10.8333C10.8333 10.3731 11.2063 10 11.6666 10Z"
              fill="#FFFFFF"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.66658 2.5C7.12682 2.5 7.49992 2.8731 7.49992 3.33333V16.6667C7.49992 17.1269 7.12682 17.5 6.66658 17.5C6.20635 17.5 5.83325 17.1269 5.83325 16.6667V3.33333C5.83325 2.8731 6.20635 2.5 6.66658 2.5Z"
              fill="#FFFFFF"
            />
          </svg>
        </button>
        <button onClick={() => setDoubleDip(true)} disabled={!!doubleDip}>
          x2
        </button>
      </section>
      <section className={styles.tiers}>
        {tiers
          .map((tier, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              className={cn(styles.tier, {
                [styles.current]: index === currentSelection,
                [styles.newTier]: [4, 7, 9].includes(index),
              })}
            >
              <span>{index + 1}</span>
              <span>{tier}</span>
            </button>
          ))
          .reverse()}
      </section>

      {isPollAudienceVisible && (
        <div className={styles.pollAudienceModal}>
          <button
            className={styles.closeButton}
            onClick={() => {
              setPollAudienceVisible(false);
              setPollAudience(true);
            }}
          >
            &times;
          </button>
          <iframe
            src="https://embed.polleverywhere.com/multiple_choice_polls/CGrlwGARCcA7tIbrjmTyc?controls=none&short_poll=true"
            width="800px"
            height="600px"
          ></iframe>
        </div>
      )}
    </article>
  );
};
