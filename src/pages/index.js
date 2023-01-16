import React, { useEffect, useContext } from 'react';
import Head from 'next/head';
import { LangContext, Main } from '../components';

const Home = () => {
	const [messages, changeLang, lang, setLang] = useContext(LangContext);
	useEffect(() => {
		window.electron.invoke('get-lang').then((lang) => {
			setLang(lang);
			changeLang(lang);
		});
	}, []);
	return (
		<>
			<Head />
			<Main></Main>
		</>
	);
};

export default Home;
