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
	
			<Footer/>
	  </>
  );
};

export default App;
