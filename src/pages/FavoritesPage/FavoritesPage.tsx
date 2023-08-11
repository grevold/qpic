import s from "./FavoritesPage.module.css";

export const FavoritesPage = () => {
  function playKick() {
    let audio = new Audio(
      `${process.env.PUBLIC_URL}/Samples/Drums/Kick_02.mp3`
    );
    audio.play();
  }
  function playHat() {
    let audio = new Audio(`${process.env.PUBLIC_URL}/Samples/Drums/Hat_01.mp3`);
    audio.play();
  }
  function playClap() {
    let audio = new Audio(
      `${process.env.PUBLIC_URL}/Samples/Drums/Clap_06.mp3`
    );
    audio.play();
  }
  function playBass() {
    let audio = new Audio(
      `${process.env.PUBLIC_URL}/Samples/Drums/Bass_01.mp3`
    );
    audio.play();
  }

  return (
    <div className={s.root_music}>
      <div className={s.playground}>
        <div className={s.sound} onClick={playKick}>
          Kick
        </div>
        <div className={s.sound} onClick={playHat}>
          Hat
        </div>
        <div className={s.sound} onClick={playClap}>
          Clap
        </div>
        <div className={s.sound} onClick={playBass}>
          Bass
        </div>
      </div>
    </div>
  );
};
