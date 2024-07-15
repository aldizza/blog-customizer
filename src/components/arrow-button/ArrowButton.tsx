//стартер
// import arrow from 'src/images/arrow.svg';

// import styles from './ArrowButton.module.scss';

/** Функция для обработки открытия/закрытия формы */
// export type OnClick = () => void;

// export const ArrowButton = () => {
// 	return (
// 		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
// 		<div
// 			role='button'
// 			aria-label='Открыть/Закрыть форму параметров статьи'
// 			tabIndex={0}
// 			className={styles.container}>
// 			<img src={arrow} alt='иконка стрелочки' className={styles.arrow} />
// 		</div>
// 	);
// };

//Файл полностью готов

import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';

import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

export type ArrowButtonProps = {
	isActive: boolean;
	onClick: OnClick;
};

export const ArrowButton = (props: ArrowButtonProps) => {
	const { onClick, isActive } = props;

	return (
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={clsx(styles.container, isActive && styles.container_open)}
			onClick={onClick}>
			<img src={arrow} alt='иконка стрелочки' className={styles.arrow} />
		</div>
	);
};



