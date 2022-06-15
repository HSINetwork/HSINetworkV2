/* @refresh reload */
import { render } from 'solid-js/web';

import './index.module.scss';
import Base from './Base'

import logo from './logo.svg';
import styles from './index.module.scss';

render(() => 
<>
	<Base>
		<div class={styles.index}>
      		<header class={styles.header}>
        		<img src={logo} class={styles.logo} alt="logo" />
        		<p>
          			Edit <code>src/App.tsx</code> and save to reload.
        		</p>
        		<a
          			class={styles.link}
          			href="https://github.com/solidjs/solid"
          			target="_blank"
          			rel="noopener noreferrer"
        		>
          			Learn Solid
        		</a>
      		</header>
    	</div>
	</Base>
</>
, document.getElementById('root') as HTMLElement);
