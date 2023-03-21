import { useEffect, useRef } from 'react';

import styles from './Sounds.module.scss';

var currentPlayer: HTMLAudioElement | null;

export const Sounds = ({ hidden }: { hidden: boolean }) => {
  const keysRef = [
    49, 50, 51, 52, 53, 81, 87, 69, 89, 88, 67, 65, 83, 68, 70, 71, 72, 74, 75,
    82,
  ];

  const seekbarRef = useRef<HTMLProgressElement>(null);

  function updateUI(currentTime: number, duration: number) {
    seekbarRef.current?.setAttribute(
      'value',
      (1 - currentTime / duration).toFixed(20)
    );
  }

  function playSound(e: any) {
    // Check if the pressed key is in the array, if not, the audio continues to play
    if (keysRef.includes(e.keyCode)) {
      const audioElement: HTMLAudioElement | null = document.querySelector(
        `audio[data-key="${e.keyCode}"]`
      );

      if (currentPlayer && currentPlayer != audioElement) {
        currentPlayer.pause();
        currentPlayer.currentTime = 0;
      }

      if (audioElement) {
        if (audioElement?.paused) {
          audioElement.play();
        } else {
          audioElement?.pause();
          audioElement.currentTime = 0;
        }

        currentPlayer = audioElement;

        if (!audioElement) return;

        audioElement.addEventListener('timeupdate', () =>
          updateUI(audioElement.currentTime, audioElement.duration)
        );
      }
    } else if (e.keyCode === 13) {
      if (currentPlayer) {
        currentPlayer.pause();
        currentPlayer.currentTime = 0;
        currentPlayer = null;
      }
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', playSound);

    return () => {
      window.removeEventListener('keydown', playSound);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <progress
        style={hidden ? { display: 'none' } : undefined}
        ref={seekbarRef}
        id="seekbar"
        value="0"
        max="1"
        className={styles.seekbar}
      ></progress>
      <div style={{ display: 'none' }}>
        <div className="row">
          <h2>General music</h2>
          <div className="keys">
            <button data-key="49" className="key">
              <kbd data-key="49" className="btnTitle">
                1
              </kbd>
              <span data-key="49" className="sound">
                Main Theme
              </span>
              <progress id="seekbar49" value="0" max="1"></progress>
              <audio
                id="player"
                preload="auto"
                data-key="49"
                src="sounds/main theme.mp3"
              ></audio>
            </button>
            <button data-key="50" className="key">
              <kbd data-key="50" className="btnTitle">
                2
              </kbd>
              <span data-key="50" className="sound">
                Let&apos;s play !
              </span>
              <progress id="seekbar50" value="0" max="1"></progress>
              <audio
                id="player"
                preload="auto"
                data-key="50"
                src="sounds/lets play.mp3"
              ></audio>
            </button>
            <button data-key="51" className="key">
              <kbd data-key="51" className="btnTitle">
                3
              </kbd>
              <span data-key="51" className="sound">
                Candidate&apos;s coming
              </span>
              <progress id="seekbar51" value="0" max="1"></progress>
              <audio
                id="player"
                preload="auto"
                data-key="51"
                src="sounds/candidate's arriving.mp3"
              ></audio>
            </button>
            <button data-key="52" className="key">
              <kbd data-key="52" className="btnTitle">
                4
              </kbd>
              <span data-key="52" className="sound">
                Fastest finger
              </span>
              <progress id="seekbar52" value="0" max="1"></progress>
              <audio
                id="player"
                preload="auto"
                data-key="52"
                src="sounds/fastest finger.mp3"
              ></audio>
            </button>
            <button data-key="53" className="key">
              <kbd data-key="53" className="btnTitle">
                5
              </kbd>
              <span data-key="53" className="sound">
                Commercial break
              </span>
              <progress id="seekbar53" value="0" max="1"></progress>
              <audio
                id="player"
                preload="auto"
                data-key="53"
                src="sounds/commerical break.mp3"
              ></audio>
            </button>
          </div>
        </div>

        <hr />

        <div className="row">
          <h2>Jokers music</h2>
          <div className="keys">
            <button data-key="81" className="key">
              <kbd data-key="81" className="btnTitle">
                Q
              </kbd>
              <span data-key="81" className="sound">
                50 / 50
              </span>
              <progress id="seekbar81" value="0" max="1"></progress>
              <audio
                preload="auto"
                data-key="81"
                src="sounds/50-50.mp3"
              ></audio>
            </button>
            <button data-key="87" className="key">
              <kbd data-key="87" className="btnTitle">
                W
              </kbd>
              <span data-key="87" className="sound">
                Call a friend
              </span>
              <progress id="seekbar87" value="0" max="1"></progress>
              <audio
                preload="auto"
                data-key="87"
                src="sounds/phone a friend.mp3"
              ></audio>
            </button>
            <button data-key="69" className="key">
              <kbd data-key="69" className="btnTitle">
                E
              </kbd>
              <span data-key="69" className="sound">
                Ask the audience
              </span>
              <progress id="seekbar69" value="0" max="1"></progress>
              <audio
                preload="auto"
                data-key="69"
                src="sounds/ask the audience.mp3"
              ></audio>
            </button>
            <button data-key="82" className="key">
              <kbd data-key="82" className="btnTitle">
                R
              </kbd>
              <span data-key="82" className="sound">
                Ask the host
              </span>
              <progress id="seekbar82" value="0" max="1"></progress>
              <audio
                preload="auto"
                data-key="82"
                src="sounds/ask the host.mp3"
              ></audio>
            </button>
          </div>
        </div>

        <hr />

        <div className="row">
          <h2>Question sounds</h2>
          <div className="keys">
            <button data-key="65" className="key">
              <kbd data-key="65" className="btnTitle">
                A
              </kbd>
              <span data-key="65" className="sound">
                $100 - $1,000 question
              </span>
              <progress id="seekbar65" value="0" max="1"></progress>
              <audio
                preload="auto"
                data-key="65"
                loop={true}
                src="sounds/100-1000 music.mp3"
              ></audio>
            </button>
            <button data-key="83" className="key">
              <kbd data-key="83" className="btnTitle">
                S
              </kbd>
              <span data-key="83" className="sound">
                $2,000 - $32,000 question
              </span>
              <progress id="seekbar83" value="0" max="1"></progress>
              <audio
                preload="auto"
                data-key="83"
                src="sounds/2000-32000.mp3"
              ></audio>
            </button>
            <button data-key="68" className="key">
              <kbd data-key="68" className="btnTitle">
                D
              </kbd>
              <span data-key="68" className="sound">
                $64,000 question
              </span>
              <progress id="seekbar68" value="0" max="1"></progress>
              <audio
                preload="auto"
                data-key="68"
                src="sounds/64000 music.mp3"
              ></audio>
            </button>
            <button data-key="70" className="key">
              <kbd data-key="70" className="btnTitle">
                F
              </kbd>
              <span data-key="70" className="sound">
                $125,000 - $250,000 question
              </span>
              <progress id="seekbar70" value="0" max="1"></progress>
              <audio
                preload="auto"
                data-key="70"
                src="sounds/125000-250000 music.mp3"
              ></audio>
            </button>
            <button data-key="71" className="key">
              <kbd data-key="71" className="btnTitle">
                G
              </kbd>
              <span data-key="71" className="sound">
                $500,000 question
              </span>
              <progress id="seekbar71" value="0" max="1"></progress>
              <audio
                preload="auto"
                data-key="71"
                src="sounds/500000 music.mp3"
              ></audio>
            </button>
            <button data-key="72" className="key">
              <kbd data-key="72" className="btnTitle">
                H
              </kbd>
              <span data-key="72" className="sound">
                $1,000,000 question
              </span>
              <progress id="seekbar72" value="0" max="1"></progress>
              <audio
                preload="auto"
                data-key="72"
                src="sounds/1000000 music.mp3"
              ></audio>
            </button>
            <button data-key="74" className="key">
              <kbd data-key="74" className="btnTitle">
                J
              </kbd>
              <span data-key="74" className="sound">
                Question type selection
              </span>
              <progress id="seekbar74" value="0" max="1"></progress>
              <audio
                preload="auto"
                data-key="74"
                src="sounds/question selection.mp3"
              ></audio>
            </button>
            <button data-key="75" className="key">
              <kbd data-key="75" className="btnTitle">
                K
              </kbd>
              <span data-key="75" className="sound">
                New section
              </span>
              <progress id="seekbar75" value="0" max="1"></progress>
              <audio
                preload="auto"
                data-key="75"
                src="sounds/new question section.mp3"
              ></audio>
            </button>
          </div>
        </div>

        <hr />

        <div className="row">
          <h2>Answers sounds</h2>
          <div className="keys">
            <button data-key="89" className="key">
              <kbd data-key="89" className="btnTitle">
                Y
              </kbd>
              <span data-key="89" className="sound">
                Final answer
              </span>
              <progress id="seekbar89" value="0" max="1"></progress>
              <audio
                preload="auto"
                data-key="89"
                src="sounds/final answer.mp3"
              ></audio>
            </button>
            <button data-key="88" className="key">
              <kbd data-key="88" className="btnTitle">
                X
              </kbd>
              <span data-key="88" className="sound">
                Correct answer
              </span>
              <progress id="seekbar88" value="0" max="1"></progress>
              <audio
                preload="auto"
                data-key="88"
                src="sounds/correct answer.mp3"
              ></audio>
            </button>
            <button data-key="67" className="key">
              <kbd data-key="67" className="btnTitle">
                C
              </kbd>
              <span data-key="67" className="sound">
                Wrong answer
              </span>
              <progress id="seekbar67" value="0" max="1"></progress>
              <audio
                preload="auto"
                data-key="67"
                src="sounds/wrong answer.mp3"
              ></audio>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
