import { ReactNode } from "react";
import styles from "../styles/ActionBat.module.scss";

interface IActionBarButton {
  title: string;
  svgInner: ReactNode;
}

export function ActionBar({
  setPreviewVisible,
  setStatusBarVisible,
  setHeaderVisible,
}: {
  setPreviewVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setStatusBarVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setHeaderVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const svgInnerTop: IActionBarButton[] = [
    {
      title: "Toggle navigation bar",
      svgInner: (
        <>
          <path d="M19,8.977l-14,0l0,10l14,0m0,2l-14,0c-1.104,0 -2,-0.896 -2,-2l0,-10c0,-1.105 0.896,-2 2,-2l14,0c1.105,0 2,0.895 2,2l0,10c0,1.104 -0.895,2 -2,2Z"></path>
          <rect x="3" y="3.023" width="18" height="2"></rect>,
        </>
      ),
    },
    {
      title: "Toggle side preview",
      svgInner: (
        <path d="M11,20.977l-6,0c-1.104,0 -2,-0.896 -2,-2l0,-14c0,-1.105 0.896,-2 2,-2l14,0c1.105,0 2,0.895 2,2l0,14c0,1.104 -0.895,2 -2,2l-6,0l0,0.023l-2,0l0,-0.023Zm0,-2l0,-14l-6,0l0,14l6,0Zm8,-14l-6,0l0,14l6,0l0,-14Z"></path>
      ),
    },
    {
      title: "Reader mode",
      svgInner: (
        <path d="M 11.9994,8.99813C 10.3424,8.99813 8.99941,10.3411 8.99941,11.9981C 8.99941,13.6551 10.3424,14.9981 11.9994,14.9981C 13.6564,14.9981 14.9994,13.6551 14.9994,11.9981C 14.9994,10.3411 13.6564,8.99813 11.9994,8.99813 Z M 11.9994,16.9981C 9.23841,16.9981 6.99941,14.7591 6.99941,11.9981C 6.99941,9.23714 9.23841,6.99813 11.9994,6.99813C 14.7604,6.99813 16.9994,9.23714 16.9994,11.9981C 16.9994,14.7591 14.7604,16.9981 11.9994,16.9981 Z M 11.9994,4.49813C 6.99741,4.49813 2.72741,7.60915 0.99941,11.9981C 2.72741,16.3871 6.99741,19.4981 11.9994,19.4981C 17.0024,19.4981 21.2714,16.3871 22.9994,11.9981C 21.2714,7.60915 17.0024,4.49813 11.9994,4.49813 Z "></path>
      ),
    },
  ];

  const svgInnerBottom: IActionBarButton[] = [
    {
      title: "Toggle status bar",
      svgInner: (
        <>
          <path d="M19,15.023l-14,0l0,-10l14,0m0,-2l-14,0c-1.104,0 -2,0.896 -2,2l0,10c0,1.105 0.896,2 2,2l14,0c1.105,0 2,-0.895 2,-2l0,-10c0,-1.104 -0.895,-2 -2,-2Z"></path>
          <rect x="3" y="18.977" width="18" height="2"></rect>
        </>
      ),
    },
  ];

  function handleButtonClick(title: string) {
    if (title === "Toggle side preview") {
      setPreviewVisible((prev) => !prev);
    } else if (title === "Toggle navigation bar") {
      setHeaderVisible((prev) => !prev);
    } else if (title === "Toggle status bar") {
      setStatusBarVisible((prev) => !prev);
    }
  }

  return (
    <div className={styles.bar}>
      <div className={styles.barTop}>
        {svgInnerTop.map((s, i) => (
          <button
            key={i}
            className={styles.iconBtn}
            title={s.title}
            onClick={() => handleButtonClick(s.title)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={styles.icon}
              fill="#8b8b8b"
            >
              {s.svgInner}
            </svg>
          </button>
        ))}
      </div>
      <div className={styles.barBottom}>
        {svgInnerBottom.map((s, i) => (
          <button
            key={i}
            className={styles.iconBtn}
            title={s.title}
            onClick={() => handleButtonClick(s.title)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className={styles.icon}
              fill="#8b8b8b"
            >
              {s.svgInner}
            </svg>
          </button>
        ))}
      </div>
    </div>
  );
}
