import SolidJS from "solid-js";

import styles from './Item.module.scss';

interface pi {
	link: string,
	children: string
}

const TopNavBarItem: SolidJS.Component<pi> = (props) => {
  return (
	<a class={styles.base} href={props.link}>
		{props.children}
	</a>
  );
};

export default TopNavBarItem;
