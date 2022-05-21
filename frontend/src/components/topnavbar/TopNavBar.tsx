import SolidJS from "solid-js";

import styles from './TopNavBar.module.scss';
import logo from './../../logo.svg'

interface pi {
	children: SolidJS.JSXElement
}

const TopNavBar: SolidJS.Component<pi> = (props) => {
  return (
    <div class={styles.base}>
		<img class={styles.image} src={logo}/>
		<div class={styles.bar}>
			{props.children}
		</div>
    </div>
  );
};

export default TopNavBar;
