import SolidJS from "solid-js";

import TopNavBar from './components/topnavbar/TopNavBar'
import styles from './Base.module.scss';

interface props {
	children: SolidJS.JSXElement
}

const Base: SolidJS.Component<props> = (props) => {
 	return (
		<>
			<TopNavBar/>
			<div class="appBase">
				{props.children}
			</div>
		</>
  	);
};

export default Base;
