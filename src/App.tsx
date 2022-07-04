import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.css';
import Entries from './components/Entries';
import Footer from './components/footer';
import Header from './components/header';
import SectionDivider from './components/SectionDivider';
import Video from './components/Video';

const App: Component = () => {
  return (
	  <>
	  		<Header/>

			<Video/>	
	  		
			<SectionDivider/>

			<Entries/>

			<SectionDivider/>
			<div class="flex flex-col items-start w-4/5 m-auto overflow-x-hidden mb-8">
				<img src='https://cdn.discordapp.com/attachments/909796769800519711/992537412498636911/unknown.png'></img>
			</div>
	
			<Footer/>
	  </>
  );
};

export default App;
