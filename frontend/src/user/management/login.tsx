/* @refresh reload */
import { render } from 'solid-js/web';

import './index.scss';
import Base from './../../Base'

render(() => 
<>
	<Base>
		<App />
	</Base>
</>
, document.getElementById('root') as HTMLElement);
