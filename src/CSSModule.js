import React from 'react';
import className from 'classnames/bind';
import styles from './CSSModule.module.scss';

const CSSModule = () => {
  return (
    // <div className={`${styles.wrapper} ${styles.inverted}`}> // 클래스 이름을 두개 이상 적용할 때는 위 처럼.
    // 아래는 기본 설정
    <div className={styles.wrapper}>
      안녕하세요, 저는 <span className="something">CSS Module</span>
    </div>
  );
};

export default CSSModule;