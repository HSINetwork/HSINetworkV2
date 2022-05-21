import SolidJS from "solid-js";

import TopNavBar from './components/topnavbar/TopNavBar'
import TopNavBarItem from './components/topnavbar/item/Item'
import styles from './Base.module.scss';

interface pi {
	children: SolidJS.JSXElement
}

const Base: SolidJS.Component<pi> = (props) => {
 	return (
		<>
			<TopNavBar>
				<TopNavBarItem link="https://youtube.com">
					test
				</TopNavBarItem>
				<TopNavBarItem link="https://youtube.com">
					test 2
				</TopNavBarItem>
			</TopNavBar>
			<div class="appBase">
				{props.children}
			</div>
		</>
  	);
};

export default Base;
